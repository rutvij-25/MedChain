import { Link } from "react-router-dom";

const dashList = ({ patients }) => {
    


    return ( 
        <div className="dash-list">
        {patients.map((patient) => (
            <div className="blog-preview" key={ patient.id }>
                <Link to = { `/blogs/${patient.id}` }>
                <h2>{ patient.title }</h2>
                <p>Written by { blog.author } </p>
                </Link>
                
                
               <br></br>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;