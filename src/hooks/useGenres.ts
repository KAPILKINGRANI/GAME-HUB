import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface FetchGenresResponse {
    count:number;
    results:Genre[];
}
export interface Genre {
    id:number;
    name:string;
    image_background:string;
}
const useGenres = () => {
    const [genres,setGenres] = useState<Genre[]>([]);   
    const [error, setError] = useState([]);
    const [isLoading,setLoading] = useState(false);
    useEffect(() => {

        //for cancelling the request we are using controller
        const controller = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres",{signal:controller.signal})
        .then((res) => {
          setGenres(res.data.results)
          setLoading(false);
        })
        .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
       });

        //cleanup function
        return () => controller.abort();
    },[]);

    //return object with 3 properties genres ,error,isLoading
    return {genres,error,isLoading};
};
export default useGenres;
