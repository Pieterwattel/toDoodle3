import { TodoItem } from "../model/todoItem"

class TodoController {
    constructor() { }
    
    static instance

    static getSingleton() {
        if (this.instance) return this.instance
        this.instance = new TodoController
        return this.instance
    }

    createTodo(dataObj) {
        let newTodo = TodoItem.create(dataObj)
        console.log(newTodo)
    }

}

const todoController = TodoController.getSingleton()

export {todoController}