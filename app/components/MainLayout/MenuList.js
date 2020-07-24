import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import {
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './styles-menu-list.scss';

const { SubMenu } = Menu;

const menus = [
  {
    name: 'Quản lý đơn hàng',
    key: 'order-management',
    icon: <UserOutlined />,
    children: [
      {
        name: 'Tất cả',
        key: 'order',
      },
      {
        name: 'Xử lý đơn hàng',
        key: 'order-process',
      },
      {
        name: 'Trả hàng/Hoàn tiền',
        key: 'cancelation',
      },
    ],
  },
  {
    name: 'Quản lý sản phẩm',
    key: 'product-management',
    icon: <MailOutlined />,
    children: [
      {
        name: 'Tất cả sản phẩm',
        key: 'product',
      },
      {
        name: 'Thêm sản phẩm',
        key: 'add-product',
      },
      {
        name: 'Sản phẩm vi phạm',
        key: 'product-cancelation',
      },
    ],
  },
];
class MenuList extends React.Component {
  rootSubmenuKeys = ['product-management', 'order-management'];

  constructor(props) {
    super(props);
    this.state = {
      openKeys: ['product-management', 'order-management'],
    };
  }
  onOpenChange = openKeys => {
    console.log(openKeys);
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1,
    );
    console.log(latestOpenKey);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys,
      });
    }
  };

  render() {
    var location = this.props.location.pathname.split('/')[1];
    return (
      <Menu
        openKeys={this.state.openKeys}
        theme="light"
        mode="inline"
        onOpenChange={this.onOpenChange}
        defaultSelectedKeys={[location]}
      >
        {this.showMenu(menus)}
      </Menu>
    );
  }
  showMenu = menus => {
    var result = null;
    result = menus.map((menu, index) => {
      return (
        <SubMenu key={menu.key} icon={menu.icon} title={menu.name} className='sub-menu'>
          {this.showSubMenu(menu.children)}
        </SubMenu>
      );
    });
    return result;
  };
  showSubMenu = submenus => {
    var result = null;
    result = submenus.map((submenu, index) => {
      return (
        <Menu.Item key={submenu.key} className="menu-item">
          <Link to={submenu.key}>{submenu.name}</Link>
        </Menu.Item>
      );
    });
    return result;
  };
}
export default withRouter(MenuList);
