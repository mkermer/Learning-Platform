import React from 'react';
import Upload from './Upload';
import Upload2 from './Upload2';
import './InstructorLandingpage.css'
import { Button } from 'react-bootstrap'

function InstructorLandingpage() {
    const [modalShow, setModalShow] = React.useState(false);

    return (

        <div className="Instr">

            <Button variant="primary" onClick={() => setModalShow(true)}>
                Upload
                </Button>

            {/* <Upload
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
            <Upload2
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </div>
    )
}

export default InstructorLandingpage;