import { useState,useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Screenshot {
   id:number,
   image:string,
   width:number,
   height:number
}
interface ScreenShotResponse {
    count:number;
    results:Screenshot[]
}
const useScreenshots = (gameId:number) => {
    const [gameScreenShots, setGameScreenShots] = useState<Screenshot[]>([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<ScreenShotResponse>(`/games/${gameId}/screenshots`,)
        .then((res) => {
            setGameScreenShots(res.data.results);
        })
        .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
       });

        //cleanup function
        return () => controller.abort();
        //here we need to add the dependencies because useEffect should work whenever we select some genre or platform or order or search
    },[gameId]);
    return {gameScreenShots,error}
}
export default useScreenshots;

