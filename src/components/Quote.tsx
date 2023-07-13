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
`

const Author  = styled.div`
    font-size: 1rem;
    font-weight: thin;
`