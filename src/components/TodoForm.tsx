import { useState } from 'react'
import { styled } from 'styled-components'

export const TodoForm = () => {
    const [value, setValue] = useState("")

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(value)
    }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput type='text' placeholder='What is your task?' onChange={(e) => setValue(e.target.value)}/>
      <StyledButton type='submit'>Add Task</StyledButton>
      {/* <input type='text' placeholder='What is your task?'onChange={(e) => setValue(e.target.value)}/> */}
      {/* <button type='submit'>Add Task</button> */}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 1rem;
  background-color: #ffd29a;
  border-radius: 10px;
  box-sizing: border-box;
`

const StyledInput = styled.input`
  display: inline;
  width: 100%;
  height: 30px;
  border-radius: 10px;
`

const StyledButton = styled.button`
  display: inline;
`