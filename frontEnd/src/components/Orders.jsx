import { Space, Table, Typography, Input, Button ,Select} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useState, useRef } from "react";
import Highlighter from 'react-highlight-words';
import { OrderList } from '/src/helpers/OrderList.js';

const { Option } = Select;

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const orderData = OrderList();

  
  useEffect(() => {
    setLoading(true);
    setDataSource(orderData.map((item) => ({
      ...item,
      key: item.id,
    })));
    setLoading(false);
  }, [orderData]);

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
    <Space size={20} direction="vertical" style={{ display: 'flex' , alignItems: 'center' ,textAlign: 'center',marginTop:'15px'}}>
      <Table
        loading={loading}
        columns={[
          {
            title: "Dishes",
            dataIndex: "dishes",
            ...getColumnSearchProps("dishes", "Dishes"),
            width: 400,
            render: (dishes) => dishes.map(dish => dish.name).join(' , '), // Display dish names
          },
          {
            title: "Price",
            dataIndex: "dishes",
            ...getColumnSearchProps("dishes", "Price"),
            width: 300,
            render: (dishes) => dishes.map(dish => dish.price).join(' + '), // Display dish names
          },
          {
            title: "Total",
            dataIndex: "totalAmount",
            ...getColumnSearchProps("totalAmount", "Total"),
            width: 100,
          },
           {
            title: "Order Status",
            dataIndex: "dishStatus",
            width: 100,
            render: (status, record) => (
              <Select
                style={{ width: 120 }}
                value={status}
                onChange={(value) => handleStatusChange(record.key, value)}
              >
                
                <Option value="En cours de préparation">In Preparation</Option>
                <Option value="Prête">Done</Option>
              </Select>
            ),
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
