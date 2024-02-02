import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import Parent from "./Components/01_StateProps/Parent";
import Event from "./Components/02_EventHandling/event";
import ConditionalRendering from "./Components/03_ConditionalRendering/ConditionalRendering";
import State from "./Components/01_StateProps/State";
import ListAndKeys from "./Components/04_ListAndKeys/ListAndKeys";
import FormValidation from "./Components/05_FormValidation/FormValidation";
import I_useStateHooks from "./Components/06_ReactHooks/I_useStateHooks";
import II_useEffectHooks from "./Components/06_ReactHooks/II_useEffectHooks";
import III_useContextHooks from "./Components/06_ReactHooks/III_useContextHooks";
import IV_useContextHooks from "./Components/06_ReactHooks/IV_useContextHooks";
import Crud from "./Components/07_APIConsumption/ApiGet";
import ApiPosts from "./Components/07_APIConsumption/ApiPost";
import GetApi from "./Components/07_API_Practice/GetApi";
import PostApi from "./Components/07_API_Practice/PostApi";
import ApiPut from "./Components/07_APIConsumption/ApiPut";
import ApiDelete from "./Components/07_APIConsumption/ApiDelete";
import GetApiProduct from "./Components/GetApi/GetApiProduct";
import ApiGet from "./Components/07_APIConsumption/ApiGet";

const App = () => {
  return (
    <Router>
      <div>
        <h3>React Practice</h3>
        <nav>
          <ul>
            <li>
              <Link to="/state">01.State</Link>
            </li>
            <li>
              <Link to="/state-props">01.Props</Link>
            </li>
            <li>
              <Link to="/event">02.Event Handling</Link>
            </li>
            <li>
              <Link to="/conditional-rendering">03.Conditional Rendering</Link>
            </li>
            <li>
              <Link to="/list-keys">04.List and Keys</Link>
            </li>
            <li>
              <Link to="/form-validation">05.Form Validation</Link>
            </li>
            <li>
              <Link to="/use-state-hooks">06. I useState</Link>
            </li>
            <li>
              <Link to="/use-effect-hooks">06. II useEffect</Link>
            </li>
            <li>
              <Link to="/use-context-hooks">06. III useContext</Link>
            </li>
            <li>
              <Link to="/use-ref-hooks">06. IV useRef</Link>
            </li>
            <li>
              <Link to="/crud">07. APIConsumption Get</Link>
            </li>
            <li>
              <Link to="/post">07. APIConsumption Post</Link>
            </li>
            <li>
              <Link to="/put">07. APIConsumption Put</Link>
            </li>
            <li>
              <Link to="/delete">07. APIConsumption Delete</Link>
            </li>
            <li>
              <Link to="/product-api">Product Get Api</Link>
            </li>
            

            {/* API Practice section  */}
            <li>
              <Link to="/get-api">07_Get-API</Link>
            </li>
            <li>
              <Link to="/post-api">07_Post-API</Link>
            </li>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/state-props" element={<Parent />} />
          <Route path="/event" element={<Event />} />
          <Route
            path="/conditional-rendering"
            element={<ConditionalRendering />}
          />
          <Route path="/state" element={<State />} />
          <Route path="/list-keys" element={<ListAndKeys />} />
          <Route path="/form-validation" element={<FormValidation />} />
          <Route path="/use-state-hooks" element={<I_useStateHooks />} />
          <Route path="/use-effect-hooks" element={<II_useEffectHooks />} />
          <Route path="/use-context-hooks" element={<III_useContextHooks />} />
          <Route path="/use-ref-hooks" element={<IV_useContextHooks />} />
          <Route path="/crud" element={<ApiGet />} />
          <Route path="/post" element={<ApiPosts />} />
          <Route path="/put" element={<ApiPut />} />
          <Route path="/delete" element={<ApiDelete />} />
          <Route path="/product-api" element={<GetApiProduct />} />

          <Route path="/get-api" element={<GetApi />} />
          <Route path="/post-api" element={<PostApi />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
