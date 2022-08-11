import styled from "styled-components"

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

export default TicketsContainer