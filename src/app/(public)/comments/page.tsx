import React from 'react';
import {IComment} from "@/app/models/IComment";
import {placeHolderService} from "@/app/services/api.service";
import Link from "next/link";

const CommentsPage = async () => {
    const comments:IComment[] = await placeHolderService.comments.getAllComments()
    return (
        <div>
            {comments.map((comment:IComment) =><div><Link href={'/comments/'+comment.id}>{comment.name}</Link></div>)}
        </div>
    );
};

export default CommentsPage;


