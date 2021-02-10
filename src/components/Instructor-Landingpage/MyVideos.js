import React, {useState, useContext} from 'react';
import { Row, Col, Accordion, Card, Button, Collapse} from 'react-bootstrap';
import { Trash, ChevronBarUp } from 'react-bootstrap-icons';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { AccordionContext } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <ChevronBarUp  
      size={25}
      className={isCurrentEventKey ? "rotateUp" : "rotateDown"}
      onClick={decoratedOnClick}
      />
    );
  }

function MyVideos(){
    const [open, setOpen] = useState(true);

    return (
    <div className="MyVideos">
        <h1>My Videos</h1>
        
        <Accordion defaultActiveKey="0">
        <Card>
            
                <Accordion.Toggle as={Card.Header} eventKey="0">
                <Row>
                    <Col xs={10}>CourseName</Col>
                    <Col xs={2}>
                        <ContextAwareToggle as={Button} variant="link" eventKey="0"/>
                    </Col>
                </Row>
                </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="0">
            <Card.Body>
            <Collapse in={open}>
                <Row id="example-fade-text">
                
                    <Col xs={10} >
                        VideoName
                    </Col>
                    
                    <Col xs={2}>
                        <Trash 
                            className="Trash"  
                            size={20}
                            onClick={() => setOpen(!open)}
                            aria-controls="example-fade-text"
                            aria-expanded={open}
                        />
                    </Col>
                </Row>
            </Collapse>
            <Collapse in={open}>
                <Row id="example-fade-text">
                
                    <Col xs={10} >
                        VideoName
                    </Col>
                    
                    <Col xs={2}>
                        <Trash 
                            className="Trash"  
                            size={20}
                            onClick={() => setOpen(!open)}
                            aria-controls="example-fade-text"
                            aria-expanded={open}
                        />
                    </Col>
                </Row>
            </Collapse>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
        <Accordion defaultActiveKey="0">
        <Card>
            
                <Accordion.Toggle as={Card.Header} eventKey="0">
                <Row>
                    <Col xs={10}>CourseName</Col>
                    <Col xs={2}>
                        <ContextAwareToggle as={Button} variant="link" eventKey="0"/>
                    </Col>
                </Row>
                </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="0">
            <Card.Body>
                <Row>
                    <Col xs={10}>
                        VideoName
                    </Col>
                    <Col xs={2}>
                        <Trash className="Trash" size={20}/>
                    </Col>
                </Row>

                <Row>
                    <Col xs={10}>
                        VideoName
                    </Col>
                    <Col xs={2}>
                        <Trash className="Trash" size={20}/>
                    </Col>
                </Row>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
 
    </div>
  );
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(MyVideos);