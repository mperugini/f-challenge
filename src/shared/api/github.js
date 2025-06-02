import axios from 'axios';

export const fetchUsers = () => axios.get('https://api.github.com/users');
export const searchUsers = (term) => axios.get(`https://api.github.com/search/users?q=${term}`);
export const fetchUserDetails = (username) => axios.get(`https://api.github.com/users/${username}`);