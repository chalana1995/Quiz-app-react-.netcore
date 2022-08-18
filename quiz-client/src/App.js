import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Authenticate from './components/Authenticate';
import Layout from './components/Layout';
import Login from './components/Login';
import Question from './components/Question';
import Result from './components/Result'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={Authenticate} />
        <Route path="/" element={<Layout />}>
          <Route path="/quiz" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
