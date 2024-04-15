import React from 'react';
import Sidebar from '../components/Sidebar';

const FinanceAndFunding = () => {
  return (
    <Sidebar>
    <div>
      <form>
        <label>
        <b>What will be your main source of funding for your studies?</b><br />
        </label>
        <label>
        •Select an option from the drop-down list to tell us how you expect to pay for your tuition fees. <br />
        Most applicants from the UK, Channel Islands, Isle of Man, and those eligible EU students under <br />
        the EU Settlement Scheme will be in the category UK, ChI, loM, or EU student finance.<br />
        •This guidance has been created based on eligibility advice from the Student Loans Company, and <br />
        you should give your answer as guided. Universities and colleges are aware that EU applicants <br />
        will be selecting the UK, ChI, IoM or EU student finance option.<br />
        •If you require additional guidance, we recommend contacting the UK Council for International Student Affairs.
          <br />
        </label>

        <select>
          <option value="Private finance">Private finance</option>
          <option value="Research councils">Research councils</option>
          <option value="Other UK Govt award">Other UK Govt award</option>
          <option value="International agency">International agency</option>
        </select>
       
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

export default FinanceAndFunding;
