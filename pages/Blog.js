import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            <h1>Bl0g</h1>
            <Link href="/">Home</Link>
            <br />
            <br />
            <Image src="/img/jhankar.jpg" width={400} height={400}></Image>
        </div>
    );
};

export default Blog;