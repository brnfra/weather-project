import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const SearcInput = () => {
    return (
        <Container>
            <InputStyled
                type='text'
                placeholder='Digite o nome da cidade...'
            ></InputStyled>
            <div className='searchIcon'>
                <MdSearch />
            </div>
        </Container>
    )
};

export default SearcInput;

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
.searchIcon{
color: #353839;
font-size: 10px;
background-color: #fff;
border-radius: 0px 15px 15px 0px;
height: 40px;
width: 60px;
cursor: pointer;
display: grid;
place-content: center;
transition: all ease-in 0.1s;
&>:nth-child(1){
    font-size: 20px;
}
:hover{
    background-color: #cecece;
    color: #fff;
}
}
`;

const InputStyled = styled.input`
outline: none;
font-size: 15px;
padding: 15px;
border-radius: 15px 0px 0px 15px;
border: none;
width: 200px;
height: 40px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
color: #353839;
`;