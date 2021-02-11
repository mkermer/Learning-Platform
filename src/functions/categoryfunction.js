import axios from 'axios';
import config from '../config/config'



const categoryfunction = async (category, setVideos) => {
    const response = await axios.get(config.baseUrl + '/video');
    const allVideos = response.data
    const categoryVid = []
    allVideos.map(video => {
        if (video.category === category) {
            categoryVid.push(video);
        }
    })
    console.log(categoryVid);
    setVideos(categoryVid);
}

export default categoryfunction; 