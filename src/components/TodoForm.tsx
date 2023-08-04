import { useState } from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("")

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(value)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='What is your task?'onChange={(e) => setValue(e.target.value)}/>
        <button type='submit'>Add Task</button>
    </form>
  )
}
