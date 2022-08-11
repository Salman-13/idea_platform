import styled from "styled-components";

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

export default ContainerApp