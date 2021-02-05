import React from 'react';
import {Form, Container, Button, Modal} from 'react-bootstrap'


function Upload(props){
    return(
        <>

        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form className="Upload">
                <Form.Group>
                    <Form.Label>Video ID </Form.Label>
                    <Form.Control type="url" value="https://www.youtube.com/embed/" />
                </Form.Group>

                <Form.Group>
                    <Form.File accept="video/*" label="Upload Video" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Upload
                </Button>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

        </>
    )
}

export default Upload;