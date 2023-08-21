import { useState } from "react"
import { styled } from "styled-components"
import { updateTitle } from "../utils/generalFunctions"
import { TodoForm } from "../components/TodoForm"
import { v4 as uuidv4 } from "uuid" 
import TodoWrap from "../components/TodoWrap"

const TITLE = 'To Do'

const Todo = () => {
    updateTitle(TITLE)
    const [todos, setTodos] = useState<any[]>([])

    const addTodo = (todo: any) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
    return(
        <TodoWrapper>
            <TodoForm addTodo={addTodo}/>
            <TodoWrap />
            <TodoWrap />
            <TodoWrap />
        </TodoWrapper>
    )
}

export default Todo

const TodoWrapper = styled.div`
    padding: 3rem;
`