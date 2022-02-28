import styled from 'styled-components';

const PageFooter = () => {
    const obj = [
        {
            name: 'Andrei Lino',
            link: ''
        },
        {
            name: 'Bruno Franco',
            link: 'https://www.linkedin.com/in/brunon-franco/'
        },
        {
            name: 'Gustavo Castilho ',
            link: 'https://www.linkedin.com/in/gustavo-castilho-914a621b4'
        },
        {
            name: 'Jeferson Branger',
            link: ''
        },
        {
            name: 'Leandro Rodrigues',
            link: 'https://www.linkedin.com/in/leandrors009/'
        },
        {
            name: 'Pagno',
            link: ''
        },
        {
            name: 'Paulo Fidélis',
            link: 'https://www.linkedin.com/in/paulofidelis/'
        },
        {
            name: 'Silvana Santos',
            link: ''
        }
    ]
    return (
        <Container>
            <div className='background'>
                <div className='content'>
                    <div>
                        Feito com <span>❤️</span> por
                    </div>
                    <div>
                        {obj.map((e, i) => (
                            <span><a href={e.link || '#'}>{e.name}</a> | </span>
                        ))}
                    </div>
                    <div>
                        <a href='https://github.com/brnfra/weather-project'>Link do repositório</a>
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default PageFooter;

const Container = styled.div`
:before{
content: ' ';
position: absolute;
z-index: -1;
background-color: #fff;
min-height: 60px;
width: 100%;
opacity: 5%;
}
.content{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 60px;
gap: 5px;
color: #cecece;
&>:nth-child(1) span {
color: red;
}
&>:nth-child(2){
text-align: center;
padding: 0px 20px 0px 20px;
}
}
`;