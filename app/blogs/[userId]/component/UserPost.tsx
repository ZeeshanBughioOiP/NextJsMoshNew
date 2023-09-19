type Props = {
    promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
    const posts = await promise

    const content = posts.map(post => {
        return (
            <article key={post.id} className="my-5 max-w-xl mx-auto">
                <h2 className="font-bold text-2xl capitalize mb-2 text-orange-600">{post.title}</h2>
                <p>{post.body}</p>
            </article>
        )
    })

    return content
}