import { useState } from "react";
import { useHistory,Link } from "react-router-dom";

const Create = (props) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [bloodgroup, setBloodgroup] = useState('');
  const [mobile, setMobile] = useState('');
  const history = useHistory();

  const  handleSubmit = async(e) => {
    e.preventDefault();
    //await props.contract.methods.create_patient(firstname,lastname, gender,mobile, age , bloodgroup ).send({ from: props.account });
    //await this.hospital.methods.create_patient("rutvij","wa","Male","1234",20,"AB+").send({ from: this.state.account })
    props.addfunction(firstname,lastname, gender, mobile , parseInt(age), bloodgroup);
    // console.log(firstname,lastname, gender, age , bloodgroup, mobile);
  }

  return (
    <div className="create">
      <h2 id="addpatientheading" >Add a New Patient</h2>
      <form onSubmit={handleSubmit} className="addpatient" action="/PatientList">
        <label >First Name</label>
        <input  className="textarea-name"
          type="text" 
          placeholder=" First Name"
          required 
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br></br>
        <label >Last Name</label>
        <input className="textarea-name"
          type="text" 
          placeholder=" Last Name"
          required 
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <br></br>
        <label >Gender</label>
        
        <div value={gender} onChange={(e) => setGender(e.target.value)} >
          
          
        
     
        <select>
          
          <option selected>Choose...</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="NA">Prefer not to say</option>
        </select> 
        </div>
        <br></br>
        <label >Age</label>
        <input  className="textarea-name"
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br></br>
        <label >Blood Group</label>
        <div value={bloodgroup} onChange={(e) => setBloodgroup(e.target.value)}>
          
        <select>
        <option selected>Choose...</option>
                    <option value="A+">A +ve</option>
                    <option value="A-">A -ve</option>
                    <option value="B+">B +ve</option>
                    <option value="B-">B -ve</option>
                    <option value="AB+">AB +ve</option>
                    <option value="AB-">AB -ve</option>
                    <option value="O+">O +ve</option>
                    <option value="O-">O -ve</option>
                </select>
          
        </div>
          
          
        <br></br>
          <label >Contact Number</label>
          <input  className="textarea-name"
            type="text"
            placeholder=" Contact Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            />
            <br></br>
        <Link to="./PatientList"  onClick={handleSubmit} id="addpatientbutton">Add</Link>
      </form>
    </div>
  );
  
}

 
export default Create;