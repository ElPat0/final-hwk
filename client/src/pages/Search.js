import React, { Component } from 'react';
import API from "../utils/API";
import { Button, Form, FormGroup, FormText, Input, Container } from 'reactstrap';
//import Navbar from '../components/Navbar'
import JumboTrn from '../components/Jumbotron'
import Shelf from '../components/Shelf'


class Search extends Component {

    state = {
        books: [],
        searchStr: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchBook = (event) => {
        event.preventDefault();
        if (this.state.searchStr !== "") {
            API.findBook(this.state.searchStr)
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        books: res.data.items,
                        searchStr: ""
                    })
                }
                )
                .catch(err => console.log(err));
        }
    }

    saveBook = (event) => {
        console.log("saving book! for id " + event.target.id);
        let imagePlaceHolder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7FydPi5Onw8fS+ws3f4ee6v8v29/jY2+Hu7/Ly9PbJztbQ1dxJagBAAAAC60lEQVR4nO3b2ZaCMBREUQbDJOP//2wbEGVIFCHKTa+zH7uVRVmBBJQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCpdOzvQQqaq2KmuSrOzQ02lSeRem8rpsQq/ozg72Kj4UkAxEev8awnzs7P1yiIadsfpQXjfZCHhUCzbfmeurdNz6bDRsBWRsB+k0cXxdHjpa0wkTBn3hKnjzRZyEgYk3IeEv2RKWCt1cN9EJ0zjfm7Mq/rAVgUnbLpwnK/zA2tnuQmzJHquuqJq91blJuwmAW8rHbV3q2ITFrOAt7Xz3l2UmrBMlpcHe9fOUhOqRYVhFO/cqtSEy0H6bh/tJ1uhCctqlTB/NSnG9pOt1ISXjxLq825laVFowo9GaRPrF9talJqw3n6macaZ09yi1ISG2cLyriwePwxzi1ITru4s2naxma59TC2KTRjE83FqmQ6yeDaUDS3KTRhMV96h5TTSLD4HQ4uCE9bxePUU5pYL/3mD5o9CcMKgTONc39NNLrV5iK4aNLUoOWHQ38RQtW3nsm6db92i8ISvGBtct+hvwqyzBFxE9DehrcHlQPU1YWNvcNGirwlfNThv0ZOE9eJG1OsGZy36kVBdczU9e7RvAz5b9CFhqfIwSp4XwG+OwUWLPiRUV/33Z4tbGtTvGK635CfUDfb/SO5rt20N9t8m65fLT9g3GD5abDY2qC+lvEg4NjhEvLW4tUFvEj4a7OXq3TzoW8Jpg0PEzfk8SThv8EMeJFw1+O8SHmrQg4QHG/Qg4cEGxSc83KD4hIcblJ6w3L508TXh+vtDEpLw3GwDEpKQhOdznVD2fRr9tdpRw/1HqQndIeEvkXCXUlDC+1NBndsnge/fwyVnp9PGH3p95dm1WMKza4/fI37j+UPXR/c+2X9/hjQI0uO3LsyuMioM9A8Sjy/W1iIhY7Sn2tzpUahdWyXiNDNSxcWtSlCBAAAAAAAAAAAAAAAAAAAAAAAAAAAAwCn+AEXGNosxDBhFAAAAAElFTkSuQmCC";
        let savedBook = this.state.books.filter(book => book.id === event.target.id)
        let bookDetails = {
            title: savedBook[0].volumeInfo.title,
            author: savedBook[0].volumeInfo.authors,
            description: savedBook[0].volumeInfo.description,
            image: savedBook[0].volumeInfo.imageLinks ? savedBook[0].volumeInfo.imageLinks.thumbnail : imagePlaceHolder,
            info: savedBook[0].volumeInfo.infoLink
        }
        console.log(bookDetails)
        API.saveBook(bookDetails)
            .then(alert(`Book saved to your list!`))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                
                <JumboTrn />
                <Container>
                    <h4>Find a book</h4>
                    <Form>
                        <FormGroup>
                            <Input type="text" name="searchStr" id="search-string" value={this.state.searchStr} placeholder="keywords" on
                                onChange={this.handleInputChange} />
                        </FormGroup>
                        <Button color="primary" type="submit" className="float-right" onClick={this.searchBook}>Search</Button>
                        {/* To clear float */}
                        <div className="clearfix"></div>
                        <FormText color="muted" className="float-right">
                            Search!
                        </FormText>
                    </Form>
                    <div className="resultDiv">
                        {this.state.books.length ? (
                            <div>
                                <h3 className="mb-2">Search results!</h3>
                                {this.state.books.map(book => (
                                    <Shelf key={book.id} title={book} savebook={this.saveBook} />
                                ))}
                            </div>
                        ) : (
                                <h5><i>Your results here</i></h5>
                            )}
                    </div>
                </Container>
            </>
        );
    }
}

export default Search;