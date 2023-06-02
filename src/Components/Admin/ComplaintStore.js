import "./ComplaintStore.css";
import ActionDropdown from "./ActionDropdown";
import { useState } from "react";
import { Modal } from 'antd';
import { faL } from "@fortawesome/free-solid-svg-icons";
import InfoComplaint from "../Student/InfoComplaint";
import { InfoCircleOutlined } from "@ant-design/icons";
function ComplaintStore({
  setShowapprovedmodal,
  setShowForwardModal,
  setpunishmentcomplaintid,
  punishmentcomplaintid,
  setShowPunishmentModal,complaints,
  forward_complaint,
  approvecomplaint,
  rejectcomplaint,
  admin
}) {

  const [showinfomodal,setShowInfoModal] = useState(false);
  const [infodata,setinfodata] = useState({});
  return (
    <>
    <table class="table table-bordered caption-top">
        <caption>List of Complaint(s)</caption>
          <thead class='table-dark'>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Type of Complaint</th>
              <th scope="col">Complaint date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              complaints && (complaints.map((curr,count)=>{
                return <tr>
                <th scope="row">{count+1}</th>
                <td >{curr.complaint_title}</td>
                <td>{curr.reg_date}</td>
                <td>{curr.status}</td>
                <tf><>
                <ActionDropdown 
                admin = {admin}
                setShowForwardModal = {setShowForwardModal}
                setpunishmentcomplaintid = {setpunishmentcomplaintid}
                punishmentcomplaintid = {punishmentcomplaintid}
                forward_complaint = {forward_complaint} 
                approvecomplaint = {approvecomplaint} 
                rejectcomplaint = {rejectcomplaint} 
                complaint_id={curr.id} 
                setShowapprovedmodal = {setShowapprovedmodal}
                setShowPunishmentModal = {setShowPunishmentModal}/> 
                </>
                <InfoCircleOutlined style={{
                  color:"blue",
                  marginLeft:"30px",
                  position:"relative",
                  bottom:"2px",
                  cursor:"pointer"
                }}
                onClick={()=>{
                  setinfodata(curr);
                  setShowInfoModal(true);
                }}
                />
                </tf>
               </tr>
              }))
            }
          </tbody>
        </table>
        <InfoComplaint 
        showinfomodal = {showinfomodal}
        setShowInfoModal = {setShowInfoModal}
        modalData = {infodata}
        />
    </>
  );
}

export default ComplaintStore;
