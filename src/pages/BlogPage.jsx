import React from 'react';
import Blog from '../components/Blog';
import posts from '../data/posts';
export default function BlogPage(){
return <main className="pt-28"><Blog posts={posts} /></main>
}