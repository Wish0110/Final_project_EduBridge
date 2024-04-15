import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';

const PersonalStatement = () => {

  const [value, setValue] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
    setCharCount(event.target.value.length);
  }
  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  return (
    <Sidebar>
    <div>
    <label>
        <b>What will be your main source of funding for your studies?</b><br />
        </label>
        <label>
        •Guide to writing your personal statement (opens in a new window) <br /> should help you complete this section.<br />
        •We strongly recommend you write the statement using a word-processor and <br />paste it in to your application.<br />
        •You can type your statement directly into the box or edit a statement you have pasted in.<br />
        </label>
        <textarea value={value} onChange={handleChange} /><br />
        <b>You have used {charCount} of 4000 characters</b><br />

    </div>
    </Sidebar>
  );
}

export default PersonalStatement;
