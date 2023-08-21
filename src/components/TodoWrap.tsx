import { styled } from "styled-components"
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'


const TodoWrap = () => {
  return (
    <Container>
        <p>Go to Work</p>
        <div>
            <FaEdit />
            <FaTrash />
        </div>
    </Container>
  )
}

export default TodoWrap

const Container = styled.div`
    background-color: rgb(44, 0, 60);
    flex-direction: row;
`