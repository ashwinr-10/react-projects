import styled from 'styled-components';
import { Button } from '../styled/Button';
const StartGame = ({toggle}) => {
    return (
        <Container>
            <div>
                <img src="./images/dices.png" width="600px" alt="dice" />
            </div>
            
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    );
}
export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    align-items: center;
    margin: 0 auto;
  
    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

