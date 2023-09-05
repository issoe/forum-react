import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/css/index.css';

import ForumPage from './pages/ForumPage';
import CommentPage from './pages/CommentPage';
import ChatPage from './pages/ChatPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/comment' element={<ChatPage />} />
      <Route path='/forum' element={<ForumPage />} />
      <Route path='/' element={<CommentPage />} />
    </ Routes>
  </BrowserRouter>
);