import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CardComponent = ({ user, onUpdate, onView }) => {
    const profileImageUrl = typeof user.profileImage === 'string' ? user.profileImage : '/default-profile-image.jpg';

    return (
        <Card className='w-96  ' >
            <CardHeader className="flex  flex-col items-center">
                <img src={profileImageUrl} alt="Profile" className="card-img rounded-full w-44 h-44 justify-center object-cover" />
                <CardTitle className="mt-4">{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{user.email}</CardDescription>
            </CardContent>
            <CardFooter className='gap-4 justify-center' >
                <Button onClick={() => onUpdate(user)}>Update</Button>
                <Button onClick={() => onView(user)} variant="outline">View</Button>
            </CardFooter>
        </Card>
    );
};

export default CardComponent;
