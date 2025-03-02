
export default function BlogPage({params}: any) {
    const postId = params.postId;

    return <div>
        <h1>header</h1>
        Blog Page:  {postId}
    </div>
}

//will do the req changes
