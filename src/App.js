import { MailOutlined, SettingOutlined, AppstoreOutlined, BorderOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Layout, Space,Tag } from 'antd';
import { DownOutlined,EditOutlined,DeleteOutlined,PlayCircleOutlined,PauseCircleOutlined} from '@ant-design/icons';
import { Dropdown } from 'antd';
import { Divider,  Table } from 'antd';
import React, { useState } from 'react';
import { DatePicker} from 'antd';
import {Switch} from 'antd';
import {Checkbox} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`;
 
    const onChange = (e) => {
      console.log(`checked = ${e.target.checked}`);
      };
      
      const OnChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
const items = [
  getItem('Dashboard', 'sub1', <BorderOutlined />, []),
  getItem('Catalog', 'sub2', <BorderOutlined />, []),
  getItem('Inventory', 'sub4', <BorderOutlined />, []),
  getItem('Advertising', 'sub5', <BorderOutlined />, []),
  getItem('Product Intelligence', 'sub6', <BorderOutlined />, []),
  getItem('Forecasting', 'sub7', <BorderOutlined />, []),
  getItem('Report Central', 'sub8', <BorderOutlined />, []),
  getItem('Reports', 'sub9', <BorderOutlined />, []),
  getItem('Link Accounts', 'sub10', <BorderOutlined />, []),
  getItem('Settings', 'sub11', <BorderOutlined />, []),
  getItem('Help', 'sub12', <BorderOutlined />, []),
];

const App = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((state) => {
      const newLoadings = [...state];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((state) => {
        const newLoadings = [...state];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
   const [selectionType, setSelectionType] = useState('checkbox');

  const onClick = (e) => {
    console.log('click', e);
  };

  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'white',
  };
  const contentStyle = {
    textAlign: 'left',
    lineHeight: '120px',
    // width:50,
    color: 'black',
    backgroundColor: 'white',
  };
  const siderStyle = {
    textAlign: 'left',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'white',
  };
  const footerStyle = {
    textAlign: 'center',
    color: 'blue',
    backgroundColor: 'white',
  };

  const items1 = [
    {
      label: 'Submit and continue',
      key: '1',
    },
  ];

  const columns = [
    
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Campaign Name',
      dataIndex: 'campaignname',
    },
    {
      title: 'Info',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title:'Automation',
      dataIndex: 'automation',
    },
    {
      title:'Dayparting',
      dataIndex: 'dayparting',
    },
    {
      title:'Budget',
      dataIndex: 'budget',
    },
    {
      title:'Bidding Strategy',
      dataIndex: 'biddingstrategy',
    },
    {
      title:'Spend',
      dataIndex: 'spend',
    },
    {
      title:'Revenue',
      dataIndex: 'revenue',
    },
    {
      title:'Current bid',
      dataIndex: 'currentbid',
    },
    {
      title:'ACOS',
      dataIndex: 'acos',
    },
    {
      title:'Orders',
      dataIndex: 'orders',
    },
    {
      title:'Impression',
      dataIndex: 'impression',
    },
    {
      title:'CTR',
      dataIndex: 'ctr',
    },
    {
      title:'Conv Rate',
      dataIndex: 'convrate',
    },
    {
      title:'',
      dataIndex:'report',
    },
    {
      title:'',
      dataIndex:'dot',
    },
  ];
  const data = [
    {
      key: '1',
    //  checkbox: <Checkbox onChange={onChange}></Checkbox>,
     status:[<PlayCircleOutlined />],
      campaignname:'Marina Twin',
      tags: ['M', 'SP','KT'],
      automation:<Switch defaultChecked nChange={OnChange} />,
      dayparting: <Switch unChecked nChange={OnChange} />,
      budget:'$7,099',
      biddingstrategy: <u style={{color:"blue"}}>Up&Down</u>,
      spend:'$7,099',
      revenue:'$7,099',
      currentbid:'$9',
      acos:'298%',
      orders:'34',
      impression:'4.5k',
      ctr:'4.5k',
      convrate:'1.5%',
       report: <p style={{color:"blue"}}>Report</p>,
       dot:'...'
    },
    {
      key: '2',
    
     status:[<PlayCircleOutlined />],
      campaignname:'Alpha Bed Frames',
      tags: ['M', 'SP','KT'],
       automation:<Switch unChecked nChange={OnChange} />,
      dayparting: <Switch defaultChecked nChange={OnChange} />,
      budget:'$12,805',
     biddingstrategy: <u style={{color:"blue"}}>Up&Down</u>,
      spend:'$12,805',
      revenue:'$12,805',
      currentbid:'$9',
      acos:'145%',
      orders:'453',
      impression:'12k',
      ctr:'12k',
      convrate:'4.5%',
      report: <p style={{color:"blue"}}>Report</p>,
       dot:'...'
      
    },
    {
      key: '3',
    
     status:[<PauseCircleOutlined />],
      campaignname:'Mattress',
      tags: ['M', 'SD','KD'],
      automation:<Switch defaultChecked nChange={OnChange} />,
    dayparting: <Switch unChecked nChange={OnChange} />,
      budget:'$57,804',
    biddingstrategy: <u style={{color:"blue"}}>Up</u>,
      spend:'$57,804',
      revenue:'$57,804',
      currentbid:'$9',
      acos:'569.4%',
      orders:'35',
      impression:'4.6k',
      ctr:'4.6k',
      convrate:'5.5%',
       report: <p style={{color:"blue"}}>Report</p>,
      dot:'...'
    },
    {
      
        key: '4',
      
       status:[<DeleteOutlined />],
        campaignname:'Bamboo Toppers',
        tags: ['AUTO'],
        automation:<Switch unChecked nChange={OnChange} />,
        dayparting: <Switch defaultChecked nChange={OnChange} />,
        budget:'$7,209',
        biddingstrategy: <u style={{color:"blue"}}>Down</u>,
        spend:'$7,209',
        revenue:'$7,209',
        currentbid:'$9',
        acos:'225%',
        orders:'35',
        impression:'3.6k',
        ctr:'3.6k',
        convrate:'9.5%',
        report: <p style={{color:"blue"}}>Report</p>,
        dot:'...'
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };



  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}></Header>
        <Layout hasSider>
          <Sider style={siderStyle}>
            <Menu
              defaultSelectedKeys={['sub5']}
              onClick={onClick}
              style={{
                width:180,
              }}
              mode="vertical"
              items={items}
            />
          </Sider>
          <Content style={contentStyle}>
          <b style={{ fontSize: 20 }}>Adevertising</b>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-between"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "flex-start"
              // justifyContent:"space-evenly"
            }}>
        <div style={{
            display: "flex",
          flexDirection:"column"}}>Marketplace
          
         <Dropdown.Button
        icon={<DownOutlined />}
        loading={loadings[1]}
        menu={{
          items1,
        }}
        onClick={() => enterLoading(1)}>
        Amazon 977462
      </Dropdown.Button>
      
      </div>
      <div style={{
            display: "flex",
              flexDirection: "column"
            }}>
      Ad type   
      
      <Dropdown.Button
        icon={<DownOutlined />}
        loading={loadings[1]}
        menu={{
          items1,
        }}
        onClick={() => enterLoading(1)}>
       All
      </Dropdown.Button>
      </div>
            </div>
      
          <div style={{
              display: "flex",
            justifyContent:"flex-end"}}>
          <div style={{
            display: "flex",
              flexDirection: "column",
            }}>Date & Time
      <RangePicker
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
      format={dateFormat} />
      </div>
      </div>
      </div> 
              <Divider/>
              <b style={{ fontSize: 20 }}>All Campaign</b>
              <Table 
                rowSelection={{
                  type: selectionType,
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
              />
  
          </Content>
        </Layout>
        <Footer style={footerStyle}>Designed by Rashmi 19MIS0124</Footer>
      </Layout>
    </Space>
  );
};

export default App;
