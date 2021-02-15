import axios from 'axios';
import config from '../config/config'



const categoryfunction = async (category, setVideos) => {
    const response = await axios.get(config.baseUrl + '/video');
    const allVideos = response.data
    const categoryVid = allVideos.filter(video => video.category === category)
    // allVideos.map(video => {
    //     if (video.category === category) {
    //         categoryVid.push(video);
    //     }
    // })

    console.log(categoryVid);
    if (setVideos) {
        setVideos(categoryVid);
    }

}

export default categoryfunction; 