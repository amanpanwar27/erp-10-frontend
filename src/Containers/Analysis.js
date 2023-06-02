import { PieChart } from 'react-minimal-pie-chart';

const Analysis = ()=><PieChart
radius={50}
animate={true}
style={{
  position:"relative",
  width:"200px",
  left:"45vw",
  marginTop:"100px",
  marginBottom:"100px"
}}
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>;

export default Analysis;