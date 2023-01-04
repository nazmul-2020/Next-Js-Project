import Post from "../../Post/Post";

const Posts = ({ posts }) => {
  
    return (
        <div className="mx-10">
            <h1 className="my-10 text-center text-2xl font-bold underline hover:text-green-400">All Pasts : {posts.length}</h1>
            <div className="grid lg:grid-cols-3 gap-4  md:grid-cols-2  grid-cols-1">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;




export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=15")
    const data = await res.json();
    return {
        props: {
            posts: data
        }
    }

}

