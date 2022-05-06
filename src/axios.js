import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:5001/clone-f212d/us-central1/api" //  여기에 클라우드 function 에서 가져온 API URL을 적으면 된다.
});

export default instance;