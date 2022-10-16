import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./Page/Main"
import { Layout } from 'antd';
import styled from "styled-components";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor:'#fff' }}>
		<BrowserRouter>
			<Header style={{ 
				backgroundColor: 'black',
				height: '70px',
				color: 'white',
				fontWeight: '800',
				fontSize: '1.5rem',
				display: 'flex',
				alignItems: 'center'
			}} >
				반응 속도 테스트
			</Header>
			<Content style={{ margin: '0 auto', backgroundColor:'white', width: '80%' }}>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/moment" />
					<Route path="/puzzle" />
					<Route path="/battered" />
					<Route path="/keyboard" />
				</Routes>
			</Content>
			<Footer style={{ backgroundColor:'#f7f7f7', borderTop:'1px solid #dbdbdb', textAlign: 'right'}}>
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
	textAlign: 'right'
	color: #777;
`
