import React from 'react';

import AnimeDetails from './pages/animedetails';
import AnimeWatching from './pages/animewatching';
import Blog from './pages/blog';
import BlogDetails from './pages/blogdetails';
import Categories from './pages/categories';
import Home from './pages/Homepage';
import Main from './pages/main';
import Loginpage from './pages/Loginpage';
import Singup from './pages/singup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/animedetails' element={<AnimeDetails />} />
        <Route path='/animewatching' element={<AnimeWatching />} />
        <Route path='/blogdetails' element={<BlogDetails />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/main' element={<Main />} />
        <Route path='/singup' element={<Singup />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
