import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import SwapPage from "./pages/SwapPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import CommonLayout from "./components/layout/CommonLayout";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <CommonLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/swap" element={<SwapPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            {/* Add more routes here */}
          </Routes>
        </CommonLayout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
