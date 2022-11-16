export const addBook = () => {
    return  { type: "ADDING_BOOK" };
}

export const delBook = () => {
    return  { type: "REMOVING_BOOK" };
}

export default bookHandler = (state = [], action) => {
    switch (action.type) {
        case "ADDING_BOOK":
            return [...state,
                {
                id: action.id,
                title: action.title,
                author: action.text,
            }]
        
        case "REMOVING_BOOK":
            let updatedState = state.map(element => {
                if(element.id !== action.id){
                    return element;
                }
            })
            return updatedState;

        default:
            return state;
    }
}