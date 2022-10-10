import React from 'react';
import {Link} from "react-router-dom";

const BookItem = ({book}) => {
    const img_link = "https://image.tmdb.org/t/p/w500" + book.poster_path;
    return (
        <Link to={`/books/${book.id}`} >
            <div className="book-item">
                <img src={img_link} alt=""/>
                <h3>{book.title}</h3>
            </div>
        </Link>
    );
};

export default BookItem;