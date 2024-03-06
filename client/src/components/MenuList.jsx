import { Menu } from 'antd';
import { 
    HomeOutlined,
    UserOutlined,
    SettingOutlined 
} from '@ant-design/icons';

const MenuList = () => {
    return (
        <Menu theme="dark" mode="inline" className="menu-bar">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="calendar" >
                Calendar
            </Menu.Item>
            <Menu.Item key="players" icon={<UserOutlined />}>
                Players
            </Menu.Item>
            <Menu.Item key="setting" icon={<SettingOutlined />}>
                Setting
            </Menu.Item>
        </Menu>
        
        
      
    )
}

export default MenuList;