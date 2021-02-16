import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
function ReduxResetPage(props) {
    const handlerResetRedux = () => {
        props.actions.storeResetRedux()
    }
    return (
        <div>
            <Button className="ReduxResetPage" variant="login" onClick={handlerResetRedux}>Reset Redux State</Button>
        </div>
    )
}
const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(ReduxResetPage);