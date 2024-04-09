import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
        this.handleClickMinus = this.handleClickMinus.bind(this);
        this.handleClickPlus = this.handleClickPlus.bind(this);
    }

    handleClickMinus() {
        this.setState({ count: this.state.count - 1 });
    };
    handleClickPlus() {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.handleClickMinus}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleClickPlus}>+</button>
                
            </div>
        );
    }
}

// class App extends React.Component {
//     state = {
//         posts: [
//             {id: 'abc1', name: 'ABC1'},
//             {id: 'abc2', name: 'ABC2'},
//             {id: 'abc3', name: 'ABC3'},
//         ]
//     };
//     render() {
//         return (
//             <div className="App">
//                 {/* {this.state.posts.map(posts => (
//                     <h1 key={posts.id}>{posts.name}</h1>
//                 ))} */}
//                 <Posts posts={this.state.posts}/>
//             </div>
//         );
//     }
// }

export default App;