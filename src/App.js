import Login from "./components/Form/Login"
import './App.css';
import Header from "./components/Main/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from "./components/Form/Loading";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
          <Route path="/" element={<Header />} /> 
               <Route path="/" element={<LoadingPage/>}/>
              <Route path="/login" element={<Login />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
