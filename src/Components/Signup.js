import { Button, Checkbox, Form, Input ,Select } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const {Option} = Select;
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Signup = () => {
const [designation,setdesignation] = useState("");
const [signupdata,setsignupdata] = useState({});
const [showwarning,setshowwarning] = useState(false);
const navigate = useNavigate();
const SignupUser = ()=>{
    console.log(signupdata);
    fetch("http://localhost:8080/complaint/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(signupdata)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data.data);
            if(data.message === "success"){
                window.location.href = "/login";
            }
            else {
                setshowwarning(true);
                setsignupdata({});
            }
        })
}
  return <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
      margin:"auto",
      marginTop:"200px"
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name = "email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input 
      value={signupdata.email ? signupdata.email: ""}
      onChange={(e)=>{
         setsignupdata({...signupdata,"email":e.target.value});
      }}
      />
    </Form.Item>
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input onChange={(e)=>{
        setsignupdata({...signupdata,"name":e.target.value});
      }}
      value={signupdata.name ? signupdata.name: ""}
      />
    </Form.Item>
    <Form.Item
      label="Registration ID"
      name="Registration ID"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input onChange={(e)=>{
        setsignupdata({...signupdata,"reg_id":e.target.value});
      }}
      value={signupdata.reg_id ? signupdata.reg_id: ""}
      />
    </Form.Item>
    <Form.Item name="designation" label="Designation" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option"
          onChange={(e)=>{
            setdesignation(e);
            setsignupdata({...signupdata,"designation" : e});
            // if(designation == "student")setdesignation({...signupdata,"isstudent":true});
            // else setdesignation({...signupdata,"isstudent":false});
          }}
          allowClear
        >
          <Option value="student">student</Option>
          <Option value="warden">warden</Option>
          <Option value="Dean">Dean</Option>
          <Option value="cdb">CDB</Option>
        </Select>
      </Form.Item>
      {designation !== ""  && <Form.Item
      label={designation == "student" || designation == "warden" ? "Hostel"  : "Department"}
      name={designation == "student"  || designation == "warden"  ? "Hostel"  : "Department"}
      rules={[
        {
          required: true,
          message: 'Please input your Detail',
        },
      ]}
    >
      <Input onChange={(e)=>setsignupdata({...signupdata,"loc" : e.target.value})}/>
    </Form.Item>}
    <Form.Item
      label="Phone"
      name="phone"
      rules={[
        {
          required: true,
          message: 'Please input your phone number!',
        },
      ]}
    >
      <Input  
      value={signupdata.phone ? signupdata.phone: ""}
      onChange={(e)=>{
        setsignupdata({...signupdata,"phone":e.target.value});
      }}/>
    </Form.Item>
      <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password onChange={(e)=>setsignupdata({...signupdata,"password" : e.target.value})}/>
    </Form.Item>
 { showwarning &&  <p style={{
        color:"red",
        marginLeft:"120px"
    }}>Wrong field entered , Please enter again !!</p>}
    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={()=>{
        SignupUser();
      }}>
        Submit
      </Button>
    </Form.Item>
  </Form>
};
export default Signup;