import React from 'react'
import { Link } from 'react-router-dom'


export default function PostCard({ post }) {
return (
<article className="card">
<h3 className="card-title">
<Link to={`/post/${post.slug}`}>{post.title}</Link>
</h3>
<p className="muted">{post.date} · {post.tags.join(' / ')}</p>
<p>{post.excerpt}</p>
<Link className="btn" to={`/post/${post.slug}`}>阅读全文</Link>
</article>
)
}