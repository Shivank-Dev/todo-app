import { urls } from "../../config/urlConfig";
import { HTTP } from "../core/http.service";

export class TodoService {
    
    static getAllTodos = async () => {
        const result = await HTTP.get(urls.getAllTodo);
        if (result && result.data) {
            return result.data;
        }
        return undefined;
    }

    static addTodo = async (todo) => {
        const result = await HTTP.post(urls.addTodo, todo);
        if (result.data) {
            return result.data;
        }
        return undefined;
    }

    static deleteTodo = async (id) => {
        const result = await HTTP.delete(`${urls.deleteTodo}/${id}`);
        if (result.data) {
            return result.data;
        }       
        return undefined;
    }

    static updateTodo = async () => {
        const result = await HTTP.delete(`${urls.updateTodo}/${id}`);
        if (result.data) {
            return result.data;
        }
        return undefined;
    }
}