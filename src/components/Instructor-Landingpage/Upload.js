import React, { useState, useEffect } from 'react';
import { Form, Container, Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import axios from 'axios';
import config from '../../config/config';


function Upload(props) {
  const [video, setVideo] = useState("");
  const [url, setUrl] = useState("");

  const [courses, setCourses] = useState(props.applicationState.user.courses);
  const [course, setCourse] = useState({
    courseName: "",
    category: "",
    instructor: props.applicationState.user.instructorName,
    url: "",

  })
  const [disabled, setDisabled] = useState(true)


  const firstName = props.applicationState.user.firstName;
  const lastName = props.applicationState.user.lastName;
  const instructorName = props.applicationState.user.instructorName;
  const password = props.applicationState.user.password;
  const description = props.applicationState.user.description;
  const subHeader = props.applicationState.user.subHeader;
  const contact = props.applicationState.user.contact;
  const image = props.applicationState.user.image;
  const score = props.applicationState.user.score;
  const expertise = props.applicationState.user.expertise;
  const reviews = props.applicationState.user.reviews;
  const schedules = props.applicationState.user.schedules;

  // useEffect(() => {
  //   if (course.url !== "") {
  //     setCourses(courses => [...courses, course])
  //     console.log(courses)
  //   }


  // }, [courses])

  // useEffect(() => {
  //   if (course.url !== "") {
  //     setCoursesArray();
  //     console.log(courses)
  //   } else {
  //     document.title = 'No threshold reached.';
  //   }
  // }, [courses]);

  const setCourseName = (e) => {
    const newName = e.target.value;
    setCourse(prevState => {
      return { ...prevState, courseName: newName }

    });
  }


  const setCourseCategory = (e) => {
    const newCategory = e.target.value;
    setCourse(prevState => {
      return { ...prevState, category: newCategory }
    });
  }

  const setButton = () => {
    setDisabled(false)
  }

  const debug = async () => {

    console.log(course);
    console.log(courses);
    const updatedInstructorCourse = {
      firstName: firstName,
      lastName: lastName,
      instructorName: instructorName,
      password: password,
      description: description,
      subHeader: subHeader,
      contact: contact,
      image: image,
      score: score,
      expertise: expertise,
      courses: courses,
      reviews: reviews,
      schedules: schedules,
    }

    try {
      const response = await axios.post(config.baseUrl +
        `/instructor/update/${props.applicationState.user._id}`, updatedInstructorCourse);
      console.log(response.data);
    } catch (err) {

    }
  }

  const setVideoUrl = () => {
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
          // setCoursesArray();



        }

      })
      .catch(err => {
        console.log(err);
      })




  }

  const setCourseUrl = (newUrl) => {
    setCourse(prevState => {
      return { ...prevState, url: newUrl }
    });

  }

  const debug2 = async () => {
    console.log(course);
    console.log(courses)

  }

  const setCoursesArray = async () => {
    setCourses(courses => [...courses, course])
  }

  const postDetails = () => {


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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="Upload">
            <Form.Group>
              <Form.Label>Course name</Form.Label>
              <Form.Control type="text" value={course.courseName}
                onChange={setCourseName
                } />
            </Form.Group>
            {/* "Coding", "Music", "Selfdevelopement", "Stocks", "Technolgies", "Books" */}
            <Form.Group controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={course.category}
                onChange={setCourseCategory}
              >
                <option value=''>please select type</option>
                <option value="Coding">Coding</option>
                <option value="Music">Music</option>
                <option value="Selfdevelopement">Selfdevelopement</option>
                <option value="Stocks">Stocks</option>
                <option value="Technologies">Technologies</option>
                <option value="Books">Books</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Video ID </Form.Label>
              <Form.Control type="url" value="https://www.youtube.com/embed/" />
            </Form.Group>

            <Form.Group>
              <Form.File accept="video/*" label="Upload Video" onChange={SetVideo} />
            </Form.Group>

            <Button variant="primary" onClick={setVideoUrl} >
              Upload
                </Button>
            <Button variant="primary" onClick={debug2} disabled={disabled}>
              Debug
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

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Upload);