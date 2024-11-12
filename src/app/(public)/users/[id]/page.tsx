import React from 'react';
import {IUser} from "@/app/models/IUser";
import {placeHolderService} from "@/app/services/api.service";

type Params = {
    id: string
}
const UserPage = async ({params}: { params: Params }) => {
    const user: IUser = await placeHolderService.users.getSingleUser(params.id)
    return (
        <div>
            <div>{user.id}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.name}</div>
        </div>
    );
};

export default UserPage;