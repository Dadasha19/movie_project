import React, {useState} from "react";

const Search = (props) =>  {
    const {
        searchMovies = Function.prototype,
    } = props;

    const [search, setSearch] = useState('');

    // state = {
    //     search: '',
    // }
    const buttonSearch = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search);
        }
    }
    // buttonFilters = (event) => {
    //     this.setState(() => ({type: event.target.dataset.type}), () => {
    //         this.props.searchMovies(this.state.search, this.state.type);
    //     });
    // }

    return <div className="container">
        <div className="search">
            <div className="name">Пошук фільмів</div>
            <div className="block_input">
                <input 
                    type="search" 
                    placeholder="Пошук" 
                    value={search}
                    onKeyDown={buttonSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <button onClick={() => searchMovies(search)} className="button_green">Шукати</button>
        </div>
        {/* <div className="filters">
            <div className="block_input_radio">
                <input
                    type="radio" 
                    id="radio3"
                    name="filters"
                    data-type="movie"
                    onChange={this.buttonFilters}
                    checked={this.state.type === 'movie'}
                />
                <label htmlFor="radio3">Фільми</label>
            </div>
            <div className="block_input_radio">
                <input 
                    type="radio" 
                    id="radio1"
                    name="filters"
                    data-type="multi"
                    onChange={this.buttonFilters}
                    checked={this.state.type === 'multi'}
                />
                <label htmlFor="radio1">Мультфільми</label>
            </div>
            <div className="block_input_radio">
                <input 
                    type="radio" 
                    id="radio2"
                    name="filters"
                    data-type="tv"
                    onChange={this.buttonFilters}
                    checked={this.state.type === 'tv'}
                />
                <label htmlFor="radio2">tv</label>
            </div>
        </div> */}
    </div>
}
export {Search}