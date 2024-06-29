import './App.css';
import Main from './Main'
import Final from './Final'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
