import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterDropDown({style,getfilteredComplaints,user}) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Filter" style={style}>
      <Dropdown.Item href="#/action-1" onClick={()=>getfilteredComplaints("approved",user.reg_id)}>Approved</Dropdown.Item>
      <Dropdown.Item href="#/action-2" onClick={()=>getfilteredComplaints("rejected",user.reg_id)}>Rejected</Dropdown.Item>
      <Dropdown.Item href="#/action-3" onClick={()=>getfilteredComplaints("pending",user.reg_id)}>Pending</Dropdown.Item>
    </DropdownButton>
  );
}

export default FilterDropDown;