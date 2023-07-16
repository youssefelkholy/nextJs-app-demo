import Link from "next/link"

export const metadata = {
    title: "articles page",
}

export default function articlesPage() {
    return (
        <div>
            <h1>articles page</h1>
            <Link href="/posts">
                <button>take me to the posts page</button>
            </Link>
        </div>
    )
}