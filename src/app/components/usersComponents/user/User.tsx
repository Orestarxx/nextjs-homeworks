import React, {FC} from 'react';
import {IUser} from "@/app/models/IUser";
import Link from "next/link";
type UserProps = {
    user:IUser
}

const User:FC<UserProps> = ({user}) => {
    return (
        <Link href={'/users/' +user.id}>
            <div>{user.id}</div>
            <div>{user.name}</div>
        </Link>
    );
};

export default User;