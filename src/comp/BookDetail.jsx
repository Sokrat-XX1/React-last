import React, {useState} from 'react';
import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
// useHistory = useNavigate

const BookDetails = () => {
    const [book, setBook] = useState();
    const params = useParams("id");
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    // const img_link = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    useEffect(() => {
        console.log(params.id);
        fetch("https://api.themoviedb.org/3/movie/" + params.id + "?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU")
            .then(res => res.json())
            .then(data => {
                setBook(data);
                setLoaded(true);
            });
    }, [params.id]);

    const goBack = () => {
        navigate("/books");
    }

    return (
        <div>
            {
                (loaded && book) ?
                    <div className="flex-column">
                        <div className="flex-row">
                            <div>
                            </div>
                            <div>
                                <h2>{book.title}</h2>
                                <p>Tagline: {book.tagline}</p>
                                <p>Release Date: {book.release_date}</p>
                                <p>Genres: {book.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}</p>
                                <p>Rating: {book.vote_average}</p>
                            </div>
                        </div>
                        <div>
                            <p>Описание: {book.overview}</p>
                        </div>
                        <button onClick={goBack}>Назад</button>
                    </div>

                    : <h3>loading...</h3>
            }
        </div>
    );
};

export default BookDetails;