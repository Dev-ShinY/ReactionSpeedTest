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
            <Menus>
                {
                    MenuList.map( item => (
                        <Link to={item.route}>
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

const Menus = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Menu = styled.div`
    padding: 20px;
    margin: 30px 20px;
    width: 300px;
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background-color: #eee;
    color: #333;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
        color: #111;
    }
`;

const MenuTitle =styled.h3``;

const MenuSubTitle = styled.h4``;