import React, { useState, useEffect } from 'react'
import categoryfunction from '../../functions/categoryfunction';
import Cards from './Cards';


const CategoryCoding = (props) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        categoryfunction("Coding", setVideos)
        console.log(videos);
    }, [])



    return (
        <div>
            <Cards videos={videos} />
        </div>
    )

}



export default CategoryCoding