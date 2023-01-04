import Link from "next/link";
import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
    const router = useRouter();

    const handelBack=()=>{
        router.push("/posts")
    }
    return (
        <div>
            <div className="card w-2/4 mx-auto my-10 bg-primary text-primary-content">
                <div className="card-body">
                    <p>PostId: {post.id}</p>
                    <h2 className="card-title">Title : {post.title}</h2>
                    <p>Body : {post.body}</p>
                    <div className="card-actions justify-center">
                        <Link href={"/posts"}>
                            <button className="btn btn-sm rounded">Back</button>
                        </Link>
                        <button onClick={handelBack} className="btn btn-sm rounded">Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;


export const getStaticProps = async (context) => {
    const { params } = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    const data = await res.json();
    return {
        props: {
            post: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const datas = await res.json();

    const paths = datas.map(data => {
        return {
            params: {
                postId: `${data.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}


