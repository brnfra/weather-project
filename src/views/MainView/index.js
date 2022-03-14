import { useState } from 'react';
import styled from 'styled-components';
import SearcInput from '../../components/SearchInput';
import image from '../../images/background.jpg';
import TabContent from '../../components/TabContent';

const MainView = () => {
    const [showResult, setShowResult] = useState(true);
    return (
        <Container>
            <div className='content'>
                {!showResult && (
                    <div className='div--searchinput'>
                        <SearcInput setShowResult={setShowResult} />
                    </div>
                )}
                {showResult && (
                    <div className='div--result'>
                        <TabContent setShowResult={setShowResult}/>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default MainView;

const Container = styled.div`
display: grid;
place-content: center;
height: 100vh;
width: 100vw;
:before{
content: ' ';
position: fixed;
z-index: -1;
width: 105vw;
height: 105vh;
top: -20px;
left: -20px;
background-image: url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
filter: blur(4px);
}
.content {
padding: 60px;
border-radius: 15px;
position: relative;
min-width: 1430px;
min-height: 728px;
display: grid;
place-content: center;
&>:before {
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
}
`;