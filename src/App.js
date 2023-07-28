import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeadingTime from './pages/LeadingTime';
import ClassReview from './pages/ClassReview';
import FreeTrial from './pages/FreeTrial';
import PurchasePass from './pages/FreeTrial';
import ServiceCenter from './pages/ServiceCenter';
import Home from './pages/Home';
import Login from './pages/Login';
import JoinUs from './pages/JoinUs';
function App() {
  return (
   <Router>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/leadingTime" element={<LeadingTime/>}/>
      <Route path="/classReview" element={<ClassReview/>}/>
      <Route path="/freeTrial" element={<FreeTrial/>}/>
      <Route path="/purchasePass" element={<PurchasePass/>}/>
      <Route path="/serviceCenter" element={<ServiceCenter/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/joinUs" element={<JoinUs/>}/>
     </Routes>
   </Router>
  );
}

export default App;
