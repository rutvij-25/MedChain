import { useState } from "react";
import { Link,Route,Router,useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import PatientCard from './PatientCard';
import Navbar from "./components/navbar";
import ipfs from "./ipfs.js"

const NewHistory = (props) => {

  
  const [date, setDate] = useState('');
  const [buffer,setBuffer] = useState([]);
  const [desc, setDesc] = useState('');
  const [reports, setReports]= useState('');
  const [reportaddrs, setReportaddrs]= useState('');
  
  const { id } = useParams()
  console.log(id);

  async function onSubmit (event)  {
    event.preventDefault()
    
    await ipfs.add(buffer,(error, result) => {
      
      props.addhistory(id,date,desc,reports,result[0].hash);
      setReportaddrs(result[0].hash);
       
    })

    
  }
  
  
    //await props.contract.methods.create_patient(firstname,lastname, gender,mobile, age , bloodgroup ).send({ from: props.account });
    //await this.hospital.methods.create_patient("rutvij","wa","Male","1234",20,"AB+").send({ from: this.state.account })
    //console.log(firstname,lastname, gender, age , bloodgroup, mobile);
    
    // console.log(date,desc,reports);

  // function captureFile (event) {
  //   event.stopPropagation()
  //   event.preventDefault()
  //   const file = event.target.files[0]
  //   let reader = new window.FileReader()
  //   reader.readAsArrayBuffer(file)
  //   reader.onloadend = () => convertToBuffer(reader)    
  // };
  function captureFile(event){
    
    event.preventDefault();
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      setBuffer(Buffer(reader.result))
      console.log('buffer', buffer)
    }
  }



  return (
    <div id="newhist" >
    <Navbar/>
      
        <form onSubmit={onSubmit} className="newhistory">
        
        <label >Date of Visit</label>
        <div value={date}
            onChange={(e) => setDate(e.target.value)}>
        <TextField
        id="date"
        label="Choose your visitdate"
        type="date"
        defaultValue="2022-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
        </div>
        <br></br>
        
          <label >Description</label>
          <input  id="newhistorydesc"
            type="textarea"
            placeholder=" Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            />
             <br></br>
            <label >Report Name</label>
          <input  id="newhistoryname"
            type="textarea"
            placeholder=" Report Name"
            value={reports}
            onChange={(e) => setReports(e.target.value)}
            />
            <br></br>
            <label >File Upload</label>
            <br></br>
            <div value={reports}
            onChange={captureFile}>
            <input type="file" id="myFile" /> <br /><br />
     
            <input type="submit" onClick={onSubmit} value="submit" id="newhistorysubmit"/>  
        </div>    
        
          
        {/* <div value={View} onChange={(e) => setView(e.target.value)}> */}
      
        

      </form>
   
    </div>

  );
  
}

 
export default NewHistory;