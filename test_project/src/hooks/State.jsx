import React, {useEffect, useState} from 'react';

export const State = () => {

    const [state, setState] = useState({
        count: 0,
        isCounting: false,
    });
    
    const handCoun = () => {
        setState({
            ...state,
            count: state.count +1,
        });
    }
    const handStatus = () => {
        setState({
            ...state,
            isCounting: !state.isCounting,
        });
    }
    
    useEffect (() => {
        console.log(state);
    }, [state]);

    return <div>
        <button onClick={handCoun}>Click</button>
        <button onClick={handStatus}>Click1</button>
    </div>;
}

export default State;
