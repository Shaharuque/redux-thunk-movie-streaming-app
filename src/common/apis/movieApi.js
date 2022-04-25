import axios from "axios";


//declaring base url of API using axios
export default axios.create({
    baseURL:'http://www.omdbapi.com'
});