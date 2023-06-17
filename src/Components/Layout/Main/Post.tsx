import { IPost } from '../../../Interfaces/IPost'
import { useGetUserByIdQuery } from '../../../Redux/api'
import { NavLink } from 'react-router-dom'
import { FC, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { AiOutlineComment } from 'react-icons/ai'
import { Comments } from './CommentsList'
import Modal from '../../UIComponents/Modal'
type PropsType = {
   post: IPost
}

export const Post: FC<PropsType> = ({ post }) => {
   const { data: user, isLoading } = useGetUserByIdQuery(post.userId)
   const [isLiked, setIsLiked] = useState(false)
   const toggleIsLiked = (): void => {
      setIsLiked((prev) => !prev)
   }

   return isLoading ? (
      <></>
   ) : (
      <div className="border-2 border-violet-500 rounded-lg shadow-md shadow-violet-400 p-4 mb-3">
         <NavLink to={'/users/' + post.userId} className="flex align-middle border-b-2 border-violet-700 pb-3 mb-4">
            <img src={user?.image} alt="user" className="rounded-full w-12 ring-1 ring-violet-700 mr-3" />
            <div className="flex align-middle items-center text-lg">@{user?.username}</div>
         </NavLink>
         <div className="font-bold text-xl pb-2 text-center">{post.title}</div>
         <div className="text-lg text-justify indent-6 pb-4">{post.body}</div>
         <div className="flex space-x-4 pb-4">
            {post.tags.map((tag) => (
               <div key={tag} className="rounded-lg bg-violet-600 p-1">
                  #{tag}
               </div>
            ))}
         </div>
         <div className="flex p-2 items-start text-violet-700">
            <span className="text-2xl mr-2">{isLiked ? post.reactions + 1 : post.reactions}</span>
            {isLiked ? (
               <AiFillHeart className="w-8 h-8 mr-4 cursor-pointer" onClick={toggleIsLiked} />
            ) : (
               <AiOutlineHeart className="w-8 h-8 mr-4 cursor-pointer" onClick={toggleIsLiked} />
            )}

            <Modal button={<AiOutlineComment className="w-8 h-8" />}>
               <Comments postId={post.id} />
            </Modal>
         </div>
      </div>
   )
}
