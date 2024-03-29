import { keyframes, styled } from "styled-components"

import { updateTitle } from "../utils/generalFunctions"

const TITLE = 'Login User'

const Login = () => {
  updateTitle(TITLE)
    // const [data, setData] = useState({
    //     email: "",
    //     password: ""
    //   });
    //   const handleSubmit = () => {
    //     console.log(data);
    //   };
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setData(Object.assign(data, { [name]: value }));
    //   };
  return(
    <Container>
      <Container>
        <h1>Hello!</h1>
          <StyledForm>
            <StyledInput type="email" name="email" placeholder="email"/>
            <StyledInput type="password" name="password" placeholder="password"/>
            <StyledButton>Submit</StyledButton>
          </StyledForm>
          <StyledText>Don't have and account? 
            <a href="#"> Signup here</a>
          </StyledText>
      </Container>
      <Container>
        <h2>More Form components</h2>
        <StyledFieldSet>
          <legend>Gender</legend>
          <label >
            <input type="radio" value='female' name="gender" />
            Female
          </label>
          <label>
            <input type="radio" value='male' name="gender" />
            Male
          </label>
        </StyledFieldSet>
        <StyledTextArea name='message'/>
      </Container>
    </Container>
  )
}

export default Login

const jump = keyframes`
  from{
    transform: scale(1.0)
  }
  to{
    transform: scale(1.03)
  }
`

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  color: black;

`

const StyledFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`

const StyledText = styled.div`
  font-size: smaller;
  font-weight: lighter;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
`

const StyledForm = styled.form`
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

const StyledInput = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #000000;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`

const StyledButton = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.1s ease-in-out forwards;
    color: rgb(160, 33, 33);
  }
`
// https://codesandbox.io/s/dpc39?file=/src/index.js:150-258
