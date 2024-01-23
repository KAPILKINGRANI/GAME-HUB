import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface PlatformResponse {
    count:number;
    results:Platform[];
}
export interface Platform {
    id:number;
    name:string;
    slug:string;
}
const usePlatforms = () => {
    const [error, setError] = useState([]);
    const [platforms,setPlatform] = useState<Platform[]>([]);   
        useEffect(() => {
            //for cancelling the request we are using controller
            const controller = new AbortController();
          apiClient
            .get<PlatformResponse>("platforms",{signal:controller.signal})
            .then((res) => {
              setPlatform(res.data.results)
             
            })
            .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
           });
    
            //cleanup function
            return () => controller.abort();
        },[]);

        return {platforms,error};
    
    
}
export default usePlatforms;