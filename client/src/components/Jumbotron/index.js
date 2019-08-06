import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbotron = () => {
    return (
        <div>
            <Jumbotron fluid className="narrow">
                <Container fluid className="text-center">
                    <h1 className="display-5">(React) Google Books Search</h1>
                    <p className="lead">Search for and save books of your interest</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbotron;