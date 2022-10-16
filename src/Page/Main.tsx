import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Main() {
    const MenuList = [
        { 
            title: "순간 반응속도",
            subTitle :"순간적인 반응속도를 체크합니다.",
            route: '/moment',
        },
        { 
            title: "퍼즐형 반응속도",
            subTitle :"색이 다른 퍼즐 클릭 속도를 체크합니다.",
            route: '/puzzle',
        },
        { 
            title: "연타 반응속도",
            subTitle :"마우스 연타 속도를 체크합니다.",
            route: '/battered',
        },
        { 
            title: "키보드 반응속도",
            subTitle :"키보드 클릭 속도를 체크합니다.",
            route: '/keyboard',
        },
    ]
    
    return (
        <Container>
            <MainTitle>
                <p>
                    반응 속도 체크: 반체커
                </p>
                    당신의 반응 속도를 체크합니다.
            </MainTitle>
            <p style={{ width: '90%'}}>
                <b>Menus</b>
            </p>
            <Menus>
                {
                    MenuList.map( (item, index) => (
                        <Link to={item.route} key={ index }>
                            <Menu>
                                <MenuTitle>
                                    { item.title }
                                </MenuTitle>
                                <MenuSubTitle>
                                    { item.subTitle }
                                </MenuSubTitle>
                            </Menu>
                        </Link>
                    ))
                }
            </Menus>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const MainTitle = styled.div`
    margin: 50px 0 20px;
    padding: 30px 20px;
    width: 90%;
    background-color: #eee;
    border-radius: 10px;
    p {
        font-size: 1.5rem;
        border-bottom: 1px solid #ddd
    }
`

const Menus = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Menu = styled.div`
    padding: 20px;
    margin: 0px 0px 20px;
    width: 300px;
    height: 150px;
    border: 1px solid #394057;
    box-shadow: #394057 1.95px 1.95px 2.6px;
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #eee;
        color: #111;
    }
`;

const MenuTitle =styled.h3`
    font-weight: 800;
`;

const MenuSubTitle = styled.h4`
    font-weight: 500;
`;