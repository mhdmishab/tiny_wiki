import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {  chartDataApi } from '../slices/adminSlice';
import { getAccessToken } from '../utils/token';


function KeywordTable() {
  const dispatch = useDispatch();
  const accessToken = getAccessToken();
  

  // useEffect(() => { 
  //  dispatch(chartDataApi());     
  // }, [dispatch]);


  const { chartData } = useSelector(state => state.admin);

  const dataSource = chartData
    ? chartData.map((item, index) => {
        const obj = {
          key: index,
          keyword: item._id,
          count: item.count,
        };
        return obj;
      })
    : [];

  const columns = [
    {
      title: 'Keyword',
      dataIndex: 'keyword',
      key: 'keyword',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
  ];

  return (
    <Table
      columns={columns}
      className='w-2/3'
      dataSource={dataSource}
      pagination={{ pageSize: 5 }}
    />
  );
}

export default KeywordTable;
