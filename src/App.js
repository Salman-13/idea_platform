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
    }
`

function App() {
  const [arrayTransfers, setArrayTransfers] = useState([0,1,2,3]);
  const filterTickets = ticketsData.tickets.filter(item => arrayTransfers.includes(item.stops))
  return (
    <ContainerApp>
      <div className="logo">
        <img src={airplaneLogo} alt="airplaneLogo"/>
      </div>
      <div className="main">
      <FilterTickets setArrayTransfers={setArrayTransfers} arrayTransfers={arrayTransfers}/>
      <div>
        {filterTickets.length? filterTickets.map((item, index) => {
        return (
          <Tickets ticket={item} key={index}/>
        )
      }): <div>Нет билетов по вашим данным</div>}
      </div>
      </div>
      
    </ContainerApp>
  );
}

export default App;
