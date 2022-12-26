import styled from 'styled-components'

// translucent Aero Glass effect in Box
export const Box = styled.div`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: white;
    margin: 10px;
    padding: 10px;
`;

// Beautiful Button with Animated Loading
export const Button = styled.button`
    background: #1c87c9;
    border-radius: 3px;
    border: none;
    color: white;
    height: 32px;
    padding: 0 25px;
    margin: 0 1em;
    width: 11em;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
        background: #1c87c9;
        color: white;
    }
    &:active {
        background: #1c87c9;
        color: white;
    }
    &:focus {
        outline: none;
    }
    &:disabled {
        background: #1c87c9;
        color: white;
        cursor: not-allowed;
    }
`;



