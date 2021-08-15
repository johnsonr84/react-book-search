import React from "react";
import BookCard from "../BookCard"
import Col from "../Grid"

export const BookList = (props) => {

    return (
        <div className="list">
            <div class="card-deck">
                {  
                    props.books?
                    props.books.map((book, i) => {

                        return <div className="col-xs-3" >
                            <BookCard
                                key={i}
                                image={book.volumeInfo.imageLinks ?  book.volumeInfo.imageLinks.smallThumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzReEQnYR7oHkPM93mPL9bPUIj5uAnnqoK08D3zZmwI4rAaVscFAndpeYpOo-qFm3y2kCKCHE02tH1KA-:https://cdn.iconscout.com/icon/premium/png-512-thumb/no-image-1753539-1493784.png&usqp=CAU"}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                description={book.searchInfo? book.searchInfo.textSnippet: "No description available"}
                                link={book.volumeInfo.infoLink}
                                volID={book.id}
                            />
                        </div>
                    }
                ):"No Search Found"
                }
            </div>
        </div>
    )
}
export default BookList;