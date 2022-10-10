import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookItem from "./BookItems";

const BooksList = () =>{
    const [books, setBooks] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1")
        .then(res => res.json())
        .then(data => { 
            setBooks(data.results);
            setLoaded(true);
        })
    }, []);

    return(
        <div>
            
            {
            <div>
                <h1>Popular books</h1>
                <div className="books-list">
                    {
                        books.map((books) =>
                            <BookItem key={books.id} book={books} />
                        )
                    }
                </div>
            </div>  
            }
        </div>
    );
};

export default BooksList;