import styled from 'styled-components';

// To App.js
export const Page = styled.div`
    background-image: url('./sw-bg.jpg');
    background-size: cover;
`;

export const MainH1 = styled.h1`
    font-size: 4rem;
    font-weight: bolder;
`;

// To Info.js
export const InfoPanel = styled.div`
    background-color: rgba(51, 24, 16, 0.7);
    color: white;
    padding: 3%;
    width: 85%;
    margin: 0 auto 4%;
    border-radius: 20px;
    box-shadow: 10px 10px 10px #24120a;
`;

export const InfoH2 = styled.h2`
    font-size: 2.5rem;
    padding-bottom: 1.5%;
`;

export const InfoP = styled.p`
    font-size: 1.25rem;
`;

// To PeopleGrid.js
export const PeopleContainer = styled.div`
    width: 85%;
    background-color: rgba(51,24,16,0);
    border-radius: 20px;
    margin: 0 auto;
`;

export const CardContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

// To PersonCard.js
export const Card= styled.div`
    background-color: rgba(51, 24, 16, 0.7);
    color: white;
    padding: 3%;
    width: 18%;
    border-radius: 20px;
    margin-bottom: 2%;
    box-shadow: 10px 10px 10px #24120a;
`;

export const CardH3 = styled.h3`
    font-size: 1.6rem;
`;

export const Hr = styled.hr`
    border: 2px inset #F4DEB3;
    border-radius: 2px;
`;

export const CardP = styled.p`
    font-size: 1.1rem;
`;

export const CardSpan = styled.span`
    font-weight: bold;
`;