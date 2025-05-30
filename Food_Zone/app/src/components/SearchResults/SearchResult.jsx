import styled from "styled-components";
import { BASE_URL,Button, Container } from "../../App";

const SearchResult = ({data}) => {
    return (
      <FoodCardContainer>
        <Container>
        <FoodCards>
            {data?.map(({name,image,text,price}) => (
                <FoodCard key={name}>
                    <div className="food_image">
                        <img src={BASE_URL + image} alt={name} />
                    </div>
                    <div className="food_info">
                        <div className="info">
                            <h3>{name}</h3>
                            <p>{text}</p>
                        </div>
                        <Button>${price.toFixed(2)}</Button>
                    </div>
                </FoodCard>
            ))}
        </FoodCards>
        </Container>
      </FoodCardContainer>
    );
}

export default SearchResult;

const FoodCardContainer = styled.section`
   background-image: url("/bg.png");
   min-height: calc(100vh - 210px);
   background-size: cover;
  `;

const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 80px;
`;
const FoodCard = styled.div`
    height: 167px;
    width:348px;
    border:0.66px solid;
    border-image-source: radial-gradient(
        80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135, 38, 183, 0) 100%
    )
        radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%
    )
       
    background: url(.png),

    radial-gradient(
    rgba(165, 239, 255, 8.2) 8%,
    rgba(110, 191, 244, 8.0447917) 77.88%,
    rgba(70, 144, 213, 8) 100%
    )
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.1842px);
    border-radius: 20px;

    display: flex;
    padding: 8px;
    .food_info {
        display: flex;
        justify-content: space-between;
        align-items: end;
        flex-direction: column;
    }
        h3 {
            margin-top:8px;
            font-size: 16px;
            font-weight: 500;
            }
        p {
            margin-top:4px;
            font-size: 12px;
            }
          button {
           font-size: 12px;
           }  
    `;