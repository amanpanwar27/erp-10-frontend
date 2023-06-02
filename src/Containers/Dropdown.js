import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterDropDown({style,getfilteredComplaints,admin}) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Filter" style={style}>
      <Dropdown.Item href="#/action-1" onClick={()=>getfilteredComplaints("approved",admin.level)}>Approved</Dropdown.Item>
      <Dropdown.Item href="#/action-2" onClick={()=>getfilteredComplaints("rejected",admin.level)}>Rejected</Dropdown.Item>
      <Dropdown.Item href="#/action-3" onClick={()=>getfilteredComplaints("pending",admin.level)}>Pending</Dropdown.Item>
    </DropdownButton>
  );
}

export default FilterDropDown;