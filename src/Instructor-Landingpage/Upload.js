import React from 'react';
import {Form, Container} from 'react-bootstrap'

function Upload(){
    return(
        <>
        <Container>
        <Form>
            <Form.Group>
                <Form.Label>Video ID </Form.Label>
                <Form.Control type="text" value="https://www.youtube.com/embed/" />
            </Form.Group>

            <Form.Group>
                <Form.File label="Upload Video" />
            </Form.Group>
        </Form>
        </Container>
        </>
    )
}

export default Upload;