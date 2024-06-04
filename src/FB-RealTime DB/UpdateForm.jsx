import React, { useState, useEffect } from 'react';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Button } from '@/components/ui/button';
import { doc, updateDoc } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { db, storage } from '@/FireBase/firebase';
import { toast } from 'react-toastify';

const UpdateForm = ({ user, onClose }) => {
    const [formData, setFormData] = useState(user);

    console.log('Updating_user', user);
    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({ ...prevData, profileImage: e.target.files[0] }));
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

            const userDoc = doc(db, 'users', formData.id);
            await updateDoc(userDoc, {
                ...formData,
                profileImage: downloadURL
            });
            console.log('Upload_data', userDoc, downloadURL);
            onClose();
            toast.success('Data Updated successfully!');
        } catch (e) {
            console.error('Error updating document: ', e);
        }
    };

    return (
        <form className="p-4 bg-white shadow-md rounded" onSubmit={handleSubmit}>
            <Label>Name</Label>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <Label>Age</Label>
            <Input type="number" name="age" value={formData.age} onChange={handleChange} required />

            <Label>Email</Label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <Label>Contact</Label>
            <Input type="text" name="contact" value={formData.contact} onChange={handleChange} required />

            <Label>Salary</Label>
            <Input type="number" name="salary" value={formData.salary} onChange={handleChange} required />

            <Label>About</Label>
            <Input type="text" name="about" value={formData.about} onChange={handleChange} required />

            <Label>Description</Label>
            <Input type="text" name="description" value={formData.description} onChange={handleChange} required />

            <Label>Profile Image</Label>
            <Input type="file" name="profileImage" onChange={handleFileChange} />

            <Button type="submit">Update</Button>
            <Button type="button" onClick={onClose} variant="secondary">Cancel</Button>
        </form>
    );
};

export default UpdateForm;
