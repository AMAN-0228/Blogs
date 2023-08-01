import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home/Home';
import Create from './Pages/create/Create';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Routes>  
          <Route  path='/' element={<Home/>}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/blog/:blogId' element={<BlogDetails />}/>
          <Route  path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
