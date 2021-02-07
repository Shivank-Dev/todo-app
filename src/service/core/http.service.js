import axios from 'axios';
import { toast } from 'react-toastify';
import {baseUrl} from '../../config/urlConfig';

{console.log("base url ", baseUrl)};
export const HTTP = axios.create({
    baseURL: baseUrl
})

HTTP.interceptors.response.use(undefined, (error) => {
    if (error.message === 'Network Error' && !error.response) {
        return toast.error('Network Error');
    }
    const { status } = error.response;

    if (status === 404) {
        return toast.error("404 | Not Found");
    }

    if (status === 500) {
        return toast.error("500 | Internal Server Error");
    }
})