import React, {FC} from 'react';
import {movieService} from "@/app/services/movie.service";
import {IGenreData} from "@/app/models/IGenre";
import {IMovie} from "@/app/models/IMovie";
type SearchParams = Promise<{[key:string]:string}>
type GenreProps = {
    searchParams:SearchParams
}
const GenresPage:FC<GenreProps> = async ({searchParams}) => {
 const {name,id} = await searchParams;

     const movieGenre:IGenreData & {results:IMovie[]} =
         await movieService.genres.getMoviesWithGenre(id)


    console.log(name,id);

    return (
        <div>
            {movieGenre.results.map((movie:IMovie) =><div key={movie.id}>{movie.title}</div>)}
        </div>
    );
};

export default GenresPage;