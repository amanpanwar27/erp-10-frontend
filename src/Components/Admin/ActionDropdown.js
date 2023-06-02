import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useEffect } from 'react';

const ActionDropdown = ({
    setpunishmentcomplaintid,
    setShowapprovedmodal,
    setShowForwardModal,
  punishmentcomplaintid,
    complaint_id,
    approvecomplaint,
    rejectcomplaint,
    forward_complaint,
    admin,
    setShowPunishmentModal}) => {
        useEffect(()=>{
            setpunishmentcomplaintid(complaint_id);
         },[]);
        const items = [
            {
              label: <a onClick={()=>setShowapprovedmodal(true)}>Approve</a>,
              key: '0',
            },
            {
              label: <a onClick={()=>{
                setShowPunishmentModal(true);
              }}>Reject</a>,
              key: '1',
            },
            {
              label: admin.level<3 &&  <a onClick={()=>setShowForwardModal(true)}>Forward</a>,
              key: '3',
            },
          ];
       
return (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        change status
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)};
export default ActionDropdown;