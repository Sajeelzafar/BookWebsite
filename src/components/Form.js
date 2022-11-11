import React from 'react';

const Form = () => {
    return (
        <form>
            <div>
                <h1>ADD NEW BOOK</h1>
            </div>
            <div>
                <input type="text" placeholder="Book Title" />
                <input type="text" placeholder="Author Name" />
            </div>
            <div>
                <button type='button'>ADD BOOK</button>
            </div>
        </form>
    )
}

export default Form