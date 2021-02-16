import React, { useState, useEffect } from 'react'
import categoryfunction from '../../functions/categoryfunction';
import Cards from './Cards';
import Filter from './Filter'

const CategoryMusic = (props) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        categoryfunction("Music", setVideos)
        console.log(videos);
    }, [])


    return (
        <div>
            <Filter videos={videos} vidFunction={categoryfunction}
                setVideos={setVideos} category={"Music"} />
            <Cards videos={videos} />
        </div>
    )

}



export default CategoryMusic