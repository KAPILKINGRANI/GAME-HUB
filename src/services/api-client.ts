import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : "a9ceb47975494b3bb2942c2aff785738"
    }
})