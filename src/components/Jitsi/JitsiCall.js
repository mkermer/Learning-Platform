import React, { useState, useEffect } from 'react'
import './JitsiCall.css'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
 
function JitsiCall(props){
  const jitsiContainerId = "jitsi-container-id";

  const [jitsi, setJitsi] = useState({});

  const loadJitsiScript = () => {
    let resolveLoadJitsiScriptPromise = null;

    const loadJitsiScriptPromise = new Promise((resolve) => {
      resolveLoadJitsiScriptPromise = resolve;
    });

    const script = document.createElement("script");
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;
    script.onload = resolveLoadJitsiScriptPromise
    document.body.appendChild(script);

    return loadJitsiScriptPromise;
  };

  const initialiseJitsi = async () => {
    if (!window.JitsiMeetExternalAPI) {
      await loadJitsiScript();
    }

    const _jitsi = new window.JitsiMeetExternalAPI("meet.jit.si", {
      parentNode: document.getElementById(jitsiContainerId),
    });

    setJitsi(_jitsi)
  };

  useEffect(() => {
    initialiseJitsi();

    return () => jitsi?.dispose?.();
  }, []);

  return (
  <div id={jitsiContainerId} style={{ height: 720, width: "100%" }} />
      
  )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(JitsiCall);