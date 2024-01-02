import { useState,useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
//the interface defined is based on API Docs
export interface Platform {
    id:number;
    name:string;
    slug:string;
}
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
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  //v Imp Thing in games useState is of type Game[]
  //and in apiclient.get if u dont mention <FetchGamesResponse> u won't get auto complete suggestions
  
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState([]);
  
    useEffect(() => {

        //for cancelling the request we are using controller
        const controller = new AbortController();
      apiClient
        .get<FetchGamesResponse>("/games",{signal:controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
    });

        //cleanup function
        return () => controller.abort();
    },[]);

    //return object with 2 properties games and error
    return {games,error};
}
export default useGames;
