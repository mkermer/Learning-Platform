import axios from 'axios';
import config from '../config/config'



const categoryfunction = async (category, setVideos) => {
    const response = await axios.get(config.baseUrl + '/video');
    const allVideos = response.data
    if (category === "all") {
        setVideos(allVideos);
    } else {
        const categoryVid = allVideos.filter(video => video.category === category)


        console.log(categoryVid);
        console.log(setVideos)

        setVideos(categoryVid);
    }



}

export default categoryfunction; 