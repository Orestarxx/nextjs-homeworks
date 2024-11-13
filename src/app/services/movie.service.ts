import {baseURL, headers} from "@/app/data/data";
import {urls} from "@/app/urls/urls";
import { IGenreData} from "@/app/models/IGenre";
import {IMovie} from "@/app/models/IMovie";

export const movieService = {
    genres:{
        getGenres: async ():Promise<IGenreData> =>{
            return await fetch(baseURL + urls.genres, {
                method:'GET',
                headers:headers,
                next:{revalidate:60}
            }).then(response =>response.json())
        },
    getMoviesWithGenre: async (genreID:string):Promise<IGenreData & {results:IMovie[]}> =>{
           return await fetch(baseURL + urls.moviesWithGenre + genreID,{
               headers:headers,
               method:'GET',
               next:{revalidate:60}
           }).then(response => response.json())
    }
    }
}