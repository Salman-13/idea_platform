import styled from "styled-components"
import logoAirlines from "../icon-air.png"

const TicketsContainer = styled.div`
background-color: #fff;
border-radius: 10px;
box-shadow: 1px 1px 3px #4d4d4d;
display: flex;
margin-bottom: 30px;
.logo-airlines {
    width: 45px;
};
.d-flex {
    display: flex;
    justify-content: center;
};
.name {
    width: 95px;
    line-height: 18px;
    color: #343f89;
    font-weight: bold;
    margin-top: 5px;
};
.price {
    width: 300px;
    border-right: solid 1px #8b8886;
    padding: 25px;
    font-size: 21px;
};
.price-ticket {
    margin-top: 20px;
    padding: 5px 0;
    background-color: #ff6d00;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    text-align: center;
};
.price-ticket:hover {
    background-color: #a44700;
}
.fight-time {
    min-width: 500px;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
};
.time {
    font-size: 45px;
};
.name-city {
    color: #777777;
};
.date {
    color: #c8ccce;
};
.count-transfers {
    height: 30px;
    width: 130px;
    border-bottom: solid 1px #777;
    font-size: 16px;
    position: relative; 
    top: 10px;
    right: 20px;
    text-align: center;
};
`

function Tickets({ticket, currency}) {

    const options = {
        day: 'numeric',
        timezone: 'UTC',
      };

      const dateTicketFunction = (date) => {
        const dateTicket = {
            number: new Date(date).toLocaleString("ru", options),
            month: new Date(date).toLocaleString("ru", {month: "long"}).substring(0, 3),
            year: new Date(date).toLocaleString("ru", {year: "numeric"}),
            weekday: new Date(date).toLocaleString("ru", {weekday: 'long'}).substring(0, 3)
          }
          return `${dateTicket.number} ${dateTicket.month} ${dateTicket.year}, ${dateTicket.weekday}`
      }

      const transferFunction = (number) => {
        if(!number) {
            return "БЕЗ ПЕРЕСАДОК"
        };
        if(number === 1) {
            return "1 ПЕРЕСАДКА"
        };
        return `${number} ПЕРЕСАДКИ`
      }
      const priceCurrency = currency === 1 ? `${ticket.price}₽`: currency === 2 ? `${ticket.price_usd}$`: `${ticket.price_eur}€`

    return (
      <TicketsContainer>
        <div className="price">
            <div className="d-flex">
                <div className="name">
                    TURKISH AIRLINES
                </div>
                <div className="logo-airlines">
                    <img src={logoAirlines} alt="Turkish Airlines" />
                </div>
            </div>
            <div className="price-ticket">
                Купить 
                <br/> 
                за {priceCurrency}
            </div>
        </div>
        <div className="fight-time">
            <div className="block-length">
                <div className="time">{ticket.arrival_time}</div>
                <div className="name-city">{ticket.origin}, {ticket.origin_name}</div>
                <div className="date">{dateTicketFunction(ticket.departure_date)}</div>
            </div>
            <div className="count-transfers">{transferFunction(ticket.stops)}</div>
            <div className="block-length">
                <div className="time">{ticket.departure_time}</div>
                <div className="name-city">{ticket.destination}, {ticket.destination_name}</div>
                <div className="date">{dateTicketFunction(ticket.arrival_date)}</div>
            </div>
        </div>
      </TicketsContainer>
    );
  }
  
  export default Tickets;