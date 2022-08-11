import { useState } from "react"
import styled from "styled-components"

const SidebarContainer = styled.div`
height: 500px;
min-width: 350px;
max-width: 500px;
margin-right: 30px;
background-color: #fff;
border-radius: 10px;
box-shadow: 1px 1px 3px #4d4d4d;
padding: 25px;
.currency {
    font-size: 20px;
    margin-bottom: 20px;
};
.name-currency {
    display: flex;
    margin-bottom: 20px;
    div:hover {
        border: solid 1px #2196f3;
    }
    .rub {
        cursor: pointer;
        width: 100px;
        border: solid 1px #8b8886;
        text-align: center;
        padding: 10px 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    };
    .usd {
        cursor: pointer;
        width: 100px;
        border: solid 1px #8b8886;
        text-align: center;
        padding: 10px 0;
    };
    .eur {
        cursor: pointer;
        width: 100px;
        border: solid 1px #8b8886;
        text-align: center;
        padding: 10px 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    };
    
};
.d-flex {
    display: flex;
    font-size: 19px;
    align-items: center;
};
.d-flex:hover {
    background-color: #f1fcff;
}
input {
    width: 30px;
    height: 30px;
    margin-right: 20px;
};
.curren {
    background-color: #2196f3;
}
`

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