import React from 'react';
import Sidebar from '../components/Sidebar';

const EnglishLanguageSkills = () => {
  const [showFields, setShowFields] = React.useState(false);

  return (
    <Sidebar>
      <div>
        <form>
          <label>
          <b>English proficiency tests and exams are taken by students who don’t speak English as their first language. <br />
          Is English your first language?</b><br />
          </label>
          <label>
          This question is to find out whether you have taken an IELTS or TOEFL English <br/> proficiency test. The answer to this question is not passed on to your choices.<br />
          •If you click yes, you won’t be asked any additional questions and can mark this section <br/> as complete.<br/>
          •If you click no, and have taken English proficiency tests, you can add your certificate <br/> numbers and we’ll pass them on to your chosen universities and colleges when you <br/> submit your application.
          • If you click no and haven’t completed any tests, for example because Welsh is your <br/> first language, you can leave the remaining fields blank and then mark this section as <br/> complete.
            <br />
          </label>

          <label>
              <input type="radio" name="english" value="yes" onChange={() => setShowFields(false)} />
              Yes
          </label>
          <label>
              <input type="radio" name="english" value="no" onChange={() => setShowFields(true)} />
              No
          </label>

          {showFields && (
            <>
              <label>
                Test of English as a Foreign Language (TOEFL) Number:
                <input type="text" />
              </label>
              <label>
                International English Language Testing System (IELTS) TRF Number:
                <input type="text" />
              </label>
            </>
          )}
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

export default EnglishLanguageSkills;