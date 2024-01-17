import styled from 'styled-components'


export const Wrapper = styled.div`
    border: 1px solid ${props => props.theme['white-soft']};
    border-radius: 6px;
    height: 15rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Image = styled.img`
    
    height: 10rem;
    width: 9rem;
    margin-left: 5rem;
    
`
export const PriceWrapper = styled.div`
    margin-right: 5rem;
    height: 10rem;
    width: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const Price = styled.span`
    font-size: 20px;

`