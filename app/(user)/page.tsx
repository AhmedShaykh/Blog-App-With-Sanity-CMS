import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "@/Components/PreviewSuspense";
import PreviewBlogList from "@/Components/PreviewBlogList";
import BlogList from "@/Components/BlogList";

const query = groq`
    *[_type=="post"] {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

const page = async () => {
    if (previewData()) {
        return (
            <PreviewSuspense fallback={
                <div role={"status"}>
                    <p className="text-center text-lg animate-pulse text-[#09d9ac]">
                        Loading Preview Data...
                    </p>
                </div>
            }>
                <PreviewBlogList query={query} />
            </PreviewSuspense>
        );
    };

    const posts = await client.fetch(query);

    return <BlogList posts={posts} />
};

export default page;