import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        // type: 'movie'
    }
    buttonSearch = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }
    // buttonFilters = (event) => {
    //     this.setState(() => ({type: event.target.dataset.type}), () => {
    //         this.props.searchMovies(this.state.search, this.state.type);
    //     });
    // }

    render () {
        return <div className="container">
            <div className="search">
                <div className="name">Пошук фільмів</div>
                <div className="block_input">
                    <input 
                        type="search" 
                        placeholder="Пошук" 
                        value={this.state.search}
                        onKeyDown={this.buttonSearch}
                        onChange={(e) => this.setState({search: e.target.value})}
                    />
                </div>
                <button onClick={() => this.props.searchMovies(this.state.search)} className="button_green">Шукати</button>
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
    };
}
export {Search}