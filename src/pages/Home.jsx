import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <section>
      <h1>写点温柔而清晰的文字</h1>
      <p className="lead">一个以柔和配色与留白为核心的极简 Blog 模板。</p>
      <div className="cta">
        <Link className="btn" to="/blog">开始阅读</Link>
        <a className="btn ghost" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <img className="hero" src="https://picsum.photos/1200/360?blur=2" alt="soft hero" />
    </section>
  )
}