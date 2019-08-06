import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Shelf = (props) => {
    let data = props.title.volumeInfo;
    let imagePlaceHolder = "https://fisnikde.com/wp-content/uploads/2019/01/broken-image.png";
    return (
        <Card className="m-2">
            <CardBody>
                {console.log(props.title.id)}
                {data.imageLinks ? (
                    <img src={data.imageLinks.thumbnail} alt={data.title} className="float-left p-3" />
                ) : (<img src={imagePlaceHolder} alt={data.title} className="float-left p-3" height="200px" width="150px" />)}
                <CardTitle><h3>{data.title}</h3></CardTitle>
                <CardSubtitle><h5>{data.authors}</h5></CardSubtitle>
                <CardText>{data.description}
                    <a href={data.infoLink} target="blank"><strong>see more...</strong></a>
                </CardText>
                <Button color="primary" className="float-right" id={props.title.id} onClick={props.savebook}>Save to my list</Button>
            </CardBody>
        </Card>
    );
};

export default Shelf;