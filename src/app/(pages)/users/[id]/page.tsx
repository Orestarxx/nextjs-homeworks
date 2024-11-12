import React from 'react';
import UserDetails from "@/app/components/usersComponents/userDetails/UserDetails";
import {IUser} from "@/app/models/IUser";
type UserParams = {
    id:string
}
const UserPage = async ({params}:{params:UserParams}) => {
    const user:IUser = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
        .then(response =>response.json())
    return (
        <div>
            <UserDetails user={user}/>
        </div>
    );
};

export default UserPage;