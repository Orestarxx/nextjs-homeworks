import React from 'react';
import {placeHolderService} from "@/app/services/api.service";
import {IPost} from "@/app/models/IPost";

type Params = {
    id: string
}
const PostPage = async ({params}: { params: Params }) => {
    const post: IPost = await placeHolderService.posts.getSinglePost(params.id)
    return (
        <div>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.userId}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default PostPage;