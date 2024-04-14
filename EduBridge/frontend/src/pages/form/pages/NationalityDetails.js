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
      <input type="checkbox" checked={dualNationality} onChange={handleChange} />
      <label>If you have dual nationality, select your first nationality in the previous field and your second nationality here.</label>
    </div>
  );
};

const NationalitySelector = ({ options, label, onChange, dualNationality }) => {
  if (!dualNationality) {
    return null;
  }

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

  const handleDualNationalityChange = (e) => {
    setDualNationality(e.target.checked);
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
      <DualNationality onChange={handleDualNationalityChange} />
      <NationalitySelector
        label="4. Dual nationality(label)"
        options={['Sri Lanka', 'UK', 'Other']}
        onChange={handleSecondNationalityChange}
        dualNationality={dualNationality}
      />
    </Sidebar>
  );
};

export default ApplicationForm;