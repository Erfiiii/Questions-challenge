export type User = {
    id: string,
    userName: string
    avatar: string
}

export type Question = {
    creator: User;
    id: string;
    title: string;
    description: string
    createdAt: Date,
    commentsCount: number
}

export type Comment = {
    creator: User;
    id: string;
    title: string;
    createdAt: Date;
    questionId: string;
    likes: number;
    dislikes: number;
}