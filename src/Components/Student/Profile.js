import { React, useEffect, useState} from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import FilterDropDown from "./FilterDropDown";
import InfoComplaint from "./InfoComplaint";
import {Modal,Button,Space} from "antd"
import Complaint from "./Complaint";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

function Profile ({isstudent}) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [complaints,setComplaints] = useState();
  const [modalData,setModalData] = useState();
  const [stats,setStats] = useState({});
  const [complaintmodal,setcomplaintmodal] = useState(false);
  const location = useLocation();
  const userdetails = JSON.parse(window.localStorage.getItem("userdetails"));
  const [user,setUser] = useState(userdetails);
  const getstats = async(reg_id)=>{
    await fetch(`http://localhost:8080/complaint/get_stats_student?reg_id=${reg_id}`,{
      headers : {
        "Content-Type":"application/json",
      }
    }).then((res)=>res.json()).then((data)=>{
      setStats(JSON.parse(data.data));
    })
  }
  const getfilteredComplaintsbyid = async(status,reg_id)=>{
    await fetch(`http://localhost:8080/complaint/get_filtered_complaintsbyid?status=${status}&reg_id=${reg_id}`,{
      method:"GET",
      headers : {
        "Content-Type":"application/json",
      }
    }).then((res)=>res.json()).then((data)=>{
      setComplaints(data.data);
    })
  }
  const getComplaints = async(reg_id)=>{
    await fetch(`http://localhost:8080/complaint/get_student_complaint?reg_id=${reg_id}`,{
      method:"GET",
      headers : {
        "Content-Type":"application/json",
      }
    }).then((res)=>res.json()).then((data)=>{
      console.log(data);
      setComplaints(data.data);
    })
  }
    useEffect(()=>{
      getComplaints(user.reg_id);
      getstats(user.reg_id);
    },[complaintmodal])
    const openModal = (data) => {
      setModalData(data);
      setShowModal(true);
    };
    const closeModal = () => {
      setShowModal(false);
    };
    console.log(isstudent);
    console.log("complaintdata",complaints);
    return (
      <>
        <div className="black-box">
          <FontAwesomeIcon
            icon={faUser}
            className="text-primary"
            style={{ fontSize: "7rem" }}
          />
          <div>
            <h2 className="user-name">{user.name} {`(${user.designation})`}</h2>
            <h3 className="user-name">{user.branch}</h3>
            <h4 className="user-name">{user.reg_id}</h4>
          </div>
          <div className="green-box">
            <div className="leaves">
              <h4>Approved Complaint(s)</h4>
              <h4>{ stats.approved_count }</h4>
            </div>
          </div>
          <div className="blue-box">
            <div className="leaves">
              <h4>Active Complaint(s)</h4>
              <h4>{stats.pending_count}</h4>
            </div>
          </div>
          <div className="red-box">
            <div className="leaves">
              <h4>Complaint(s) closed</h4>
              <h4>{stats.rej_count}</h4>  
            </div>
          </div>
        </div>
        <div style={{
            position:"relative",
            marginTop:"30px",
            marginLeft:"100px",
            marginBottom:"50px",
        }}>
    <Space wrap>
    <Button type="primary"
    onClick={()=>setcomplaintmodal(true)} 
    size="large"
    ss={{
      textAlign:"center",
      backgroundColor:"#23292F",
      color:"white",
      fontSize:"19px",
      fontWeight:"500",
  }}
    >Raise a Complaint</Button>
  </Space>
        </div>
        <FilterDropDown style = {{
          marginLeft:"20px",
          position:"relative",
          top:"80px",
          left:"20px",
        }}
        getfilteredComplaints = {getfilteredComplaintsbyid}
        user = {user}
        />
        <table class="table table-bordered caption-top" style={{
          marginBottom:"50px"
        }}>
        <caption>List of Complaint(s)</caption>
          <thead class='table-dark'>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Title of Complaint</th>
              <th scope="col">Complaint date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {
              complaints && (complaints.map((curr,count)=>{
                return <tr>
                <th scope="row">{count+1}</th>
                <a onClick={()=>openModal(curr)}>{curr.complaint_title}</a>
                <td>{curr.reg_date}</td>
                <td>{curr.status}</td>
               </tr>
              }))
            }

          </tbody>
        </table>
        {showModal && (
        <InfoComplaint user={user} isstudent = {isstudent} setShowInfoModal = {setShowModal} modalData = {modalData} showinfomodal={showModal}/>
      )}
      <Modal open={complaintmodal} width={"1000px"}  closable={true} onCancel={()=>setcomplaintmodal(false)} footer={null}>
      <Complaint isstudent = {isstudent} setShowModal = {setcomplaintmodal} user = {user}/>
      </Modal> 
      </>
    );  
}

export default Profile;
