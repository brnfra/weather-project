import styled from 'styled-components';

const PageTitleH1 = ({ children }) => {
    return (
        <TitleH1>
            {children}
        </TitleH1>
    )
};

export default PageTitleH1;

const TitleH1 = styled.h1`
font-family: 'Shadows Into Light', cursive;
font-size: 3rem;
text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;;
`;