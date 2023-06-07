import { IPost } from '../Interfaces/IPost'
import { useGetCommentsByPostIdQuery, useGetUserByIdQuery } from '../Redux/api'
import { Comment } from '../Components/Comment'
import { NavLink } from 'react-router-dom'
import { FC, useState } from 'react'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { AiOutlineComment } from 'react-icons/ai'
type PropsType = {
   post: IPost
}

export const PostPage: FC<PropsType> = ({ post }) => {
   const { data: user, isLoading } = useGetUserByIdQuery(post.userId)
   const { data: commentsData } = useGetCommentsByPostIdQuery(post.id)
   const [isLiked, setIsLiked] = useState(false)
   const comments = commentsData?.comments
   const toggleIsLiked = (): void => {
      setIsLiked((prev) => !prev)
   }
   return isLoading ? (
      <div></div>
   ) : (
      <div className="border-2 rounded-lg shadow-lg p-4 mb-3">
         <NavLink to={'/users/' + post.userId} className="flex align-middle border-b-2 pb-2">
            <img src={user?.image} alt="user" className="rounded-full w-12" />
            <div className="flex align-middle items-center text-lg">@{user?.username}</div>
         </NavLink>
         <div className="font-bold text-lg">{post.title}</div>
         <div>{post.body}</div>
         <div className="flex space-x-3">
            {post.tags.map((tag) => (
               <div key={tag} className="rounded-lg bg-blue-300 p-1">
                  #{tag}
               </div>
            ))}
         </div>
         <div className="flex p-1 items-center space-x-1">
            <span className="text-lg">{isLiked ? post.reactions + 1 : post.reactions}</span>
            {isLiked ? (
               <FcLike className="w-8 h-8" onClick={toggleIsLiked} />
            ) : (
               <FcLikePlaceholder className="w-8 h-8" onClick={toggleIsLiked} />
            )}

            <AiOutlineComment className="w-8 h-8" />
         </div>
         {/* <div>
            {comments?.map((comment) => (
               <Comment key={comment.id} comment={comment} />
            ))}
         </div> */}
      </div>
   )
}
