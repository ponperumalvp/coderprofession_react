import React from "react";

const Application = () => {
  return (
    <div>
      <div>
        <h1>Coderprofession</h1>
        <h3>Software Company</h3>
        <h3>Application Form:(Enquiry/Enrollment)</h3>
      </div>
      <div>
        <label htmlFor="coursename">Course Name:</label>
        <input type="text" />
        <label htmlFor="studentname">Student Name:</label>
        <input type="text" />
        <label htmlFor="fathername">Father's Name:</label>
        <input type="text" />
        <label htmlFor="Address1">Address1:</label>
        <input type="text" />
        <label htmlFor="Address2">Address2:</label>
        <input type="text" />
        <label htmlFor="city">City:</label>
        <input type="text" />
        <label htmlFor="pincode">Pincode:</label>
        <input type="text" />
        <label htmlFor="State">State:</label>
        <input type="text" />
        <label htmlFor="Email id">Email id:</label>
        <input type="text" />
        <label htmlFor="Mobile Number">Mobile Number:</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Application;
