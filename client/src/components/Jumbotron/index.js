import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumboTrn = () => {
    return (
        <div>
            <Jumbotron fluid className="narrow">
                <Container fluid className="text-center">
                    <h1 className="display-5">Book Search</h1>
                    
                </Container>
            </Jumbotron>
        </div>
    );
};

export default JumboTrn;