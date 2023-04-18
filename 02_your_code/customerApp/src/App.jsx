import SettingsUser from "./pages/SettingsUser";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/:id" element={<SettingsUser />} />
      </Routes>
    </div>
  );
}

export default App;
