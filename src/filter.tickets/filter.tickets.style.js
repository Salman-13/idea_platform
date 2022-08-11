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

export default SidebarContainer