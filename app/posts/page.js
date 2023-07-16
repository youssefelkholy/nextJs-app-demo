import Link from "next/link";

export default async function postPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const postsJsx = posts.map((post) => {
        return (
            <Link href={`/posts/${post.id}`} className="post">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </Link>
        );
    })
    return (
        <div className="post-container">
            <h1>post page</h1>
            {postsJsx}
        </div>                  
    )
}