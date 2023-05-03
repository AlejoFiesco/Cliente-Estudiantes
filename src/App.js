import './App.css';
import { Route } from 'wouter'
import Home from './pages/Home';
import { StudentProvider } from './context/StudentContext';
import CreateStudent from './pages/CreateStudent';

function App() {
  return (
    <>
        <Route path='/'><Home /></Route>
        <Route path='/addStudent'><CreateStudent /></Route>
        <Route path='/ver/:id'><CreateStudent /></Route>
    </>
  );
}

export default App;
