import React from 'react';
import {IUser} from "@/app/models/IUser";
import {placeHolderService} from "@/app/services/api.service";
import Link from "next/link";

const UsersPage = async () => {
    const users: IUser[] = await placeHolderService.users.getAllUsers()
    return (
        <div>
            {users.map((user) => <div><Link href={'/users/' + user.id}>{user.username}</Link></div>)}

        </div>
    );
};

export default UsersPage;