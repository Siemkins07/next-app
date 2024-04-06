export default function PostPage({params}) {
    return (
        <main>
            <h1>Single Post</h1>
            <p>{params.slug}</p>
        </main>
    )
}