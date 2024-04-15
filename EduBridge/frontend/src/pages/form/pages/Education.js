import React from 'react';
import Sidebar from '../components/Sidebar';

const Education = () => {
  return (
      <Sidebar>
        <form>
        <label>
        <b>Please state the highest level of qualification you expect to have before you start your course</b><br />
        </label>

        <select>
          <option value="Below honours degree level qualifications">Below honours degree level qualifications</option>
          <option value="Honours degree level or above qualifications">Honours degree level or above qualifications</option>
          <option value="I will have no qualifications">I will have no qualifications</option>
        </select>
       
        <br />
        <label>
          <input type="checkbox" />
          Mark this section as complete
        </label>
        <br />
        <button type="button">Save this section</button>
      </form>
      </Sidebar>
  );
}

export default Education;
