import { Space, Table, Typography, Input, Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useState, useRef } from "react";
import Highlighter from 'react-highlight-words';
import { MenuList } from '/src/helpers/MenuList.js';

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    setLoading(true);
    setDataSource(MenuList);
    setLoading(false);
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex, columnTitle) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${columnTitle}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{
          backgroundColor: '#ffc069',
          padding: 0,
        }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    ),
  });

  return (
    <Space size={20} direction="vertical" style={{ display: 'flex' , alignItems: 'center' ,textAlign: 'center'}}>
      <Typography.Title level={1} >Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
            ...getColumnSearchProps("title", "Title"),
            width: 600,
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
            ...getColumnSearchProps("price", "Price"),
            width: 100,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
            ...getColumnSearchProps("quantity", "Quantity"),
            width: 100,
          },
          {
            title: "Total",
            dataIndex: "total",
            ...getColumnSearchProps("total", "Total"),
            width: 100,
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 7,
        }}
      ></Table>
    </Space>
  );
};

export default Orders;
