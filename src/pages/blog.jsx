import posts from '../data/posts'
import PostCard from '../components/PostCard'


export default function Blog() {
return (
<section>
<h2>全部文章</h2>
<div className="grid">
{posts.map(p => <PostCard key={p.slug} post={p} />)}
</div>
</section>
)
}