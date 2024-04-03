import React, { useState } from "react";
import axios from "axios";

const PersonalDetails = () => {
  const [studentId, setStudentId] = useState("");
  const [studentData, setStudentData] = useState({});
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // Assuming you've installed axios: `npm install axios`

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true); // Set loading state

    try {
      const response = await axios.post(
        "http://localhost:3002/api/fetch-student",
        { studentId }
      );

      if (response.data.success) {
        setStudentData(response.data.data);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleFirstNameChange = (event) => {
    setStudentData({ ...studentData, firstName: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Student ID:
          <input
            type="text"
            value={studentId}
            onChange={handleStudentIdChange}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>

      <h2>First and Middle Name(s)</h2>
      <p>
        Make sure your name is as it appears on any official documents, such as your
        passport, birth certificate or driving licence.
      </p>
      <textarea
        value={studentData.firstName || ""}
        onChange={handleFirstNameChange}
      />

      {/* Rest of the form fields */}
    </div>
  );
};

export default PersonalDetails;
