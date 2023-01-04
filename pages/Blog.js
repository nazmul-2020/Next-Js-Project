import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = ({posts}) => {
    console.log(posts);

    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            <h1 className='text-center text-2xl underline hover:text-green-500 mt-10'>All  Bl0g : {posts.length}</h1>
            <Link href="/">Home</Link>
            <br />
            <br />
            <Image src="/img/jhankar.jpg" width={400} height={400}></Image>
        </div>
    );
};

export default Blog;


export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums?_limit=20")
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}