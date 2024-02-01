import { useEffect } from 'react';

import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Layout, Menu, MenuProps, Space } from 'antd';
import { pathToRegexp } from 'path-to-regexp';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../adapters/appService/auth.service';
import { useAppConfig } from '../../../adapters/appService/config.service';
import { authSelector } from '../../../adapters/redux/selectors/auth';
import { MAIN_ROUTES, menus } from '../../../constant/menu';
import ROUTE from '../../../constant/routes';
import { filterRole } from '../../../utils';
import { arrayToTree, queryAncestors } from '../../../utils/menu';
import { renderRoutes } from '../../../utils/route';

const { Header, Content } = Layout;

const generateMenus = (data, appType?) => {
  return data.map((item) => {
    if (item.children) {
      return (
        <Menu.SubMenu
          key={item.id}
          title={
            <>
              {!!item.icon && <item.icon />}
              <span>{item.name}</span>
            </>
          }
        >
          {generateMenus(item.children, appType)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.id}>
        <Link to={`${item.route}` || '#'}>
          {!!item.icon && <item.icon />}
          <span>{item.name}</span>
        </Link>
      </Menu.Item>
    );
  });
};

function LayoutApp() {
  const navigate = useNavigate();
  const { role, username, avatar } = useSelector(authSelector);

  const filteredMenus = menus.filter((item) => filterRole(item.roles, role));

  // Generating tree-structured data for menu content.
  const menuTree = arrayToTree(filteredMenus, 'id', 'menuParentId');

  // Find a menu that matches the pathname.
  const currentMenu = menus.find(
    (_) => _.route && pathToRegexp(_.route).exec(location.pathname)
  );

  // Find the key that should be selected according to the current menu.
  const selectedKeys = currentMenu
    ? queryAncestors(menus, currentMenu, 'menuParentId').map((_) => _.id)
    : [];

  useEffect(() => {
    // checkSession()
    //   .then((data) => {
    //     getAppConfig();
    //     if ([ROUTE.INDEX, ROUTE.LOGIN].includes(location.pathname)) {
    //       navigate(ROUTE.DASHBOARD, { replace: true });
    //     }
    //   })
    //   .catch((err) => {
    //     navigate(ROUTE.LOGIN, { replace: true });
    //   });
  }, []);

  const itemsAvatar: MenuProps['items'] = [
    {
      key: 'logout',
      label: <a>Log out</a>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Layout className="cms-layout-app">
      <Header className="site-layout-header">
        <div className="header-container">
          <div className="logo" onClick={() => navigate(ROUTE.DASHBOARD)} />
          {/* <div className="logo" /> */}
          {/*<Menu*/}
          {/*  className="menu-header"*/}
          {/*  mode="horizontal"*/}
          {/*  selectedKeys={selectedKeys}*/}
          {/*>*/}
          {/*  {generateMenus(menuTree)}*/}
          {/*</Menu>*/}
          <div className="top-right-container">
            <div className="action-container">
              <Dropdown
                menu={{
                  items: itemsAvatar,
                }}
              >
                <Space>
                  <Avatar
                    icon={<UserOutlined />}
                    style={{ verticalAlign: 'middle' }}
                    size="small"
                  />
                  {username}
                </Space>
              </Dropdown>
            </div>
          </div>
        </div>
      </Header>
      <Layout className="site-layout">
        <Content className="site-layout-background">
          {renderRoutes(MAIN_ROUTES, role)}
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutApp;
