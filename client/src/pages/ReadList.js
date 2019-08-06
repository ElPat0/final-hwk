import React, { Component } from 'react';
import { Container } from 'reactstrap';
import API from "../utils/API";
import Navbar from '../components/Navbar';
import JumboTrn from '../components/Jumbotron'
import SvShelf from '../components/SvList'

class ReadList extends Component {

    state = {
        books: []
    };

    componentDidMount = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            // .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    deleteSavedBook = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Navbar />
                <JumboTrn />
                <Container>
                    <div className="resultDiv">
                        {this.state.books.length ? (
                            <div>
                                <h3 className="mb-2">Books in your list!</h3>
                                <SvShelf bookList={this.state.books} deletebook={this.deleteSavedBook} />
                            </div>
                        ) : (
                                <h5><i>No books in your list yet!</i></h5>
                            )}
                    </div>
                </Container>
                
            </>
        );
    }
}

export default ReadList;