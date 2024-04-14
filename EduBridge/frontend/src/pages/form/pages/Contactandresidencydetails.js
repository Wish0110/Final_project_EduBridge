import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Contactandresidencydetails = () => {

  const [contactDetails, setContactDetails] = useState({
    mobileNumber: '',
    email: '',
    addressType: 'Non-UK address',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    addressLine4: '',
    country: 'Srilanka',
    nominatedAccess: false,
    nomineeName: '',
    nomineeRelation: '',
    nomineeAddressSame: true,
    nomineeHomeAddress: '',
    nomineeAddressType: '',
    nomineeResidentialCategory: '',
  });
  
  const handleInputChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (e) => {
    setContactDetails({
      ...contactDetails,
      nominatedAccess: e.target.value === 'Yes',
    });
  };

  const handleCheckboxChange = (e) => {
    setContactDetails({
      ...contactDetails,
      nomineeAddressSame: e.target.checked,
    });
  };

  return (
    <Sidebar>
        <form>
      <h2>Contact details</h2>
      <label>
        Mobile telephone number:
        <select name="mobileNumber" value={contactDetails.mobileNumber} onChange={handleInputChange}>
          <option value="+94">Srilanka (+94)</option>
          <option value="other">Other (Please specify)</option>
          
        </select>
      </label>
      <label>
        Email address:
        <input type="email" name="email" value={contactDetails.email} onChange={handleInputChange} />
      </label>
      <h2>Postal address</h2>
      <label>
        Address type:
        <select name="addressType" value={contactDetails.addressType} onChange={handleInputChange}>
          <option value="Non-UK address">Non-UK address</option>
          <option value="UK address">UK address</option>
        </select>
      </label>
      <label>
        Address line 1:
        <input type="text" name="addressLine1" value={contactDetails.addressLine1} onChange={handleInputChange} />
      </label>
      <label>
        Address line 2:
        <input type="text" name="addressLine2" value={contactDetails.addressLine2} onChange={handleInputChange} />
      </label>
      <label>
        Address line 3:
        <input type="text" name="addressLine3" value={contactDetails.addressLine3} onChange={handleInputChange} />
      </label>
      <label>
        Address line 4:
        <input type="text" name="addressLine4" value={contactDetails.addressLine4} onChange={handleInputChange} />
      </label>
      <label>
        Country:
        <select name="country" value={contactDetails.country} onChange={handleInputChange}>
          <option value="Srilanka">Srilanka</option>
          {/* Add other countries here */}
        </select>
      </label>
      <h2>Nominated access</h2>
      <p>Do you want someone else to be able to act, or speak on your behalf, about your application? e.g. A parent, teacher, other relative or guardian. If you are using an agent, you can choose to enter their details.</p>
      <p>You're able to enter details of someone you’re happy to help manage your application - this is called nominated access.</p>
      <label>
        <input type="radio" name="nominatedAccess" value="Yes" checked={contactDetails.nominatedAccess} onChange={handleRadioChange} />
        Yes
      </label>
      <label>
        <input type="radio" name="nominatedAccess" value="No" checked={!contactDetails.nominatedAccess} onChange={handleRadioChange} />
        No
      </label>
      {contactDetails.nominatedAccess && (
        <>
          <label>
            Full name of nominee:
            <input type="text" name="nomineeName" value={contactDetails.nomineeName} onChange={handleInputChange} />
          </label>
          <label>
            How you know your nominee:
            <input type="text" name="nomineeRelation" value={contactDetails.nomineeRelation} onChange={handleInputChange} />
          </label>
          <label>
            Residency details:
            <p>Is your home address the same as your postal address?</p>
            <label>
              <input type="checkbox" name="nomineeAddressSame" checked={contactDetails.nomineeAddressSame} onChange={handleCheckboxChange} />
              Yes
            </label>
          </label>
          {!contactDetails.nomineeAddressSame && (
            <>
              <label>
                Nominee's address line 1:
                <input type="text" name="nomineeAddressLine1" value={contactDetails.nomineeAddressLine1} onChange={handleInputChange} />
              </label>
              <label>
                Nominee's address line 2:
                <input type="text" name="nomineeAddressLine2" value={contactDetails.nomineeAddressLine2} onChange={handleInputChange} />
              </label>
              <label>
                Nominee's address line 3:
                <input type="text" name="nomineeAddressLine3" value={contactDetails.nomineeAddressLine3} onChange={handleInputChange} />
              </label>
              <label>
                Nominee's address line 4:
                <input type="text" name="nomineeAddressLine4" value={contactDetails.nomineeAddressLine4} onChange={handleInputChange} />
              </label>
            </>
          )}
        </>
      )}
      <button type="submit">Save and continue</button>
    </form>
    </Sidebar>
  );
  
}

export default Contactandresidencydetails;