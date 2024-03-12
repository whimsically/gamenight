import { Menu } from 'antd';
import { 
    HomeOutlined,
    CalendarOutlined,
    WechatOutlined,
    UserOutlined,
    ProfileOutlined,
    SettingOutlined 
} from '@ant-design/icons';

import { Link } from 'react-router-dom';


const MenuList = ({ darkTheme }) => {
    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
            <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to={'/'}>Home</Link>
            </Menu.Item>
            <Menu.Item key="schedule" icon={<CalendarOutlined />} >
            <Link to={'/schedule'}>Schedule</Link>
            </Menu.Item>
            <Menu.Item key="chats" icon={<WechatOutlined/>} >
            <Link to={'/chats'}>Chats</Link>
            </Menu.Item>
            <Menu.Item key="Groups" icon={<UserOutlined />}>
            <Link to={'/groups'}>Groups</Link>
            </Menu.Item>
            <Menu.Item key="profile" icon={<ProfileOutlined/>}>
            <Link to={'/profile'}>Profile</Link>
            </Menu.Item>
            <Menu.Item key="setting" icon={<SettingOutlined />}>
            <Link to={'/setting'}>Setting</Link>
            </Menu.Item>
        </Menu>


        
    )
}

export default MenuList;