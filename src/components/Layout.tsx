import { useState, useCallback } from "react";
import { Layout, Menu } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
import { EllipsisOutlined } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";
import Home from "../pages/Home";
import menuRoutes from "../routes/menuRoutes";
import LogoBig from "../assets/logoBig.svg?react";
import LogoSmall from "../assets/logoSmall.svg?react";
import FooterMenu from "./FooterMenu";
import isMobile from "is-mobile";
import { useWindowDimensions } from "../hooks";
const { Sider } = Layout;

function DashboardLayout() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  const getSelectedKeys = useCallback(() => {
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    return pathSnippets.map((_, index) => {
      return `/${pathSnippets.slice(0, index + 1).join("/")}`;
    });
  }, [location.pathname]);
  const getInMobileMode = (): boolean => {
    return width ? width <= 576 : isMobile();
  };
  return (
    <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
      {!getInMobileMode() ? (
        <Sider
          style={{ background: "#0C365A" }}
          className="px-4 py-5"
          collapsible
          width={340}
          trigger={null}
          collapsed={collapsed}
        >
          <div
            className="d-flex collapse-toggle-section flex-wrap"
            onClick={(e: any) => {
              e?.preventDefault();
              setCollapsed(!collapsed);
            }}
          >
            {collapsed ? <LogoSmall className="" /> : <LogoBig />}
            <p
              className="mt-3 w-100"
              style={{ color: "white", height: "5rem" }}
            >
              {collapsed
                ? ""
                : "Trusted way of banking for 3,000+ SMEs and startups in Singapore"}
            </p>
          </div>
          <Menu
            className="dashboard-sider-menu"
            selectedKeys={getSelectedKeys() as string[]}
            overflowedIndicator={<EllipsisOutlined />}
          >
            {menuRoutes.map((route: any) => {
              return (
                <Menu.Item
                  className="d-flex my-5 align-items-center"
                  key={route.key}
                  title={route.label}
                  icon={
                    <span
                      role="img"
                      aria-label="pic-right"
                      className="anticon anticon-pic-right ant-menu-item-icon"
                    >
                      {" "}
                      <route.icon />{" "}
                    </span>
                  }
                >
                  {route.label}

                  <Link to={route.path}></Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
      ) : (
        <></>
      )}
      <Layout className="dashboard-content">
        <div
          className={
            "dashboard-content-wrapper   pb-1 " +
            (!getInMobileMode() ? "p-5" : " mobile-content-wrapper")
          }
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/dashboard/home" />} />
          </Routes>
        </div>
        {getInMobileMode() ? <FooterMenu /> : <></>}
      </Layout>
    </Layout>
  );
}
export default DashboardLayout;
