import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/admin.css"


const MenuAdmin = () => {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");

    useEffect(() => {
        const pathName = location.pathname;
        setSelectedKeys(pathName);
    }, [location.pathname]);

    const navigate = useNavigate()
    return(
        <div className="CenteredMenu">
      <Menu
        className="SideMenuHorizontal"
        mode="horizontal"
        style={{
            display: 'flex',
            justifyContent: 'center'}}
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          
          {
            label: "Inventory",
            key: "/admin/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/admin",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customers",
            key: "/admin/customers",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
    )
}

export default MenuAdmin;