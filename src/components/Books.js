import React from 'react';
import Book from './Book';
import { FaTrash } from "react-icons/fa"

const Books = () => {
    let bookinfo = [
        {
            id: 1,
            title: "First Book",
            author: "Random",
        }
    ]
    return (
        <div>
            List of Books will be displayed here:
            
            {
            bookinfo.map((element) => {
                return(
                    
                    <li key={element.id}>
                    <Book title={element.title} author={element.author} />
                    <FaTrash />
                    </li>
                )    
            })
        }
        </div>
    )
}

export default Books