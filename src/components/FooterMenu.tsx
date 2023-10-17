import { Col, Menu, Row } from "antd";
import menuRoutes from "../routes/menuRoutes";
import { Link, useLocation } from "react-router-dom";
import { useCallback } from "react";

const FooterMenu = () => {
  const location = useLocation();

  const getSelectedKeys = useCallback(() => {
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    return pathSnippets.map((_, index) => {
      return `/${pathSnippets.slice(0, index + 1).join("/")}`;
    });
  }, [location.pathname]);
  return (
    <Menu
      className="dashboard-footer-menu"
      selectedKeys={getSelectedKeys() as string[]}
      mode="horizontal"
    >
      {menuRoutes.map((route: any) => {
        return (
          <Menu.Item key={route.key} className="dashboard-footer-menu__item">
            <div className="dashboard-footer-menu__item__icon">
              <route.icon />
            </div>{" "}
            <p className="dashboard-footer-menu__item__label mb-0">
              {route.label}
            </p>
            <Link to={route.path}></Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default FooterMenu;
