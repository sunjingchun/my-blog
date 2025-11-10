import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'


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