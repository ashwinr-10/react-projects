import styled from "styled-components";

export const Button = styled.button`
    color: #ffffff;
    padding: 10px 20px;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover {
        background-color: #ffffff;
        color: #000000;
        border: 1px solid #000000;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    color: #000000;
    padding: 10px 20px;
    background: #ffffff;
    border-radius: 5px;
    min-width: 220px;
    border: 1px solid #000000;
    font-size: 16px;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover {
        background-color: #000000;
        color: #ffffff;
        border: 1px solid #ffffff;
        transition: 0.3s background ease-in;
    }
`;