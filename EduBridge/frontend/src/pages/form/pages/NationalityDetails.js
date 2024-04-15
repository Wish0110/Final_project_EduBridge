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

const DualNationality = ({ onChange }) => {
  const [dualNationality, setDualNationality] = useState(false);

  const handleChange = (e) => {
    setDualNationality(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <div>
      <label>
        4. Dual Nationality (label)
        <br />
        If you have dual nationality, select your first nationality in the previous
        field and your second nationality here.
      </label>
      <br />
      <input type="checkbox" checked={dualNationality} onChange={handleChange} />
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
  const [dualNationality, setDualNationality] = useState(false);

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleSecondNationalityChange = (e) => {
    setSecondNationality(e.target.value);
  };

  const handleDateOfEntryChange = (e) => {
    setDateOfEntry(e.target.value);
  };

  return (
    <Sidebar>
      <CountrySelector
        label="1. What is your country of birth? (label)"
        options={['Sri Lanka', 'UK', 'Other']}
        onChange={handleNationalityChange}
      />
      <DatePicker label="2. Please tell us your date of first entry to UK(label)" onChange={handleDateOfEntryChange} />
      <CountrySelector
        label="3. What is your nationality? (label)"
        options={['Sri Lanka', 'UK', 'Other']}
        onChange={handleNationalityChange}
      />
      <DualNationality onChange={setDualNationality} />
      {dualNationality && (
        <>
          <CountrySelector
            label="Second Nationality (label)"
            options={['Sri Lanka', 'UK', 'Other']}
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
    </Sidebar>
  );
};

export default ApplicationForm;