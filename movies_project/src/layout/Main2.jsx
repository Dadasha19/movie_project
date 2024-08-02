
import React, {useState, useEffect} from "react";
import {Movies} from "../components/Movies"
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main()  {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?language=uk-UA&api_key=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            })
    })

    const searchMovies = (str) => {
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=uk-UA&query=${str}`)
            .then(response => response.json())
            .then((data) => {
                console.log(searchMovies);
                searchMovies(data.results)
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            })
    }

    return <main className="content">
        <Search searchMovies={searchMovies} />
        {loading ? <Preloader/> : <Movies movies={movies} />}
        
    </main>
}
export {Main}