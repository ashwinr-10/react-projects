import styled from "styled-components"; 
const RollDice = ({currentDice,rollDice}) => {
    
    return (
        <DiceContainer>
            <div className="dice" onClick = {rollDice}>
                <img src={`./images/Dice/dice_${currentDice}.png`} alt="dice" />
            </div>
            <p>Click on Dice to roll</p>

        </DiceContainer>
    );
}

export default RollDice;

const DiceContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;  
    align-items: center;

    p {
        font-size: 24px;
    }

    .dice {
        cursor: pointer;
        
        }
    }
`;