import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Post from './pages/Post.jsx'


export default function App() {
return (
<div className="app">
<Header />
<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/blog" element={<Blog />} />
<Route path="/post/:slug" element={<Post />} />
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</main>
<Footer />
</div>
)
}