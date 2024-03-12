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
            <Link to="/">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            </Link>
            <Link to="/schedule">
            <Menu.Item key="schedule" icon={<CalendarOutlined />} >
                Schedule
            </Menu.Item>
            </Link>
            <Link to='/players'>
            <Menu.Item key="players" icon={<UserOutlined />}>
                Players
            </Menu.Item>
            </Link>
            <Link to='/profile'>
            <Menu.Item key="profile" icon={<ProfileOutlined/>}>
                Profile
            </Menu.Item>
            </Link>
            <Link to='/setting'>
            <Menu.Item key="setting" icon={<SettingOutlined />}>
                Setting
            </Menu.Item>
            </Link>
        </Menu>
        
    )
}

export default MenuList;