import React, { useState, useCallback } from "react";
import { Layout, Space, Menu } from "antd";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";
import Home from "./Home";
import menuRoutes from "../routes/menuRoutes";
import LogoBig from "../assets/logoBig.svg?react";
import LogoSmall from "../assets/logoSmall.svg?react";
import FooterMenu from "./FooterMenu";
const { Sider } = Layout;

function DashboardLayout() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const getSelectedKeys = useCallback(() => {
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    return pathSnippets.map((_, index) => {
      return `/${pathSnippets.slice(0, index + 1).join("/")}`;
    });
  }, [location.pathname]);

  return (
    <Layout
      style={{ minHeight: "100vh", flexDirection: "row", width: "100vw" }}
    >
      <Sider
        style={{ background: "#0C365A" }}
        className="px-4 py-5"
        collapsible
        width={340}
        trigger={null}
        breakpoint="md"
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
          <p className="mt-3 w-100" style={{ color: "white", height: "5rem" }}>
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
      <Layout>
        <div className="dashboard-content-wrapper p-5 pt-3 pb-1">
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Layout>
      <FooterMenu />
    </Layout>
  );
}
export default DashboardLayout;
