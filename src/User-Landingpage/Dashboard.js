import React from 'react';

function Dashboard(){
    return(
        <div className="Dashboard">
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

const showSidebar = () => setSidebar(!sidebar);

{/* <div className="cart-container">
<div className="cart-banner">
  <h2 className="close" onClick={showSidebar}>
    X
  </h2> */}