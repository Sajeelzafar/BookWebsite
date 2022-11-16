export const status = () => {
    return  { type: "STATUS_CHECKED" };
}

export default statusHandler = ( state = [], action ) => {
    if(action.type === "STATUS_CHECKED"){
        return "UNDER CONSTRUCTION";
    }
    return state;
}