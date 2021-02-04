import React, {useContext} from 'react';
import { XSquare } from 'react-bootstrap-icons';
import {DashContext} from '../../DashContext';


function Dashboard(props){
    const {
        showSidebar
      } = useContext(DashContext);

    return(
        <div className="Dashboard">
            <XSquare className="close" onClick={showSidebar}/>
 
            <table>
                <thead>
                    <tr>
                        <th>
                            Date
                        </th>
                        <th>
                            Time
                        </th>
                        <th>
                            Course
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Course Date
                        </td>
                        <td>
                            Course Time
                        </td>
                        <td>
                            <a href="zoom meeting url">Course Name</a>
                        </td>
                    </tr>
                </tbody>
            </table>        
                
        </div>
    )
}

export default Dashboard;



