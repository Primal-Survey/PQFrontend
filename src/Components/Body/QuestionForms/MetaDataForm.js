import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

function MetaDataForm(surveyInfo) {
  useEffect(() => {
    //auto initializes Materialize's JS
    M.AutoInit();
  }, []);

  const handleChange = surveyInfo.surveyInfo.handleChange;
  return (
    <Fade>
      <Container>
        <form className="" action="#">
          <div className="input-field col s12">
            <select onChange={handleChange} name="region">
              <option value="" defaultValue></option>
              <option value="Northeast">Northeast</option>
              <option value="Midwest">Midwest</option>

              <option value="South">South</option>
              <option value="West">West</option>
            </select>
            <label>Please indicate your census region</label>
          </div>
          <div className="input-field col s12">
            <select onChange={handleChange} name="gender">
              <option value="" defaultValue></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to answer">Prefer not to answer</option>
            </select>
            <label>Please indicate your gender.</label>
          </div>
          <div className="input-field col s12">
            <select onChange={handleChange} name="age">
              <option value="" defaultValue></option>
              <option value="Under 21">Under 21</option>
              <option value="(21-24)">21-24</option>
              <option value="(25-29)">25-29</option>
              <option value="(30-34)">30-34</option>
              <option value="(35-39)">35-39</option>
              <option value="(40-44)">40-44</option>
              <option value="(45-49)">45-49</option>
              <option value="(50-54)">50-54</option>
              <option value="(55-59)">55-59</option>
              <option value="(60-64)">60-64</option>
              <option value="(65-69)">65-69</option>
              <option value="(70-79)">70-79</option>
            </select>
            <label>What is your age?</label>
          </div>
          <div className="input-field col s12">
            <select onChange={handleChange} name="income">
              <option value="" defaultValue></option>
              <option value="$0 - $25,000">$0 - $25,000</option>
              <option value="$25,001 - $50,000">$25,001 - $50,000</option>
              <option value="$50,001 - $75,000">$50,001 - $75,000</option>
              <option value="$75,001 - $100,000">$75,001 - $100,000</option>
              <option value="$100,001 - $125,000">$100,001 - $125,000</option>
              <option value="$125,001 - $150,000">$125,001 - $150,000</option>
              <option value="$150,001 - $175,000">$150,001 - $175,000</option>
              <option value="$175,001 - $200,000">$175,001 - $200,000</option>
              <option value="$200,001 or above">$200,001 or above</option>
            </select>
            <label>
              {" "}
              Please indicate your approximate personal annual income.
            </label>
          </div>
          <div className="input-field col s12">
            <select onChange={handleChange} name="education">
              <option value="" defaultValue></option>
              <option value="High school diploma or equivalent">
                High school diploma or equivalent
              </option>
              <option value="Some college but no degree">
                Some college but no degree
              </option>
              <option value="Bachelor degree">Bachelor degree</option>
              <option value="Master's degree">Master's degree</option>
              <option value="Professional degree (MD, JD, etc.)">
                Professional degree (MD, JD, etc.)
              </option>
              <option value="Doctoral degree">Doctoral degree</option>
            </select>
            <label>What is the highest degree you have received? </label>
          </div>
          <div className="input-field col s12">
            <select onChange={handleChange} name="industry">
              <option value="" defaultValue></option>
              <option value="Advertising / Marketing">
                Advertising / Marketing
              </option>
              <option value="Aerospace / Aviation (including Defense)">
                Aerospace / Aviation (including Defense)
              </option>
              <option value="Agriculture / Forestry / Fishing">
                Agriculture / Forestry / Fishing
              </option>
              <option value="Automotive">Automotive</option>
              <option value="Business support / Logistics">
                Business support / Logistics
              </option>
              <option value="Construction / Home improvement">
                Construction / Home improvement
              </option>
              <option value="Consulting">Consulting</option>
              <option value="Education">Education</option>
              <option value="Engineering / Architecture">
                Engineering / Architecture
              </option>
              <option value="Entertainment / Recreation">
                Entertainment / Recreation
              </option>
              <option value="Finance / Financial services">
                Finance / Financial services
              </option>
              <option value="Food & Beverages">Food & Beverages</option>
              <option value="Government / Military">
                Government / Military
              </option>
              <option value="Healthcare / Pharmaceuticals">
                Healthcare / Pharmaceuticals
              </option>
              <option value="Information technology / Telecommunications">
                Information technology / Telecommunications
              </option>
              <option value="Insurance">Insurance</option>
              <option value="Legal services">Legal services</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Nonprofit">Nonprofit</option>
              <option value="Retail / Consumer durables">
                Retail / Consumer durables
              </option>
              <option value="Real estate">Real estate</option>
              <option value="Transportation & delivery">
                Transportation & delivery
              </option>
              <option value="Utilities / Energy / Extraction">
                Utilities / Energy / Extraction
              </option>
              <option value="Other">Other</option>
            </select>
            <label>
              In what industry do you primarily work (even if you are not
              currently working due to the Coronavirus)?
            </label>
          </div>
          <div className="input-field col s12">
            <select onChange={handleChange} name="workRole">
              <option value="" defaultValue></option>
              <option value="Owner/ Founder/ Partner/ Entrepreneur">
                Owner/ Founder/ Partner/ Entrepreneur
              </option>
              <option value="CEO / President / General manager">
                CEO / President / General manager
              </option>
              <option value="Vice president / Assistant vice president">
                Vice president / Assistant vice president
              </option>
              <option value="CFO / Treasurer / Controller">
                CFO / Treasurer / Controller
              </option>
              <option value="Director / Assistant director6Manager / Assistant manager">
                Director / Assistant director6Manager / Assistant manager
              </option>
              <option value="Supervisor">Supervisor</option>
              <option value="Professional individual contributor (salaried)">
                Professional individual contributor (salaried)
              </option>
              <option value="Front-line worker, individual contributor (hourly)">
                Front-line worker, individual contributor (hourly)
              </option>
              <option value="Other">Other</option>
            </select>
            <label>My work role is best described as? Select one.</label>
          </div>
          <div className="input-field col s12">
            <select onChange={handleChange} name="employment">
              <option value="" defaultValue></option>
              <option value="I am currently employed full-time">
                I am currently employed full-time
              </option>
              <option value="I was unemployed on March 15, 2020, and I am currently unemployed">
                I was unemployed on March 15, 2020, and I am currently
                unemployed
              </option>
              <option value="I was employed full-time on March 15, 2020, but due to the Coronavirus I am currently unemployed">
                I was employed full-time on March 15, 2020, but due to the
                Coronavirus I am currently unemployed
              </option>
            </select>
            <label>
              This question is about your current employment---meaning right
              now/today. Select the one answer that best describes your
              situation.
            </label>
          </div>
          <div className="input-field col s12">
            <select onChange={handleChange} name="entrepreneur">
              <option value="" defaultValue></option>
              <option value="Yes, and I think it was a great success">
                Yes, and I think it was a great success
              </option>
              <option value="Yes, and I think it was a failure">
                Yes, and I think it was a failure
              </option>
              <option value="No">No</option>
            </select>
            <label>
              {" "}
              Have you ever launched your own entrepreneurial venture?
            </label>
          </div>
          <div className="input-field col s12">
            <select onChange={handleChange} name="workSite">
              <option value="" defaultValue></option>
              <option value="Cubicle">Cubicle</option>
              <option value="Closed door office">Closed door office</option>
              <option value="Open office">Open office</option>
              <option value="Shared co-working space">
                Shared co-working space
              </option>
              <option value="Home office">Home office</option>
              <option value="Nomadic (frequently changing locations)">
                Nomadic (frequently changing locations)
              </option>
            </select>
            <label>
              {" "}
              If given the choice of where to work, where do you feel most
              productive and comfortable?
            </label>
          </div>
          <div className="input-field col s12">
            <select onChange={handleChange} name="covidReact">
              <option value="" defaultValue></option>
              <option value="Fearful">Fearful</option>
              <option value="No big deal">No big deal</option>
              <option value="Distracted">Distracted</option>
              <option value="Risk averse">Risk averse</option>
              <option value="Motivated to reevaluate my professional priorities">
                Motivated to reevaluate my professional priorities
              </option>
              <option value="Grateful to spend time with my family">
                Grateful to spend time with my family
              </option>
            </select>
            <label>
              {" "}
              My reaction to the Coronavirus/COVID-19 outbreak is best described
              as?
            </label>
          </div>
        </form>
      </Container>
    </Fade>
  );
}

const Container = styled.div`
  /* padding-bottom: 25px; */
  max-height: 75vh;
`;
export default MetaDataForm;
