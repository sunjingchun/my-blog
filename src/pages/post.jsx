import { useParams, Link } from 'react-router-dom'
import posts from '../data/posts'


export default function Post() {
const { slug } = useParams()
const post = posts.find(p => p.slug === slug)


if (!post) {
return (
<section>
<h2>未找到该文章</h2>
<Link className="btn" to="/blog">返回列表</Link>
</section>
)
}


return (
<article className="post">
<h1>{post.title}</h1>
<p className="muted">{post.date} · {post.tags.join(' / ')}</p>
<div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
<Link className="btn" to="/blog">← 返回文章列表</Link>
</article>
)
}