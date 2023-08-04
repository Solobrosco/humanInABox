import { styled } from "styled-components"
import { updateTitle } from "../utils/generalFunctions"
import { TodoForm } from "../components/TodoForm"

const TITLE = 'To Do'

const Todo = () => {
    updateTitle(TITLE)
    return(
        <TodoWrapper>
            <TodoForm />
        </TodoWrapper>
    )
}

export default Todo

const TodoWrapper = styled.div`
    padding: 3rem;
`