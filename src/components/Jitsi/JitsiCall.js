import React, { useState } from 'react'
import Jitsi from 'react-jitsi'
// import Loader from './components/Loader'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
 
function JitsiCall(props){
 
  const [displayName, setDisplayName] = useState('')
  const [roomName, setRoomName] = useState('')
  const [password, setPassword] = useState('')
  const [onCall, setOnCall] = useState(false)
 
  return onCall
    ? (
      <Jitsi
        roomName={roomName}
        displayName={displayName}
        password={password}
        // loadingComponent={Loader}
        onAPILoad={JitsiMeetAPI => console.log('Good Morning everyone!')}
      />)
    : (
      <>
        <h1>Create a Meeting</h1>
        <input type='text' placeholder='Room name' value={roomName} onChange={e => setRoomName(e.target.value)} />
        <input type='text' placeholder='Your name' value={displayName} onChange={e => setDisplayName(e.target.value)} />
        <button onClick={() => setOnCall(true)}> Let&apos;s start!</button>
      </>
    )
 
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(JitsiCall);