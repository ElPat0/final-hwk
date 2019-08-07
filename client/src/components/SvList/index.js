import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const SvShelf = (props) => {
    return (
        <>
            {props.bookList.map(book => {
                return (
                    <Card className="m-2" key={book._id}>
                        <CardBody>
                            <img src={book.image} alt={book.title} className="float-left p-3" height="250px" width="200px" />
                            < CardTitle > <h3>{book.title}</h3></CardTitle>
                            <CardSubtitle><h5>{book.authors}</h5></CardSubtitle>
                            <CardText>{book.description}
                                <a href={book.info} target="blank"><strong>Details</strong></a>
                            </CardText>
                            <Button color="primary" className="float-right" id={book._id} onClick={() => props.deletebook(book._id)}>Delete</Button>
                        </CardBody>
                    </Card>
                );
            })
            }
        </>
    );
};

export default SvShelf;