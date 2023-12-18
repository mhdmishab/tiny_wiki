import React from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetPageContent } from '../slices/wikiSlice';
import { useNavigate } from 'react-router-dom';

function TitleTable() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const { searchData } = useSelector((state) => state.wiki);
   
const data = searchData?.map((item)=>{
    const text=item.snippet.replace(/<\/?[^>]+(>|$)/g, '');
    const obj={
        key:item.pageId,
        title:item.title,
        description:text
    };
    return obj
})
console.log(data);
    
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },

        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (record) => <a onClick={() => handleView(record)}>View</a>,
        },
    ];
    const handleView = (record) => {
        dispatch(GetPageContent(record.key)).then(()=>{
            navigate('/content');
        })
     
      };
    return (
        <Table
            columns={columns}
            className='w-2/3'
            expandable={{
                expandedRowRender: (record) => (
                    <p
                        style={{
                            margin: 0,
                        }}
                    >
                        {record.description}
                    </p>
                ),
                rowExpandable: (record) => record.name !== 'Not Expandable',
            }}
            dataSource={data}
            pagination={{ pageSize: 6 }}
        />
    )
}

export default TitleTable
