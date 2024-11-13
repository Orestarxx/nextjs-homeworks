import React from 'react';
import Link from "next/link";
import {movieService} from "@/app/services/movie.service";
import {IGenre} from "@/app/models/IGenre";
import styles from '@/app/components/menuComponent/menuStype.module.css'

const Menu = async () => {
    const {genres} = await movieService.genres.getGenres();
    return (
        <div className={styles.genresHolder}>
            <div>{genres.map((genre:IGenre) =><Link href={{
                pathname:'/genres',
                query:{name:genre.name, id:genre.id.toString()}
            }} key={genre.id}>{genre.name}</Link>)}
            </div>
            <hr/>
        </div>
    );
};

export default Menu;