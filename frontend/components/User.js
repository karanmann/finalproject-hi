import { FaUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image'

import React from 'react';
import { Profile } from '../styles/UserStyles';

const User = () => {
    const route = useRouter();
    const { user } = useUser();
    if (!user)
        return (
            <div onClick={() => route.push('/api/auth/login')}>
                <FaUserCircle />
                <h3>Profile</h3>
            </div>
        );

    return (
        <Profile onClick={() => route.push('/profile')}>
            <Image src={user.picture} alt={user.name} height="24" width="24" layout="fixed"></Image>
            <h3>{user.name}</h3>
        </Profile>
    );
};

export default User;

