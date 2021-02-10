import React ,{useEffect, useState} from 'react';
import { Toast } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import ReactStars from 'react-rating-stars-component';
import Moment from 'react-moment';


function ShowRating(props){
    const [reviewArray, setReviewArray] = useState([]);

    useEffect(async() => {
        setReviewArr();
        console.log(reviewArray)
    }, []) 

    const setReviewArr = async () => {
        const response = await axios.get(config.baseUrl + '/review');
        console.log(response.data);
        const reviews = response.data;
        const instructorArr = [];
        
        reviews.map(review => {
            if(review.instructor === props.applicationState.user.instructorName){
                instructorArr.push(review);
            }
        })      

        setReviewArray(instructorArr);
        
    }

  

    return(
        <div className="ShowRating">
            <div className="heading"><h2> Latest Reviews</h2></div>
            {reviewArray.map(review => {
                return(
                    <Toast>
            <Toast.Header>
            <img src={review.image} className="mr-2" alt="" />
            <strong className="mr-auto">{review.student}</strong>
            <ReactStars color="lightgray" edit={false} size={20} count={5} isHalf={true} value={review.rating}/>


            <small><Moment fromNow>{review.timestamp}</Moment></small>
            </Toast.Header>
            <Toast.Body>{review.text}</Toast.Body>
        </Toast>
                )
            })}
        
        </div>
    )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(ShowRating);