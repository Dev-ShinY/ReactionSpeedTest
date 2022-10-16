import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./Page/Main"
import { Layout } from 'antd';
import styled from "styled-components";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
		<BrowserRouter>
			<Header style={{ 
				backgroundColor: 'black',
				height: '50px',
				padding: '20px',
				color: 'white',
				fontWeight: '800',
				fontSize: '1.5rem',
				display: 'flex',
				alignItems: 'center'
			}} >
				반응 속도 테스트
			</Header>
			<Content style={{ padding: '30px' }}>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/moment" />
					<Route path="/puzzle" />
					<Route path="/battered" />
					<Route path="/keyboard" />
				</Routes>
			</Content>
			<Footer>
				<FooterContent>
					Dream developer <br />
					email: yshin.dev@gmail.com
				</FooterContent>
			</Footer>
		</BrowserRouter>
    </Layout>
  );
}

export default App;

const FooterContent = styled.footer`
	height: 70px;
    padding: 20px;
    width: calc( 100% - 40px);
    background-color: #eee;
    text-align: right;
	position: absolute;
	bottom: 0;
`
