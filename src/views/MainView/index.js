import styled from 'styled-components';
import PageTitleH1 from '../../components/PageTitleH1';
import SearcInput from '../../components/SearchInput';
import image from '../../images/background.jpeg';

const MainView = () => {
    return (
        <Container>
            <div className='content'>
                <div className='div--title'>
                    <PageTitleH1>Weather Project</PageTitleH1>
                </div>
                <div className='div--searchinput'>
                    <SearcInput />
                </div>
            </div>
        </Container>
    );
};

export default MainView;

const Container = styled.div`
:before{
content: ' ';
position: fixed;
z-index: -1;
width: 120vw;
height: 120vh;
top: -20px;
left: -20px;
background-image: url(${image});
background-position: top;
background-repeat: no-repeat;
background-size: cover;
filter: blur(10px);
}
.content {
z-index: 1;
display: grid;
place-content: center;
min-height: calc(100vh - 60px);
}
.div--title {
color: #fff;
text-align: center;
}
.div--searchinput {
margin-top: 50px;
}
`;