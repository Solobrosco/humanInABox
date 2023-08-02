import { updateTitle } from "../utils/generalFunctions"

const TITLE = 'To Do'

const Todo = () => {
    updateTitle(TITLE)
    return(
        <div>todo</div>
    )
}

export default Todo