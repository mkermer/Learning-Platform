import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';



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
        <div className="filters">
            <Form inline>

                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                    onChange={sort}
                >
                    <option value="">Sort by ...</option>
                    <option value="name">Instructor</option>
                    <option value="latest">Latest Video</option>
                </Form.Control>

                <Form.Control type="text" placeholder="Type to search" onChange={handleChange} />

            </Form>





            {/* <InputGroup size="lg">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">
                    <FormControl
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                        onChange={sort}
                    >
                        <option value="">Sort by ...</option>
                        <option value="name">Instructor</option>
                        <option value="latest">Latest Video</option>
                    </FormControl>
                </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" type="text" placeholder="Type to search" onChange={handleChange} />
            </InputGroup> */}
        </div>
    )
}

export default Filter; 