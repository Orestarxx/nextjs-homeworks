import React, {FC} from 'react';
import {IUser} from "@/app/models/IUser";
type UserParams ={
    user:IUser
}
const UserDetails:FC<UserParams> =  async ({user}) => {
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>

        </div>
    );
};

export default UserDetails;