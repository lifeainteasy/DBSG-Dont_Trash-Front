import React, { useState } from 'react';
import {AddMember} from '../styles/Styled'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';


 const FormSizeDemo = () => {
   const  onChangeTeamMember = (e) =>{
     console.log(e);
     
   }
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div style={{paddingTop: "100px"}}>
      <Form 

        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
      
        <Form.Item label="프로젝트 명">
          <Input />
        </Form.Item>
        <Form.Item label="분야">
          <Select>
            <Select.Option value="웹">웹</Select.Option>
            <Select.Option value="앱">앱</Select.Option>
            <Select.Option value="웹, 앱 하이브리드">웹, 앱 하이브리드</Select.Option>
            <Select.Option value="정보보안 관련">정보보안 관련</Select.Option>
            <Select.Option value="AI">AI</Select.Option>
            <Select.Option value="아두이노">아두이노</Select.Option>
            <Select.Option value="IOT">IOT</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="동아리 이름 :">
        <Select>
               <Select.Option value='시나브로'>시나브로 </Select.Option>
               <Select.Option value='DBSG' >DBSG </Select.Option>
               <Select.Option value='그램' >그램 </Select.Option>
               <Select.Option value='DMS' >DMS </Select.Option>
               <Select.Option value='PANG' >PANG </Select.Option>
               <Select.Option value='LAPIO' >LAPIO </Select.Option>
               <Select.Option value='ENTRYDSM' >ENTRYDSM </Select.Option>
               <Select.Option value='GG' >GG </Select.Option>
               <Select.Option value='QSS' >QSS </Select.Option>
               <Select.Option value='D' >D </Select.Option>
               <Select.Option value='덧셈' >덧셈 </Select.Option>
               <Select.Option value='Up' >Up </Select.Option>
          </Select>       
        </Form.Item>
        
        <Form.Item label="개발일자">
               <DatePicker style={{marginBottom:"30px"}} />    <DatePicker />
        </Form.Item>
        <Form.Item label="프로젝트 참여 멤버" >
            <AddMember>+</AddMember>
        </Form.Item>
       <Form.Item label="공개 여부">
          <Switch />
       </Form.Item>
        <Form.Item label="(">
          <Button type="primary">제출</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormSizeDemo