import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Link} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './footer'



function createData(id,name, gender, age, contact, bloodgroup,history) {
  return {
    id,
    name,
    gender,
    age,
    contact,
    bloodgroup,
    history,
  };
}

function Row(props) {
  
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
   
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" style ={{fontWeight: " 1200" , fontSize: "18px" , fontFamily: "Poppins, sans-serif"}}>
          {row.name}
        </TableCell>
        <TableCell align="right" style ={{fontWeight: " 1200" , fontSize: "18px" , fontFamily: "Poppins, sans-serif"}}>{row.gender}</TableCell>
        <TableCell align="right" style ={{fontWeight: " 1200" , fontSize: "18px" , fontFamily: "Poppins, sans-serif"}}>{row.age}</TableCell>
        <TableCell align="right" style ={{fontWeight: " 1200" , fontSize: "18px" , fontFamily: "Poppins, sans-serif"}}>{row.bloodgroup}</TableCell>
        <TableCell align="right" style ={{fontWeight: " 1200" , fontSize: "18px" , fontFamily: "Poppins, sans-serif"}}>{row.contact}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" style={{fontWeight: " 1200" , fontSize: "20px" , fontFamily: "Poppins, sans-serif"}}>
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontWeight: " 1200" , fontSize: "20px" , fontFamily: "Poppins, sans-serif"}}>Date</TableCell>
                    <TableCell style={{fontWeight: " 1200" , fontSize: "20px" , fontFamily: "Poppins, sans-serif"}}>Description</TableCell>
                    <TableCell style={{fontWeight: " 1200" , fontSize: "20px" , fontFamily: "Poppins, sans-serif"}}>Report</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row" style={{fontWeight: " 1200"  , fontFamily: "Poppins, sans-serif"}}>
                        {historyRow.date}
                      </TableCell>
                      <TableCell style={{fontWeight: " 1200"  , fontFamily: "Poppins, sans-serif"}}>{historyRow.desc}</TableCell>
                      <TableCell style={{fontWeight: " 1200"  , fontFamily: "Poppins, sans-serif"}}><a href={`http://localhost:8080/ipfs/${historyRow.addr}`} target="_blank" >{historyRow.report}</a></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <Link to={`/NewHistory/${row.id}`} className='nh' style={{fontWeight: " 1200" , fontSize: "20px" , fontFamily: "Poppins, sans-serif" ,textDecoration: "None" ,textDecorationColor: "#05668D;"}}>+ History</Link>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    contact: PropTypes.string.isRequired,
    bloodgroup: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
      }),
    )
  }).isRequired,
};



export default function PatientList(props) {
 
  const rows = [];
  
  for(let i=0;i<props.patientC;i++){
    if(props.patientL[i+1]){
      let history = []
      for(let j=0;j<props.patientH[i+1].length;j++){
        if(props.patientH[i+1]){
          history.push({date:props.patientH[i+1][j][0],desc:props.patientH[i+1][j][1],report:props.patientH[i+1][j][2],addr:props.patientH[i+1][j][3]});
          
      }
    }
    rows.push(createData(props.patientL[i+1][0],props.patientL[i+1][1]+" "+props.patientL[i+1][2],props.patientL[i+1][3],props.patientL[i+1][5],props.patientL[i+1][4],props.patientL[i+1][6],history))
  }
  }
 
  return (
    <div id="ptlist">
    <TableContainer component={Paper} >
    
      <Table aria-label="collapsible table">
        <TableHead style={{fontWeight: " 1200" , fontSize: "25px" , fontFamily: "Poppins, sans-serif"}}>
          <TableRow>
            <TableCell />
            <TableCell style={{fontWeight: " 1200" , fontSize: "25px" , fontFamily: "Poppins, sans-serif"}}>Patient Name</TableCell>
            <TableCell align="right" style={{fontWeight: " 1200" , fontSize: "25px" , fontFamily: "Poppins, sans-serif"}}>Gender</TableCell>
            <TableCell align="right" style={{fontWeight: " 1200" , fontSize: "25px" , fontFamily: "Poppins, sans-serif"}}>Age</TableCell>
            <TableCell align="right" style={{fontWeight: " 1200" , fontSize: "25px" , fontFamily: "Poppins, sans-serif"}}>Blood Group</TableCell>
            <TableCell align="right" style={{fontWeight: " 1200" , fontSize: "25px" , fontFamily: "Poppins, sans-serif"}}>Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{fontWeight: " 1200" , fontSize: "25px" , fontFamily: "Poppins, sans-serif"}}>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
    
    </div>
  );
}
{/*const data = () => {
  return (
    <div className="data">
      <h2>dashboard</h2>
    </div>
  );
}
 
export default data;*/}