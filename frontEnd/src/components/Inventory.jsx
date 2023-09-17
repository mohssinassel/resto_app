import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { MenuList } from '/src/helpers/MenuList.js';
const Inventory = () =>{
    const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);

    // Assuming 'MenuList' contains your data
    setDataSource(MenuList);

    setLoading(false);
    
  }, []);
    return(
        <Space size={30} direction="vertical" style={{
            display: 'flex'}}>
        <Typography.Title level={4}>Inventory</Typography.Title>
        <Table
            
            loading={loading}
            columns={[
            {
                title: "Image",
                dataIndex: "image",
                render: (link) => {
                  return <Avatar src={link} />;
                },
            },
            {
                title: "Name",
                dataIndex: "name",
            },
            {
                title: "Price",
                dataIndex: "price",
                render: (value) => <span>${value}</span>,
            },
            {
                title: "Stock",
                dataIndex: "stock",
            },
            {
                title: "Category",
                dataIndex: "category",
            },
            ]}
            dataSource={dataSource}
            pagination={{
            pageSize: 5,
            }}
        ></Table>
    </Space>
    )
}

export default Inventory;