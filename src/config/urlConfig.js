import { Environment } from "../enum/common.enum";
import { config } from "./config";

const baseUrlDev = 'http://localhost:5000';
const baseUrlProd = 'https://evening-wave-28538.herokuapp.com';

export const baseUrl = config.env === Environment.dev ? baseUrlDev : baseUrlProd;

export const urls = {
    addTodo: "/addTodo",
    getAllTodo: "/getAllTodos",
    updateTodo: "/updateTodo",
    deleteTodo: "/deleteTodo"
}

