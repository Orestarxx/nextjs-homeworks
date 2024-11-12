import {baseURL, endsPoints} from "@/app/urls/urls";
import {IPost} from "@/app/models/IPost";
import {IComment} from "@/app/models/IComment";
import {IUser} from "@/app/models/IUser";

export const placeHolderService = {
    users: {
        getAllUsers: async (): Promise<IUser[]> => {
            return await fetch(baseURL + endsPoints.users).then(response => response.json())
        },
        getSingleUser: async (userID: string) => {
            return await fetch(`${baseURL}${endsPoints.users}/${userID}`).then(response => response.json())
        }
    },
    posts: {
        getAllPosts: async (): Promise<IPost[]> => {
            return await fetch(baseURL + endsPoints.posts).then(response => response.json())
        },
        getSinglePost: async (postID: string): Promise<IPost> => {
            return await fetch(`${baseURL}${endsPoints.posts}/${postID}`).then(response => response.json())
        }
    },
    comments: {
        getAllComments: async (): Promise<IComment[]> => {
            return await fetch(baseURL + endsPoints.comments).then(response => response.json())
        },
        getSingleComment: async (commentID: string): Promise<IComment> => {
            return await fetch(`${baseURL}${endsPoints.comments}/${commentID}`).then(response => response.json())
        }
    }
}