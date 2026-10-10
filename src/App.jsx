import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Phase 1/Landingpage";
import Login from "./Phase 2/login";
import Signup from "./Phase 2/signup";
import Dashboard from "./Phase 3/dashboard";
import Profile from "./Phase 4/profile";
import Lessons from "./Phase 6/Lessons";
import SpeakingPractice from "./Phase 7/SpeakingPractice";
import Recommendations from "./Phase 8/Recommendations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/practice" element={<SpeakingPractice />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;