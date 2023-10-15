import React, { useState, useCallback,  } from "react";
import { Layout, Space, Menu, } from "antd";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import {  EllipsisOutlined } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";
import Home from "./Home";
import menuRoutes from "../routes/menuRoutes";
import LogoBig from '../assets/logoBig.svg';
import LogoSmall from '../assets/logoSmall.svg';

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
    <Layout style={{ height: "100vh", flexDirection: "row" }}>
      <Sider
        style={{ background: "#0C365A" }}
        className="px-3 py-3"
        collapsible
        trigger={null}
        breakpoint="md"
        collapsed={collapsed}
      
      >
        <div
          onClick={(e: any) => {
            e?.preventDefault();
            setCollapsed(!collapsed);
          }}
        >
          <img src={collapsed ? LogoSmall : LogoBig} alt="Aspire" />
          <p className="mt-3 " style={{color:'white'}}>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
        </div>
        <Menu
          className="dashboard-sider-menu"
          selectedKeys={getSelectedKeys() as string[]}
          overflowedIndicator={<EllipsisOutlined />}
          
        >
          {menuRoutes.map((route: any) => {
            return (
              <Menu.Item
              className="d-flex"

                key={route.key}
                title={route.label}
                icon={
                  <span
                    role="img"
                    aria-label="pic-right"
                    className="anticon anticon-pic-right ant-menu-item-icon"
                 
                  > <img src ={route.icon} alt={route.label} /></span>
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
    </Layout>
  );
}
export default DashboardLayout;
