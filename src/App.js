import Login from "./components/Form/Login"
import './App.css';
import Header from "./components/Main/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from "./components/Form/Loading";
import Registration from "./components/Form/Registration";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
          <Route path="/" element={<Header />} /> 
               <Route path="/registration" element={<LoadingPage/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
