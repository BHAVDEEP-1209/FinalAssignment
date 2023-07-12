import React from 'react';
import { Select, Space } from 'antd';

const Category = (props) => {
    const handleChange = (value) => {
        props.state.setCategory(value);
      };

  return (
    <Space wrap>
    <Select
      defaultValue="watches"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'watches',
          label: 'Watches',
        },
        {
          value: 'makeUp',
          label: 'Make Up',
        },
        {
          value: 'jewelry',
          label: 'Jewelry',
        },
        {
          value: 'skincare',
          label: 'Skincare',
        },
        {
          value: 'fashion',
          label: 'Fashion',
        },
      ]}
    />
    
  </Space>
  )
    };
export default Category;