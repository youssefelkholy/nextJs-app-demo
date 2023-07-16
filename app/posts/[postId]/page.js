import PostDetailsPage from "@/app/components/postItem";
import { Suspense } from "react";

export default async function postDetailsPage({ params }) {
    const loadingJsx = (
        <div>
            <h1>Waiting For Post Details.....</h1>
        </div>
    )
    const postId = params.postId;
    return (
        <>
            <h1>Post Details</h1>
            <Suspense fallback={loadingJsx}>
                <PostDetailsPage postId={postId} />
            </Suspense>
        </>
    );
}