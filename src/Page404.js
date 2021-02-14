import React from 'react';
import { Container} from 'react-bootstrap';


function PageError() {
        return (
            <div>
            <Container style={{height: "500px", padding: "100px 0", textAlign:"center"}}>
                        <h1>Page could not be loaded!</h1>
                        <h3>Please try to <a href="/">register</a> or <a href="/login">login</a> first</h3>
                    
            </Container>
 </div>
);
}

export default PageError;