import TicketsContainer from "./tickets.style";
import logoAirlines from "../icons/icon-air.png"

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