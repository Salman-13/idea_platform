import { useState } from "react";
import FilterTickets from "./filter.tickets/filter.tickets";
import Tickets from "./tickets/tickets";
import airplaneLogo from "./icons/airplane.png";
import ticketsData from "./tickets.json";
import ContainerApp from "./app.style";

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
