import { keyframes, styled } from "styled-components"

const Login = () => {
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
        <div>
            <Container>
                <Form>
                    <Input
                        type="email"
                        name="email"
                    />
                    <Input
                        type="password"
                        name="password"
                    />
                    <Button>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Input = styled.input`
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

const Button = styled.button`
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
    animation: ${jump} 0.2s ease-out forwards;
    color: rgb(225, 186, 127);
  }
`
// https://codesandbox.io/s/dpc39?file=/src/index.js:150-258
