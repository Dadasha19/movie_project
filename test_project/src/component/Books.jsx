import React, {useContext, useEffect, useState} from 'react';
import { CustomContext } from "../hooks/Context"

import {Book} from "../component/Book"


export function Books() {
    const { books = [] } = useContext(CustomContext);
    return <div className='books'>
        {books.map((book) => {
            return <Book key={book.id} {...book}/>
        })}
    </div>;
}

export default Books;
