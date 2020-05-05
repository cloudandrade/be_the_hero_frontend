import axios from 'axios';
const APIPORT = '8000';
const URLAPI = `http://localhost:${APIPORT}`;

const api = axios.create({
	baseURL: URLAPI,
});

export default api;
