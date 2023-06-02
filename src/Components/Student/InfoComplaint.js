import './styles.css';
import { Button, Modal } from 'antd';
import { useState } from 'react';
const InfoComplaint = ({
  setShowInfoModal,
  showinfomodal,
  modalData,
  user
}) => {
  console.log("modaldata aklsjdsakldj",modalData);
  return (
    <>
      <Modal open={showinfomodal} onCancel={()=>setShowInfoModal(false)} closable={true} footer={null} className="info top-box" width={1000} >
      <div style={{ padding:"19px"}}>
        <div className='header'>
        <h4 className="topbox">Complainant Details-:</h4>
        </div>
        <div className='infobox'>
          <div className='leftinfo'>
            <p>Name :</p>
            <p>Registration ID :</p>
            <p>Name of Hostel :</p>
            <p>Room Number :</p>
            <p>Registration Date :</p>
            <p>Moblie Number :</p>
            <p>Type of Complaint:</p>
            <p>Complainant Name :</p>
            <p>Complainant Hostel Name :</p>
            <p>Complainee Hostel Name :</p>
            <p>Complaint in Breif:</p>
            
            {modalData.status == "rejected" && <p>Rejection Note</p>}
            {modalData.status == "pending" && (<p>Forward Note</p>)}
            
          </div>
          <div className='inforight col-md-3'>
            <p>{modalData.name}</p>
            <p>{modalData.studentid}</p>
            <p>{modalData.hostel_name}</p>
            <p>{modalData.room}</p>
            <p>{modalData.reg_date}</p>
            <p>{modalData.phone}</p>
            <p>{modalData.complaint_title}</p>
            <p>{modalData.complainee_name}</p>
            <p>{modalData.complainee_hostel_name}</p>
            <p>{modalData.complainee_department}</p>
            <p>{modalData.description}</p>
            {modalData.status == "rejected" && <p>{modalData.rejection_note}</p>}
            {modalData.status == "pending" && <p>{modalData.forward_note}</p>}
            
          </div>
          
          </div>
        </div>
      </Modal>
    </>
  );
};
export default InfoComplaint;