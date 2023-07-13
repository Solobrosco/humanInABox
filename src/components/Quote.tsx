import { styled } from "styled-components"

interface quoteProps {
    quote: string,
    author?: string
}

const Quote = (props : quoteProps) =>{
  return(
    <Display>
        {props.quote}
        <Author>- {props.author}</Author>
    </Display>
  )
}

export default Quote

const Display = styled.div`
    font-size: 5rem;
    text-shadow: 5px -4px 4px rgb(0, 0, 0);
`

const Author  = styled.div`
    font-size: 1rem;
    font-weight: thin;
    color: rgb(0, 140, 255);
    text-shadow: 2px -2px 1.8px rgb(0, 0, 0);
`