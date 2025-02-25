
export default function BlogPage({params}: any) {
    const postId = params.postId;

    return <div>
        Blog Page:  {postId}
    </div>
}