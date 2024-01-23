import { useState,useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
export interface Game {
    id: number;
    name: string;
    background_image:string;
    //this ugly syntax is because of API Design 
    //they haven't organize the data
    //now parent platform is an array of objects
    //with property platform of type Platform
    parent_platforms:{platform : Platform}[];
    metacritic:number;
    ordering:string;
    slug:string;
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  //v Imp Thing in games useState is of type Game[]
  //and in apiclient.get if u dont mention <FetchGamesResponse> u won't get auto complete suggestions
  
const useGames = (selectedGenre:Genre | null,selectedPlatform :Platform | null,selectedOrder:string,searchText:string) => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState([]);
    const [isLoading,setLoading] = useState(false);
    useEffect(() => {
        //for cancelling the request we are using controller
        const controller = new AbortController();
        setLoading(true);
        //params is a property of axios request object
        //genres is a property as per api docs 
      apiClient
        .get<FetchGamesResponse>("/games",
         {
            params : {
              genres : selectedGenre?.id, 
              platforms : selectedPlatform?.id,
              // ordering:selectedOrder,
              // search:searchText
           }
         }
      )
        .then((res) => {
          setGames(res.data.results)
          setLoading(false);
        })
        .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
       });

        //cleanup function
        return () => controller.abort();
        //here we need to add the dependencies because useEffect should work whenever we select some genre or platform or order or search
    },[selectedGenre?.id,selectedPlatform?.id,selectedOrder,searchText]);

    //return object with 2 properties games and error
    return {games,error,isLoading};
}
export default useGames;
