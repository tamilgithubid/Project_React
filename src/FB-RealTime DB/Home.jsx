import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import Form from './Form';
import DataTable from './DataTable';
import Modal from './Modal';
import { db } from '@/FireBase/firebase';
import CardComponent from './Card';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isFormOpen, setFormOpen] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'));
            const usersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(usersList);
        };

        fetchUsers();
    }, []);

    const handleView = (user) => {
        setSelectedUser(user);
        setIsUpdateMode(false);
        setModalOpen(true);
    };

    const handleUpdate = (user) => {
        setSelectedUser(user);
        setIsUpdateMode(true);
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'users', id));
        setUsers(users.filter(user => user.id !== id));
        setModalOpen(false);
    };

    return (
        <div className="container ">
            <div className="tabs  ">
                <Button onClick={() => setFormOpen(true)}>Add New User</Button>
            </div>
            <div className='justify-center flex' >
                {isFormOpen && <Form onClose={() => setFormOpen(false)} />}
            </div>
            <div className="cards   inline-flex gap-10 mt-5">
                {users.map(user => (
                    <CardComponent key={user.id} user={user} onUpdate={handleUpdate} onView={handleView} />
                ))}
            </div>

            <div className="table">
                <DataTable users={users} onUpdate={handleUpdate} onView={handleView} />
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} user={selectedUser} onDelete={handleDelete} isUpdateMode={isUpdateMode} />
        </div>
    );
};

export default Home;
