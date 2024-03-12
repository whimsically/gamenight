import { Menu } from 'antd';
import { 
    HomeOutlined,
    CalendarOutlined,
    WechatOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';


const MenuList = ({ darkTheme }) => {
    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
            <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to={'/'}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="schedule" icon={<CalendarOutlined />} >
            <Link to={'/schedule'}>Schedule</Link>
            </Menu.Item>
            <Menu.Item key="chats" icon={<WechatOutlined/>} >
            <Link to={'/chats'}>Chats</Link>
            </Menu.Item>
        </Menu>


        
    )
}

export default MenuList;