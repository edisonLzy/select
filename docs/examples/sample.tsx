import React from 'react';
import Select, { Option } from 'rc-select';
function Sample () {
    return <Select onChange={e=>{
        console.log(e);
    }}>
        <Option value="1">
            Jack 
        </Option>
        <Option value="2">
            Lucy 
        </Option>
        <Option value="3">Jill</Option>
    </Select>
}
export default Sample