import { Radio } from 'antd';
import { useState } from 'react';

const SavedAs = (props) => {
  const [value, setValue] = useState(props.state.saved);
  const onChange = (e) => {
   setValue(e.target.value);
   props.state.setSaved(e.target.value);
  };


  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={"product"}>Product</Radio>
      <Radio value={"draft"}>Draft</Radio>
      
    </Radio.Group>
  );
}; 
export default SavedAs;