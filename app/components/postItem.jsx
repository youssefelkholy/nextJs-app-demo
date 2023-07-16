export default async function PostDetailsPage({ postId }) {
    await new Promise((resolve) => {
        setTimeout(() => resolve(),2000); // simulate delay in 2s
    })
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            next: {
                revalidate: 120,
            },
        }
    );
    const post = await res.json();
    return (
            <div className="post-details">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
    );
}