import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<Home />} />

        {/* <Route path="*" element={<Error404 />} /> */}

      </Routes>
    </>
  )
}

export default App
