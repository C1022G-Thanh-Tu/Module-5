import axios from 'axios'

export const findAll = async () => {
    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return result.data
    } catch (err) {
        console.log(err);
    }
}

export const save = async (todo) => {
    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', {...todo})
    } catch (error) {
       console.log(error); 
    }
}