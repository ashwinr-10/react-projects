import styled from 'styled-components';
import SearchResult from './components/SearchResults/SearchResult';
import { useEffect, useState } from 'react';

export const BASE_URL = "http://localhost:9000";

  
  const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [selectedBtn, setSelectedBtn] = useState("All");
    useEffect(() => {
    const fetchFoodData = async () => {
    setLoading(true);
    try {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    setData(json);
    setFilteredData(json);
    setLoading(false);
    }catch (error) {
      setError("Unable to fetch data");
    }
  };

  fetchFoodData();
},[]);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filtered = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(filtered);
  };

  const filterFood = (type) => {
    if(type === "all") {
      setFilteredData(data);
      setSelectedBtn("All");
      return;
    }

    const filtered = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filtered);
    setSelectedBtn(type);

  };

  const filterBtns = [
    { name: "All", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" }
  ];

  if(error) return <div>Error: {error}</div>;
  if(loading) return <div>Loading...</div>;

  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className='search'>
          <input onChange={searchFood} placeholder="Search Food" />
        </div>
      </TopContainer>

      <FilterContainer>
        {filterBtns.map((value) => (
          <Button 
            isSelected={selectedBtn === value.type} key={value.name} onClick={() => filterFood(value.type)}>
            {value.name}
          </Button>
        ))}

      </FilterContainer>
    </Container>
    
    <SearchResult data={filteredData}/>
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
    .logo {
  width: 280px;
  height: 80px;
  overflow: hidden;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
  .search {
    input {
      background-color: transparent;
    border: 1px solid red;
    color: #ffffff;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
    &::placeholder {
      color: #ffffff;
      opacity: 0.7;
    }
  }

  @media (0 < width < 600px) {
  flex-direction: column;  
  }
 `;

 const FilterContainer = styled.section`
  display: flex;
  gap: 12px;
  justify-content: center;
  padding-bottom: 40px;
  `;

 export const Button = styled.button`
  background : ${({ isSelected }) => (isSelected ? "green" : '#ff4343')};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : '#ff4343')};
  background-color: #ff6347;
  border-radius: 5px;
  border: none;
  padding: 6px 12px;
  color: #ffffff;
  cursor: pointer;
    &:hover {
    background-color: #f22f2f;
  }
  `;


  
