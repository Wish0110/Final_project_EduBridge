import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const CountrySelector = ({ options, label, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select onChange={onChange}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const DatePicker = ({ label, onChange }) => {
  const [date, setDate] = useState('');

  const handleChange = (e) => {
    setDate(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="date" value={date} onChange={handleChange} />
    </div>
  );
};

const DualNationalityRadio = ({ onChange }) => {
  const [dualNationality, setDualNationality] = useState('no'); // Default to 'no'

  const handleChange = (e) => {
    setDualNationality(e.target.value);
    onChange(e.target.value); // Pass the selected value to parent component
  };

  return (
    <div>
      <label>
        4. Dual Nationality
        <br />
        If you have dual nationality, select your first nationality in the previous
        field and your second nationality here.
      </label>
      <br />
      <div>
        <label>
          <input
            type="radio"
            name="dualNationality" // Ensures only one option can be selected
            value="yes"
            checked={dualNationality === 'yes'}
            onChange={handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="dualNationality"
            value="no"
            checked={dualNationality === 'no'}
            onChange={handleChange}
          />
          No
        </label>
      </div>
    </div>
  );
};

const VisaRadioOptions = ({ label, options, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      {options.map(option => (
        <label key={option}>
          <input
            type="radio"
            name={label} // Ensures only one option can be selected within this section
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

const ApplicationForm = () => {
  const [nationality, setNationality] = useState('');
  const [secondNationality, setSecondNationality] = useState('');
  const [dateOfEntry, setDateOfEntry] = useState('');
  const [dualNationality, setDualNationality] = useState('no');
  const [isComplete, setIsComplete] = useState(); // Track completion status

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleSecondNationalityChange = (e) => {
    setSecondNationality(e.target.value);
  };

  const handleDateOfEntryChange = (e) => {
    setDateOfEntry(e.target.value);
  };

  const handleDualNationalityChange = (e) => {
    setDualNationality(e.target.value);
  };

  const handleCompletionCheck = (e) => {
    const isSectionComplete = nationality !== ''; // Replace with your actual check
    setIsComplete(e.target.checked && isSectionComplete);
  };

  return (
    <Sidebar>
      <CountrySelector
        label="1. What is your country of birth?"
        options={['Sri Lanka', 'UK', 'Other']}
        onChange={handleNationalityChange}
      />
      <DatePicker label="2. Please tell us your date of first entry to UK" onChange={handleDateOfEntryChange} />
      <CountrySelector
        label="3. What is your nationality?"
        options={['Sri Lanka', 'UK', 'Other']}
        onChange={handleNationalityChange}
      />
      <DualNationalityRadio onChange={setDualNationality} />
      {dualNationality === 'yes' && ( // Conditionally render VisaRadioOptions
        <>
          <CountrySelector
            label="Second Nationality?"
            options={['UK', 'Other']}
            onChange={handleSecondNationalityChange}
          />
          <VisaRadioOptions
            label="Do you need a student visa to study in the UK?"
            options={['Yes', 'No']}
          />
          <VisaRadioOptions
            label="Have you previously studied on a student or tier 4 visa?"
            options={['Yes', 'No']}
          />
          <VisaRadioOptions
            label="Do you have settled or pre-settled status in the UK?"
            options={['Yes', 'No']}
          />
        </>
      )}

     <div>
        <label>
          <input
            type="checkbox"
            checked={isComplete}
            onChange={(e) => {
              handleCompletionCheck(e);
              if (e.target.checked && nationality && dateOfEntry) {
                e.target.disabled = true;
              } else {
                e.target.disabled = false;
              }
            }}
            disabled={!isComplete}
          />
        </label>
        <p>
          Mark this section as complete: You must complete all mandatory fields
          in this section before you can mark it as complete. All sections must
          be marked as complete before you can send your application.
        </p>
      </div>

      <button type="submit" disabled={!isComplete}>
        Submit
      </button>

    </Sidebar>
  );
};

export default ApplicationForm;