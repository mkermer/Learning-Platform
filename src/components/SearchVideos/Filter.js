import React from 'react';
import { Form } from 'react-bootstrap';



const Filter = (props) => {

    const videos = props.videos;
    const setVideos = props.setVideos;
    const vidFunction = props.vidFunction;
    const category = props.category;

    function handleChange(e) {

        if (e.target.value === '') {
            vidFunction(category, setVideos);
        } else {
            var filteredVideo = videos.filter(
                (video) =>
                    video.videoName.toLowerCase().indexOf(e.target.value.toLowerCase()) >=
                    0
            );
            setVideos(filteredVideo);
        }
    }

    function sort(e) {
        if (e.target.value === '') {
            vidFunction(category, setVideos);
        } else if (e.target.value === 'name') {
            let newVideos = [...videos];
            let sorted = newVideos.sort((a, b) =>
                a.instructor.localeCompare(b.instructor)
            );
            console.log(sorted);
            setVideos(sorted);
        } else if (e.target.value === 'latest') {
            let newVideos = [...videos];
            let sorted = newVideos.sort((a, b) => b.timestamp - a.timestamp);
            console.log(sorted);
            setVideos(sorted);
        }
    }


    return (
        <div>
            <Form inline>

                <Form.Control type="text" placeholder="search" onChange={handleChange} />

                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                    SortyBy
                        </Form.Label>
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                    onChange={sort}
                >
                    <option value="">Choose...</option>
                    <option value="name">Instructor</option>
                    <option value="latest">Latest Video</option>

                </Form.Control>

            </Form>
        </div>
    )
}

export default Filter; 