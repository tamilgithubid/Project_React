import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import UpdateForm from './UpdateForm';

const Modal = ({ isOpen, onClose, user, onDelete, isUpdateMode }) => {
    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}  >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{isUpdateMode ? 'Update User' : 'User Details'}</DialogTitle>
                </DialogHeader>
                {isUpdateMode ? (
                    <UpdateForm user={user} onClose={onClose} />
                ) : (
                    <div className='justify-center  text-center inline-block'  >
                        <img src={typeof user.profileImage === 'string' ? user.profileImage : '/default-profile-image.jpg'} alt="Profile" className="modal-img rounded-full w-44 ms-36 h-44 object-cover" />
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Contact:</strong> {user.contact}</p>
                        <p><strong>About:</strong> {user.about}</p>
                        <p><strong>Description:</strong> {user.description}</p>
                        <div className="mt-4  ">
                            <Button onClick={() => onDelete(user.id)} className='me-6' variant="destructive">
                                Delete
                            </Button>
                            <Button onClick={onClose} variant="outline">
                                Cancel
                            </Button>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default Modal;
