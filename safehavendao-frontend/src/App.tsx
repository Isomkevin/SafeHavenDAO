import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import CommonLayout from "./components/layout/CommonLayout";
// importing the several views";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import SwapPage from "./pages/SwapPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import AidDistributionPage from "./pages/AidDistributionPage";
import VotePage from "./pages/VotePage";
import TransactionPage from "./pages/TransactionPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <CommonLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/swap" element={<SwapPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/aid" element={<AidDistributionPage />} />
            <Route path="/vote" element={<VotePage />} />
            <Route path="/transactions" element={<TransactionPage />} />
            {/* Add more routes here */}
          </Routes>
        </CommonLayout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
