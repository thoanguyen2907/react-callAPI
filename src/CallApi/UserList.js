import React from 'react'
import {Space, Avatar , Table, Tag } from 'antd';
import 'antd/dist/antd.css'

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>  
    ,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <a>{text}</a> 
    
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Role',
    key: 'role',
    dataIndex: 'role',
    render: (text) => <a>{text}</a>,
    
  },
  {
    title: 'Avatar',
    key: 'avatar',
    dataIndex: 'avatar',
    render: (text) => <Avatar src={ text } />,
  }
  
    ];


export default function UserList({usersInformation}) {

   return (
      <Table  columns={columns} dataSource={usersInformation} />
   )
}
