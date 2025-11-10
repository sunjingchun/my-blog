import { Link, NavLink } from 'react-router-dom'


export default function Header() {
return (
<header className="site-header">
<div className="container row">
<Link to="/" className="brand">SoftBlog</Link>
<nav className="nav">
<NavLink to="/" end>首页</NavLink>
<NavLink to="/blog">文章</NavLink>
</nav>
</div>
</header>
)
}