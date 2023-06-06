import { IPost } from '../Interfaces/IPost'
import { useGetCommentsByPostIdQuery, useGetUserByIdQuery } from '../Redux/api'
import { Comment } from '../Components/Comment'
type post = {
   post: IPost
}

export const PostPage = ({ post }: post) => {
   const { data: user, isLoading } = useGetUserByIdQuery(post.userId)
   const { data: commentsData } = useGetCommentsByPostIdQuery(post.id)
   const comments = commentsData?.comments
   console.log(user)
   return isLoading ? (
      <div></div>
   ) : (
      <div className="border-2 rounded-lg shadow-lg p-4 mb-3">
         <div className="flex align-middle border-b-2 pb-2">
            <img src={user?.image} alt="user" className="rounded-full w-12" />
            <div className="flex align-middle items-center text-lg">@{user?.username}</div>
         </div>
         <div className="font-bold text-lg">{post.title}</div>
         <div>{post.body}</div>
         <div className="flex space-x-3">
            {post.tags.map((tag) => (
               <div key={tag} className="rounded-lg bg-blue-300 p-1">
                  #{tag}
               </div>
            ))}
         </div>
         <div>Likes:{post.reactions}</div>
         <div>
            Comments:
            {comments?.map((comment) => (
               <Comment key={comment.id} comment={comment} />
            ))}
         </div>
      </div>
   )
}
