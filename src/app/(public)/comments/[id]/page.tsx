import React from 'react';
import {IComment} from "@/app/models/IComment";
import {placeHolderService} from "@/app/services/api.service";

type Params = {
    id: string
}
const CommentPage = async ({params}: { params: Params }) => {
    const comment: IComment = await placeHolderService.comments.getSingleComment(params.id);
    return (
        <div>
            <div>{comment.name}</div>
            <div>{comment.postId}</div>
            <div>{comment.id}</div>
            <div>{comment.body}</div>
        </div>
    );
};

export default CommentPage;