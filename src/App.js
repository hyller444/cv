import './App.css';
import { Form } from 'react-router-dom';
import Pdf from './component/pdf';
import PdfT from './component/PdfT';
import { useLocation,Route,BrowserRouter as Router ,Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Pdf/>}/>
          <Route path='/CVhome' element={<PdfT/>}/>
        </Routes>
      </Router> 
    </div>
  );
};
export default App;
