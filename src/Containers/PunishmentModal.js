import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PunishmentModal({setShowPunishmentModal,reject_complaint,complaint_id,punishmentcomplaintid = {punishmentcomplaintid}}) {
  const [reg_note,setreg_note] = useState("");
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add Reason for Rejection</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <textarea 
          onChange={(e)=>setreg_note(e.target.value)}
          style={{
            width:"100%",
            height:"100%"
          }}/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShowPunishmentModal(false)}>Close</Button>
          <Button variant="primary" onClick={()=>{
            reject_complaint(punishmentcomplaintid,reg_note);
            setShowPunishmentModal(false);
          }}>Reject</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default PunishmentModal;