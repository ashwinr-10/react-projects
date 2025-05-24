import React from 'react';
import styled from "styled-components";
const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play Dice Game</h2>
            <div className="rules">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>if you get wrong guess then 1 point will be deducted </p>
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