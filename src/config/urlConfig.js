import { Environment } from "../enum/common.enum";
import { config } from "./config";

const baseUrlDev = 'http://localhost:5000';
const baseUrlDev = '' //TODO: Needs to be change after hosting the server somewhere

export const baseUrl = config.env === Environment.dev ? baseUrlDev : baseUrlProd;

export const urls = {
    addTodo: "/addTodo",
    getAllTodo: "/getAllTodo",
    updateTodo: "/updateTodo",
    deleteTodo: "/deleteTodo"
}

