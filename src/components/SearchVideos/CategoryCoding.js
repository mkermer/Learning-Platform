import React, { useState, useEffect } from 'react'
import categoryfunction from '../../functions/categoryfunction';
import Cards from './Cards';
import Filter from './Filter'

const CategoryCoding = (props) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        categoryfunction("Coding", setVideos)

    }, [])


    return (
        <div>
            <Filter videos={videos} vidFunction={categoryfunction}
                setVideos={setVideos} />
            <Cards videos={videos} />
        </div>
    )


}



export default CategoryCoding