import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';
function Complaint (
  {isstudent,setShowModal,user}
) {
    const [complaintdata , setComplaintData] = useState({});
    const submitData = async()=>{
      console.log("comlpaintdata",complaintdata);
      await fetch("http://localhost:8080/complaint/submit_complaint",{
        method:"POST",
        headers :{
          "Content-Type":"application/json"
        },
        body : JSON.stringify(complaintdata),
      }).then((res)=>res.json()).then((data)=>{
        console.log("submit complinnttt",data);
      })
    }
    return (
      <div class="container" >
        <h4 className="col-md-4" style={{
          marginTop:"-50px"
        }}>Complainant Details-:</h4>
        <br/>
        <form class="row g-3">   
        <div class="col-md-4">
            <label for="autoSizingInput" class="form-label" style={{
              fontSize:"16px"
            }}>Complainant Name</label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter Complainant Name"
              value={complaintdata.name ? complaintdata.name : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"name":e.target.value})
              }}
            />
          </div>       
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label" style={{
              fontSize:"16px"
            }}>
              Registration ID 
            </label>
            <input
              type="number"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your Registration ID"
              value={complaintdata.studentid ? complaintdata.studentid : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"studentid":e.target.value})
              }}
            />
          </div>
          {isstudent && <div class="col-md-4">
            <label for="autoSizingInput" class="form-label" style={{
              fontSize:"16px"
            }}>
              Name of Hostel
            </label>
            <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                setComplaintData({...complaintdata,"hostel_name":e.target.value})
              }}
              value={complaintdata.hostel_name ? complaintdata.hostel_name : ""} 
              >
                <option selected>Select Hostel Name</option>
                <option value="Tagore Bhawan">Tagore Bhawan</option>
                <option value="Patel Bhawan">Patel Bhawan</option>
                <option value="Silver Jubilee Bhawan">Silver Jubilee Bhawan</option>
                <option value="Vishvesharya Bhawan">Vishvesharya Bhawan</option>
                <option value="Saraswati Bhawan">Saraswati Bhawan</option>
                <option value="Mandakini Bhawan">Mandakini Bhawan</option>
            </select>
          </div>}

          <div class="col-md-4">
            <label for="inputAddress2" class="form-label" style={{
              fontSize:"16px"
            }}>
              Registration date
            </label>
            <input
              type="date"
              class="form-control"
              id="inputAddress2"
              value={complaintdata.reg_date ? complaintdata.reg_date  : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"reg_date":e.target.value})
              }}
            />
          </div>
          {isstudent && <div class="col-md-4">
            <label for="autoSizingInput" class="form-label" style={{
              fontSize:"16px"
            }}>
              Room No.
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your room no."
              value={complaintdata.room ? complaintdata.room : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"room":e.target.value})
              }}
            />
          </div>}
          {isstudent && <div class="col-md-4">
            <label for="autoSizingInput" class="form-label" style={{
              fontSize:"16px"
            }}>
              Mobile Number
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your Mobile no."
              value={complaintdata.phone? complaintdata.phone : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"phone":e.target.value})
              }}
            />
          </div>}
          {isstudent && <div class="col-md-4">
            <label for="autoSizingInput" class="form-label" style={{
              fontSize:"16px",
              marginBottom:"-5px"
            }}>
              Title Of Complaint
            </label>
          </div>}
          <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter Complainant Title"
              value={complaintdata.complaint_title ? complaintdata.complaint_title : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"complaint_title":e.target.value})
              }}
            />

          </form>
          
          <h4 className="col-md-4" style={{
            marginTop:"30px"
          }}>Complainee Details-:</h4>

          <form class="row g-3 bottom">    
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label" style={{
              fontSize:"16px"
            }}>Complainee Name</label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter Name"
              value={complaintdata.complainee_name ? complaintdata.complainee_name : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"complainee_name":e.target.value})
              }}
            />
          </div>       
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label" style={{
              fontSize:"16px"
            }}>
              Department
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter Department"
              value={complaintdata.complainee_department ? complaintdata.complainee_department : ""} 
              onChange={(e)=>{
                setComplaintData({...complaintdata,"complainee_department":e.target.value})
              }}
            />
          </div>
          {isstudent && <div class="col-md-4">
            <label for="autoSizingInput" class="form-label" style={{
              fontSize:"16px"
            }}>
              Name of Hostel
            </label>
            <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                setComplaintData({...complaintdata,"complainee_hostel_name":e.target.value})
              }}
              value={complaintdata.complainee_hostel_name ? complaintdata.complainee_hostel_name : ""} 
              >
                <option selected>Select Hostel Name</option>
                <option value="Tagore Bhawan">Tagore Bhawan</option>
                <option value="Patel Bhawan">Patel Bhawan</option>
                <option value="Silver Jubilee Bhawan">Silver Jubilee Bhawan</option>
                <option value="Vishvesharya Bhawan">Vishvesharya Bhawan</option>
                <option value="Saraswati Bhawan">Saraswati Bhawan</option>
                <option value="Mandakini Bhawan">Mandakini Bhawan</option>
            </select>
          </div>}
          <div class="col-16">
            <label for="autoSizingInput" class="form-label " style={{
              fontSize:"16px"
            }}>
              Explain the complaint in brief :
            </label>
            <textarea class="form-control" id="textArea" rows="4" onChange={(e)=>{
                setComplaintData({...complaintdata,"description":e.target.value})
              }}
              value={complaintdata.description ? complaintdata.description : ""} 
              ></textarea>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end col-12">
            <button type="submit" class="btn btn-dark me-md-2" onClick={()=>{
              setComplaintData({});
            }}>
              Reset
            </button>
            <button type="submit" class="btn btn-danger" onClick={()=>{
              submitData();
              setShowModal(false);
            }}>
              Register
            </button>
          </div>
          </form>
      </div>
    );
}

export default Complaint;
