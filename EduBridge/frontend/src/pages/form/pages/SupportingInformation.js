import React from 'react';
import Sidebar from '../components/Sidebar';

const SupportingInformation = () => {
  return (
    <Sidebar>
    <div>
    <form>
      <label>
        Have you ever lived or worked in the EU (excluding the UK), European Economic Area (EEA) or Switzerland?
        <select>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="dontKnow">Don't know</option>
          <option value="preferNotToSay">Prefer not to say</option>
        </select>
      </label>
      <br />
      <label>
        Do you have a parent, step parent, spouse or civil partner who is an EU (excluding the UK), EEA or Swiss national?
        <select>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="dontKnow">Don't know</option>
          <option value="preferNotToSay">Prefer not to say</option>
        </select>
      </label>
      <br />
      <label>
        <input type="checkbox" />
        Mark this section as complete
      </label>
      <br />
      <button type="button">Save this section</button>
    </form>
    </div>
    </Sidebar>
  );
}

export default SupportingInformation;
