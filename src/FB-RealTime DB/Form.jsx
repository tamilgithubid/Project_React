import React, { useState, useEffect } from 'react';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button } from '@/components/ui/button';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { db, storage } from '@/FireBase/firebase';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'react-toastify';

const Form = ({ onClose, user }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        contact: '',
        salary: '',
        about: '',
        description: '',
        profileImage: null,
    });

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log('handleFileChange', { [name]: value });
    };

    const handleFileChange = (e) => {

        setFormData((prevData) => ({ ...prevData, profileImage: e.target.files[0] }));
        console.log('handleFileChange', { profileImage: e.target.files[0] })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let downloadURL = formData.profileImage;
            if (formData.profileImage instanceof File) {
                const file = formData.profileImage;
                const storageReference = storageRef(storage, `profileImages/${file.name}`);
                const snapshot = await uploadBytes(storageReference, file);
                downloadURL = await getDownloadURL(snapshot.ref);
            }

            const userData = {
                ...formData,
                profileImage: downloadURL
            };

            if (user?.id) {
                await updateDoc(doc(db, 'users', user.id), userData);
            } else {
                await addDoc(collection(db, 'users'), userData);
            }

            onClose();
            toast.success('Data saved successfully!');
        } catch (e) {
            console.error('Error adding/updating document: ', e);
        }
    };

    return (
        <Card className='w-1/2 mt-5' >
            <CardContent  >
                <form className="p-4 bg-white mt-1 shadow-md rounded" onSubmit={handleSubmit}>
                    <Label   >Name</Label>
                    <Input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange} required />

                    <Label   >Age</Label>
                    <Input type="number" name="age" placeholder="age" value={formData.age} onChange={handleChange} required />

                    <Label   >Email</Label>
                    <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

                    <Label   >Contact</Label>
                    <Input type="text" name="contact" placeholder="number" value={formData.contact} onChange={handleChange} required />

                    <Label   >Salary</Label>
                    <Input type="number" name="salary" placeholder="salary" value={formData.salary} onChange={handleChange} required />

                    <Label   >About</Label>
                    <Input type="text" name="about" placeholder="about" value={formData.about} onChange={handleChange} required />

                    <Label   >Description</Label>
                    <Input type="text" name="description" placeholder="description" value={formData.description} onChange={handleChange} required />

                    <Label   >Profile Image</Label>
                    <Input type="file" name="profileImage" onChange={handleFileChange} />
                    <div className=' mt-3' >
                        <Button type="submit">Submit</Button>
                        <Button className=' ms-5 ' type="button" onClick={onClose} variant="outline">Cancel</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default Form;
