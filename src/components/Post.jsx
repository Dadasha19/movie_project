import React from 'react';

export function Post (props) {
    const {id, name, removePost} = props;
    return <h1>
            {name}
            <button onClick={() => removePost(id)}>delete</button>
        </h1>
}