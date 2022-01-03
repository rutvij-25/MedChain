import React from "react";
import { MDBInput, MDBCol } from "mdbreact";

const SearchPage = (props) => {
  
  return (
     <MDBCol md="6" style={{left: "400px"}}>
      <MDBInput  hint="Search" type="text" containerClass="mt-0"  />
    </MDBCol> 
  );
}

export default SearchPage;