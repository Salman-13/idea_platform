import { useState } from "react"
import SidebarContainer from "./filter.tickets.style"

function FilterTickets({setArrayTransfers, arrayTransfers, currency, setCurrency}) {
    const [all, setAll] = useState(true)
    const handleTickets = (number) => {
        if(number === 10) {
            arrayTransfers.length === 4 ? setArrayTransfers([]) || setAll(false):
             setArrayTransfers([0, 1, 2, 3]) || setAll(true)
        };
        if(number === 0) {
            all && arrayTransfers.includes(number) ? setArrayTransfers(arrayTransfers.filter(item => item !== number)):
             setArrayTransfers([...arrayTransfers, number])
        };
        if(number === 1) {
            all && arrayTransfers.includes(number) ? setArrayTransfers(arrayTransfers.filter(item => item !== number)):
             setArrayTransfers([...arrayTransfers, number])
        };
        if(number === 2) {
            all && arrayTransfers.includes(number) ? setArrayTransfers(arrayTransfers.filter(item => item !== number)):
             setArrayTransfers([...arrayTransfers, number])
        };
        if(number === 3) {
            all && arrayTransfers.includes(number) ? setArrayTransfers(arrayTransfers.filter(item => item !== number)):
             setArrayTransfers([...arrayTransfers, number])
        };
    }

    const handleCurrency = (number) => {
        setCurrency(number)
    }

    return (
      <SidebarContainer>
        <div className="currency">
            ВАЛЮТА
        </div>
        <div className="name-currency">
            <div className={currency === 1 ? "curren rub": "rub"} onClick={() => handleCurrency(1)}>RUB</div>
            <div className={currency === 2 ? "curren usd": "usd"} onClick={() => handleCurrency(2)}>USD</div>
            <div className={currency === 3 ? "curren eur": "eur"} onClick={() => handleCurrency(3)}>EUR</div>
        </div>
        <div className="currency">
            КОЛИЧЕСТВО ПЕРЕСАДОК
        </div>
        <div className="d-flex">
            <div>
                <input type="checkbox" onChange={() => handleTickets(10)} checked={arrayTransfers.length === 4}/>
            </div>
            <div>Все</div>
        </div>
        <div className="d-flex">
            <div><input type="checkbox" onChange={() => handleTickets(0)} checked={!!arrayTransfers.includes(0)}/></div>
            <div>Без пересадок</div>
        </div>
        <div className="d-flex">
            <div><input type="checkbox" onChange={() => handleTickets(1)} checked={!!arrayTransfers.includes(1)}/></div>
            <div>1 пересадка</div>
        </div>
        <div className="d-flex">
            <div><input type="checkbox" onChange={() => handleTickets(2)} checked={!!arrayTransfers.includes(2)}/></div>
            <div>2 пересадки</div>
        </div>
        <div className="d-flex">
            <div><input type="checkbox" onChange={() => handleTickets(3)} checked={!!arrayTransfers.includes(3)}/></div>
            <div>3 пересадки</div>
        </div>

      </SidebarContainer>
    );
  }
  
  export default FilterTickets;