import React, { useState, useEffect } from 'react'
import categoryfunction from '../../functions/categoryfunction';
import Cards from './Cards';
import Filter from './Filter';

const CategoryTechnologies = (props) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        categoryfunction("Technologies", setVideos)
        console.log(videos);
    }, [])



    return (
        <div>
            <Filter videos={videos} vidFunction={categoryfunction}
                setVideos={setVideos} category={'Technologies'} />
            <Cards videos={videos} />
        </div>
    )

}



export default CategoryTechnologies