import { useState,useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface GameDetail {
    name:string
    description_raw:string
}
const useGame = (selectedId:string) => {
    const [game,setGame] =useState<GameDetail>();
    const [error, setError] = useState("");
    const [isLoading,setLoading] = useState(false);
    useEffect(() => {
        console.log('Fetching game for slug:', selectedId);
        const controller = new AbortController();
        setLoading(true); 
        apiClient
        .get(`/games/${selectedId}`)
        .then((res) => {
         setGame(res.data)
         setLoading(false)
        })  
        .catch((err) => {
         if(err instanceof CanceledError) 
         setError(err.message)
         setLoading(false);
       });

        //cleanup function
        return () => controller.abort();
    },[]);

    return {game,error,isLoading}  ;
}
export default useGame;
