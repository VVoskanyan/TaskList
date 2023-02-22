import {Routes, Route } from 'react-router-dom';
import { Task } from './Pages/Task/Task';
import { Main } from './Pages/Main/Main';

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route  path="/details/:id" element={<Task/>}/>
        </Routes>
    </div>
  );
}

export default App;
