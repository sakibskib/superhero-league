import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateForm from './components/CreateForm';
import CrewmateList from './components/CrewmateList';
import CrewmateDetail from './components/CrewmateDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CrewmateList />} />
        <Route path="/create" element={<CreateForm />} />
        <Route path="/crewmate/:id" element={<CrewmateDetail />} />
      </Routes>
    </Router>
  );
}
