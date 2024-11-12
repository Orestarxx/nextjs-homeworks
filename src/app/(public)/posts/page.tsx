import React from 'react';
import {IPost} from "@/app/models/IPost";
import Link from "next/link";
import {placeHolderService} from "@/app/services/api.service";

const PostsPage = async () => {
    const posts: IPost[] = await placeHolderService.posts.getAllPosts()
    return (
        <div>
            {posts.map((post: IPost) => <div key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></div>)}
        </div>
    );
};

export default PostsPage;