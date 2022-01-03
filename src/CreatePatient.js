import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    

    return ( 
        <div className="create">
            <h2>
                Add a Patient 
            </h2>
            <form>
                <label>Patient Name </label>
                <input type="text" required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Gender</label>
                <select>
                    <option value="F">Female</option>
                    <option value="M">Male</option>
                    <option value="Better not say">Better Not say</option>

                </select>
                <label>Age</label>
                <input type="number">Age</input>
                <label>Blood Group</label>
                <select>
                    <option value="apositive">A +ve</option>
                    <option value="anegative">A -ve</option>
                    <option value="bpositive">B +ve</option>
                    <option value="bnegative">B -ve</option>
                    <option value="abpositive">AB +ve</option>
                    <option value="abnegative">AB -ve</option>
                    <option value="opositive">O +ve</option>
                    <option value="onegative">O -ve</option>
                </select>
                <label>Number</label>
                <input type="number">Number</input>
                <button>Add Patient</button>
               
            </form>
        </div>
     );
}
 
export default Create;