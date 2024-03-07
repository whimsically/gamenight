import { Menu } from 'antd';
import { 
    HomeOutlined,
    CalendarOutlined,
    WechatOutlined,
    UserOutlined,
    ProfileOutlined,
    SettingOutlined 
} from '@ant-design/icons';

const MenuList = ({ darkTheme }) => {
    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
            <Menu.Item 
            key="home" 
            icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="schedule" icon={<CalendarOutlined />} >
                Schedule
            </Menu.Item>
            <Menu.Item key="chats" icon={<WechatOutlined/>} >
                Chats
            </Menu.Item>
            <Menu.Item key="players" icon={<UserOutlined />}>
                Players
            </Menu.Item>
            <Menu.Item key="profile" icon={<ProfileOutlined/>}>
                Profile
            </Menu.Item>
            <Menu.Item key="setting" icon={<SettingOutlined />}>
                Setting
            </Menu.Item>
        </Menu>
        
    )
}

export default MenuList;