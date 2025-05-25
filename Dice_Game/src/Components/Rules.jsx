import React from 'react';
import styled from "styled-components";
const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play Dice Game</h2>
            <div className="rules">
                <strong>1. Pick a Number</strong>
                <p>- Choose any number between 1 and 6.</p>
                <strong>2. Roll the Dice</strong>
                <p>- Click on the dice image to roll it.</p>
                <strong>3. Scoring Rules</strong>
                <p>- If your selected number matches the dice roll, you earn points equal to the dice number.</p>
                <p>- If your guess is incorrect, 1 point will be deducted from your score.</p>
             </div>

        </RulesContainer>
    );
};
export default Rules;

const RulesContainer = styled.div`
max-width: 800px;
    padding: 20px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    background-color: #fbf1f1;

    h2 {
        font-size: 24px;
    }

    .rules {
        margin-top: 20px;

        p {
            margin-bottom: 10px;
        }
    }
`;  