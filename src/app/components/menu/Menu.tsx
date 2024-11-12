import React from 'react';
import Link from "next/link";
import styles from './menuStyle.module.css'

const Menu = () => {
    return (
        <div id={styles.under}>
            <div id={styles.menuHolder}>
                <ul id={styles.menu}>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/users'}>Users</Link></li>
                    <li><Link href={'/posts'}>Posts</Link></li>
                    <li><Link href={'/comments'}>Comments</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;