
import styled from "styled-components"; 

const NumberSelector = ({error,setError,selectedNumber,setSelectedNumber}) => { 
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const NumberSelectorHandler = (number) => {
        setSelectedNumber(number);
        setError("");
    };
    
    console.log(selectedNumber);
    return (
        <NumberSelectorContainer>
            <p>{error}</p>
        <div className="flex">
            {arrNumber.map((number,i) => (
            <Box 
                isSelected={selectedNumber == number}
                key={i} onClick={() => NumberSelectorHandler(number)}>{number}</Box>
            ))}
        </div>
        <p>Select Number</p>
        </NumberSelectorContainer>
    );
};
export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex {
        display: flex;
        gap: 24px;
    }
        p{
        font-size: 24px;
        font-weight: 700;
        }`;
const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid #000000;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${props => props.isSelected ? "#000000" : "#ffffff"};
    color: ${props => props.isSelected ? "#ffffff" : "#000000"};
    `;
