import { useState } from "react";
import FilterTickets from "./filter.tickets/filter.tickets";
import Tickets from "./tickets/tickets";
import styled from "styled-components";
import airplaneLogo from "./airplane.png";
import ticketsData from "./tickets.json";


const ContainerApp = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    grid-column-gap: 30px;
    background-color: #f3f7fa;
    padding: 10px 200px;
    .logo {
      grid-column: span 3;
      text-align: center;
      margin: 100px auto;
      width: 70px;
    };
    .main {
      display: flex;
      justify-content: space-between;
    };
    .empty {
      width: 500px;
      font-size: 20px;
      text-align: center;
      background-color: #2196f3;
      color: #fff;
      border-radius: 8px;
      padding: 50px 40px;
      margin: 150px 0 0 200px;
    }
`

function App() {
  const [currency, setCurrency] = useState(1)
  const [arrayTransfers, setArrayTransfers] = useState([0,1,2,3]);

  const filterTickets = ticketsData.tickets.filter(item => arrayTransfers.includes(item.stops))

  return (
    <ContainerApp>
      <div className="logo">
        <img src={airplaneLogo} alt="airplaneLogo"/>
      </div>
      <div className="main">
      <FilterTickets setArrayTransfers={setArrayTransfers} arrayTransfers={arrayTransfers} currency={currency} setCurrency={setCurrency}/>
      <div>
        {filterTickets.length? filterTickets.sort((a, b) => a.price > b.price ? 1 : -1).map((item, index) => {
        return (
          <Tickets ticket={item} currency={currency} key={index}/>
        )
      }): <div className="empty">По результатам ваших настроек фильтрации билеты не найдены</div>}
      </div>
      </div>
      
    </ContainerApp>
  );
}

export default App;
