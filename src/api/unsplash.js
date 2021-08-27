import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID 6hKjkquwDS-atexLJ3Hd-Was3AlbSk1sn6XYgCpMOlI`
    }
})