import Head from "next/head";

const posts = [
    { title: "React Testing", excerpt: "Learn React Testing" },
    { title: "React With Tailwind", excerpt: "Learn React With Tailwind" },
];

export default function Home() {
    return (
        <div className="container mx-auto px-10 mb-8 bg-gray-300">
            <Head>
                <title>CMS Blog</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Head>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    {posts.map((post, index) => (
                        <>
                            <div>
                                {post.title}
                                {post.excerpt}
                            </div>
                        </>
                    ))}
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-8"></div>
                </div>
            </div>
        </div>
    );
}
