import React from "react";
import {Movies} from "../components/Movies"
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/trending/all/day?language=uk-UA&api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.results, loading: false}))
            
    }
    
    searchMovies = (str) => {
        this.setState ({
            loading: true,
        });
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=uk-UA&query=${str}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.results, loading: false}))
    }

    render () {
        const {movies, loading} = this.state;

        return <main className="content">
            <Search searchMovies={this.searchMovies} />
            {loading ? <Preloader/> : <Movies movies={movies} />}
            
        </main>
    };
}
export {Main}