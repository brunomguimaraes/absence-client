
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { CalendarOutlined, HomeOutlined } from '@ant-design/icons';


const NavBar = () => {
  const history = useHistory();

  const handleClick = (e: any) => {
    history.push(`/${e.key}`);
  };

    return (
      <Menu onClick={handleClick} mode="horizontal">
        <Menu.Item key="calendar" icon={<CalendarOutlined />}>
          Calendar
        </Menu.Item>
        <Menu.Item key="absence" icon={<HomeOutlined />}>
          Absences
        </Menu.Item>
      </Menu>
  );
};

export default NavBar;
