import styled from 'styled-components';


export const HomeContainer = styled.section`
  background-image: url('https://t3.ftcdn.net/jpg/05/06/18/48/360_F_506184891_GDL7vlfqeBRSALShhxF6wx43lG7r54Mo.jpg');
  background-size: cover;
  background-position: center;
  color: #000;
  height:100vh;
  margin-top:10vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align: center;
  padding: 150px 0;
`;


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentColumn = styled.div`
  flex: 1;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 3rem;
  font-weight:bold;
  margin-bottom: 15px;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 20px;
`;

export const PrimaryButton = styled.button`
  padding: 20px 40px;
  font-size: 26px;
  font-family:'Bree Serif';
  border-radius:50px;
  font-weight:bold;
  background-color: #0a0a0a;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #549dbf; /* Darker pink for hover */
  }
`;