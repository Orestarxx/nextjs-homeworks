import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <Link href={'/'}>Home</Link>
            <Link href={'/users'}>users</Link>
            <hr/>
        </div>
    );
};

export default Menu;