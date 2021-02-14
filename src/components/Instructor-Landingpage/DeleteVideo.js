import { Trash, ChevronBarUp } from 'react-bootstrap-icons';
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/config';

const DeleteVideo = (props) => {

    const deleteVideo = async () => {

        const response = await axios.delete(config.baseUrl + `/video/${props.vid._id}`);
        console.log(response.data);
    }
    return (
        <Trash className="Trash" size={20} onClick={deleteVideo} />
    )
}

export default DeleteVideo 