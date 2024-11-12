import React from 'react';
import {IUser} from "@/app/models/IUser";
import User from "@/app/components/usersComponents/user/User";

const Users = async () => {
    const users:IUser[] = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    return (
        <div>
            {users.map((user:IUser) =><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;