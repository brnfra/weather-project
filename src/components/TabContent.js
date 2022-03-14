import { useState } from 'react';
import styled from 'styled-components';
import {
    chuva,
    neve,
    nublado,
    sol_nuvem,
    sol_nuvem_chuva,
    sol,
    tempestade,
    ventania
} from '../images';

const TabContent = ({ setShowResult }) => {
    const [tab, setTab] = useState('forecast')
    return (
        <Container>
            <ContainerA>
                <InfoCity onClick={() => setShowResult(false)}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
                    </div>
                    <div className='cityName'>
                        Videira, SC - Brasil
                    </div>
                </InfoCity>
                <InfoCity onClick={() => setShowResult(false)}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 0 24 24" width="150px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z" /></svg>
                    </div>
                    <div>
                        <div className='tempNow'>22º C</div>
                        <div className='tempMinMAx'>Min.: 22º / Max.: 22º</div>
                    </div>
                </InfoCity>
            </ContainerA>
            <ContainerB>
                <TabHeader>
                    <div className={tab === 'forecast' ? 'active' : 'inactive'} onClick={() => setTab('forecast')}>Previsão Semanal</div>
                    <div className={tab === 'precipitation' ? 'active' : 'inactive'} onClick={() => setTab('precipitation')}>Precipitação</div>
                </TabHeader>
                <div>
                    {tab === 'forecast' &&
                        <Tab>
                            <DayResult iconName={chuva} />
                            <DayResult iconName={neve} />
                            <DayResult iconName={nublado} />
                            <DayResult iconName={sol_nuvem} />
                            <DayResult iconName={sol_nuvem_chuva} />
                            <DayResult iconName={tempestade} />
                            <DayResult iconName={sol} />
                            <DayResult iconName={ventania} />
                        </Tab>
                    }
                    {
                        tab === 'precipitation' &&
                        <Tab>
                            <Precipitation />
                            <Precipitation />
                            <Precipitation />
                            <Precipitation />
                            <Precipitation />
                            <Precipitation />
                            <Precipitation />
                            <Precipitation />
                        </Tab>
                    }
                </div>
            </ContainerB>
        </Container>
    )
};

export default TabContent;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 120px;
`;
const ContainerA = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const InfoCity = styled.div`
cursor: pointer;
z-index: 1;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
&>:nth-child(2) {
font-weight: 600;
text-align: center;
}
.tempMinMAx {
font-weight: 600;
font-size: 2.5rem;
color: #babcbf;
margin-top: -25px;
}
.tempNow {
font-size: 10rem;
}
.cityName {
    font-size: 2.5rem;
}
`;

const ContainerB = styled.div`
padding: 20px;
border-radius: 15px;
position: relative;
&>:before{
content: '';
position: absolute;
top: 0;
left: 0;
background-color: #fff;
width: 100%;
height: 100%;
z-index: -1;
opacity: 0.2;
border-radius: 15px;
}
`;

const TabHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
font-weight: bold;
margin-bottom: 15px;
& > div {
font-size: 1.5rem;
flex: 1;
cursor: pointer;
height: 30px;
display: grid;
place-content: center;
&.active {
color: black;
}
&.inactive {
color: #424A4D;
}
}
`;

const Tab = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
`;

const Precipitation = ({ iconName }) => {
    const Container = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 250px;
    width: 150px;
    .title {
        font-weight: bold;
        font-size: 1.5rem;
        margin-top: 10px;
    }
    .image {
        flex: 1;
        display: grid;
        place-content: center;
        img {
        width: 150px;
        }
    }
    
    .info {
        font-size: 1.2rem;
        margin-bottom: 70px;
    }
    `;
    return (
        <Container>
            <div className='title'>Segunda-Feira</div>
            <div className='image'>
                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px" fill="#000000"><rect fill="none" height="24" width="24" /><path d="M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M12,20c-3.35,0-6-2.57-6-6.2 c0-2.34,1.95-5.44,6-9.14c4.05,3.7,6,6.79,6,9.14C18,17.43,15.35,20,12,20z M7.83,14c0.37,0,0.67,0.26,0.74,0.62 c0.41,2.22,2.28,2.98,3.64,2.87c0.43-0.02,0.79,0.32,0.79,0.75c0,0.4-0.32,0.73-0.72,0.75c-2.13,0.13-4.62-1.09-5.19-4.12 C7.01,14.42,7.37,14,7.83,14z" /></svg>
            </div>
            <div className='info'>10% de precipitação</div>
        </Container>
    )
};

const DayResult = ({ iconName }) => {
    const Container = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 250px;
    width: 150px;
    .title {
        font-weight: bold;
        font-size: 1.5rem;
        margin-top: 10px;
    }
    .image {
        flex: 1;
        display: grid;
        place-content: center;
        img {
        width: 130px;
        }
    }
    
    .temp {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }
    `;
    return (
        <Container>
            <div className='title'>Segunda-Feira</div>
            <div className='image'><img src={iconName} /></div>
            <div className='temp'>Min.: 22º / Max.: 22º</div>
        </Container>
    )
};