import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Menubar from './components/Menubar';
import RestaurantList from './components/RestaurantList';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
    <Layout className= 'layout'>
    <Header>
      <Menubar />
      {/* <Menu theme="dark" mode="horizontal">
      <Menu.Item key="add" icon={<PlusCircleOutlined style={{ fontSize: '1.8em'}} />} />
      <Menu.Item key="random" icon={<QuestionCircleOutlined style={{ fontSize: '1.8em'}} />} />
      <Menu.Item key="user" icon={<UserOutlined style={{ fontSize: '1.8em'}} />} /> */}
      {/* </Menu> */}
    </Header>
    <Content>
      <Routes>
        <Route path='/random' element={<h1>Random</h1>} />
        <Route path='/add' element={<h1>Add Restaurant</h1>} />
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='/List' element={<RestaurantList/>} />
      </Routes>
      </Content>
      </Layout>
      </BrowserRouter>
  );
}

export default App;
