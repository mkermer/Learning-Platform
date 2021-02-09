import React, { useState, useEffect } from 'react';
import { Form, Container, Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import axios from 'axios';
import config from '../../config/config';
import { CloudArrowUp } from 'react-bootstrap-icons';




function Upload(props) {
  const [video, setVideo] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [courseName, setCourseName] = useState("");
  const [desc, setDesc] = useState("");
  const instructor = props.applicationState.user.instructorName
  const [text, setText] = useState("Upload");
  // const timestamp = new Date()


  const [disabled, setDisabled] = useState(true)



  const setButton = () => {
    setDisabled(false)
  }



  const addVideo = async () => {

    const newVideo = {
      courseName: courseName,
      category: category,
      instructor: instructor,
      url: url
    }

    try {
      const response = await axios.post(config.baseUrl +
        `/video/add`, newVideo);
      console.log(response.data);
    } catch (err) {

    }
  }

  const setVideoUrl = () => {
    setText("Your video is currently uploading!")
    const data = new FormData;
    data.append("file", video);
    data.append("upload_preset", "inflog");
    data.append("cloud_name", "davidwalzer");
    fetch("https://api.cloudinary.com/v1_1/davidwalzer/video/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {

        console.log(data.url)
        const newUrl = data.url;
        console.log(newUrl)

        if (newUrl !== "") {
          setCourseUrl(newUrl);
          setButton();
          setText('Your video was uploaded')
          setTimeout(() => {
            setText('Upload')
          }, 2000)
        }

      })
      .catch(err => {
        console.log(err);
      })

  }

  const setCourseUrl = (newUrl) => {
    setUrl(newUrl);
  }


  const debug2 = async () => {
    const newVideo = {
      courseName: courseName,
      category: category,
      instructor: instructor,
      url: url,
      description: desc,
      // timestamp: timestamp
    }

    console.log('Hi')

    try {
      const response = await axios.post(config.baseUrl +
        `/video/add`, newVideo);
      console.log(response.data);
    } catch (err) {

    }
  }


  const SetVideo = (e) => {
    setVideo(e.target.files[0]);
    console.log(e.target.files)

  }

  return (
    <>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered

      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Upload your Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Upload">

            <Form className="UploadForm">
              <Form.Group>
              <div className="mandatory">*</div>
                <Form.Control type="text" required placeholder="Course Name" value={courseName}
                  onChange={(e) => setCourseName(e.target.value)
                  } />
              </Form.Group>
              <Form.Group required controlId="formBasicCategory">
              <div className="mandatory">*</div>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value=''>Select Category</option>
                  <option value="Coding">Coding</option>
                  <option value="Music">Music</option>
                  <option value="Selfdevelopement">Selfdevelopement</option>
                  <option value="Stocks">Stocks</option>
                  <option value="Technologies">Technologies</option>
                  <option value="Books">Books</option>
                </Form.Control>
              </Form.Group>
              

              <Form.Group>
                <Form.Control type="text" placeholder="Description" value={desc}
                  onChange={(e) => setDesc(e.target.value)
                  } as="textarea" rows={3} />
              </Form.Group>
              <div className="or"><strong>OR</strong></div>
              <Form.Group>
                <Form.Control type="url" value="https://www.youtube.com/embed/" />
              </Form.Group>

              <Form.Group>
                <Form.File accept="video/*" label="OR" onChange={SetVideo} />
              </Form.Group>

            </Form>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="UploadButton" onClick={setVideoUrl} >
            <CloudArrowUp size={20} /> {text}
          </Button>

          <Button variant="primary" className="UploadButton" onClick={debug2} disabled={disabled}>
            Update
          </Button>

        </Modal.Footer>
      </Modal>

    </>
  )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Upload);