import { useState,useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Trailer {
    id:number,
    name:string,
    preview:string,
    //data is object with below 2 properties
    //u need to console on browser for this
    data:{480:string,max:string}
}
interface FetchTrailerResponse {
    count: number;
    results: Trailer[];
}
const useTrailer = (selectedId:number) => {
    const [gameTrailer,setGameTrailer] =useState<Trailer[]>();
    const [error, setError] = useState(null);
    const [isLoading,setLoading] = useState(false);
    useEffect(() => {
        console.log('Fetching game for slug:', selectedId);
        const controller = new AbortController();
        // setLoading(true); 
        apiClient
        .get<FetchTrailerResponse>(`/games/${selectedId}/movies`)
        .then((res) => {
        // console.log("hello")
        // console.log(res.data)
        setGameTrailer(res.data.results);
        //  setLoading(false)
        })  
        .catch((err) => {
         if(err instanceof CanceledError) return
         setError(err.message)
        //  setLoading(false);
       });
        console.log(gameTrailer)
        //cleanup function
        return () => controller.abort();
    },[selectedId]);

    return {gameTrailer,error,isLoading}  ;
}
export default useTrailer;
