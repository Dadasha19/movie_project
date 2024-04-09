import {Movie} from "../components/Movie"
function Movies (props) {
    const {movies = []} = props; 

    return <div className="container">
        <div className="row">
            <div className="block_movie_all">
                {movies.length ? movies.map(movie => (
                    <Movie key={movie.idMovie} {...movie} />
                )) : <h4>Фільми не знайдено</h4>
            }
            </div>
        </div>
    </div>
}
export {Movies}

