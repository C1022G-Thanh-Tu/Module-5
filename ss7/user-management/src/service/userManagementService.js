import axios from 'axios'

export const findAll = async () => {
    try {
        const users = await axios.get('https://jsonplaceholder.typicode.com/users');
        return users;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    } catch (error) {
        console.log(error);
        return error
    }
}