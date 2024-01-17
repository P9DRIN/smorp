import styled from 'styled-components'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    overflow-x: hidden;

`

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 5rem;
    

    & .link{
        color: ${props => props.theme['white']};
    }
`
export const Main = styled.main`
    height: 80vh;
    width: 80vw;
    padding: 2.5rem 3rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    --sb-track-color: #051923;
    --sb-thumb-color: #0582ca;
    --sb-size: 10px;

    scrollbar-color:
    var(--sb-thumb-color) 
    var(--sb-track-color);
    

    &::-webkit-scrollbar{
        width: 8px;

    }
    &::-webkit-scrollbar-track{
        background: #232E33;
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 8px;
}

`

export const PriceWrapper = styled.main`
    display: flex;
    margin: 1rem 0;
    height: 5rem;
    background: ${props => props.theme['rich-black']};

    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    padding: 1rem 7rem;
    
    border-radius: 6px;
    
`
export const Logo = styled.div`
    font-weight: 600;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

`


export const BuyButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 2rem;

    color: ${props => props.theme['white']};
    background: ${props => props.theme['blue-200']};
    border: none;
    border-radius: 6px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`