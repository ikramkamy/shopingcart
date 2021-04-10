export const add =(el) => {
    return{
        type :"addProduct",
        payload: el
    }   
}
export const remove =(id) => {
    return{
        type :"removeProduct",
        payload: id
    }   
}
