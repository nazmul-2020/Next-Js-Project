import Link from "next/link";

const Post = ({ post }) => {
    const { title, body } = post
    return (

        <div className="card w-96 rounded bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title mb-5 text-2xl font-bold">{title}</h2>
                <p className=''>{body}</p>
                <div className="card-actions justify-center">
                    <Link href={`/posts/${post.id}`}>
                        <button className="btn rounded-full">See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;