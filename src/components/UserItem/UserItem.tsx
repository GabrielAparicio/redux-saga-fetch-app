import React from 'react';
import { User } from '../../store/types';

import Card from 'react-bootstrap/Card';

interface UserItemProps {
    userData: User;
}

const UserItem: React.FC<UserItemProps> = ({ userData }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={userData.cached_avatar} />
            <Card.Body>
                <Card.Title>{userData.name}</Card.Title>
                <Card.Text>
                    {userData.email}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default UserItem;