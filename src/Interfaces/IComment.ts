export interface IComment {
   id: number
   body: string
   postId: number
   user: {
      id: number
      username: string
   }
}

export interface ICommentData {
   comments: IComment[]
   total: number
   skip: number
   limit: number
}
