import { FC, useState } from 'react'
import { useAddNewCommentMutation, useGetCommentsByPostIdQuery } from '../Redux/api'
import { Comment } from './Comment'
import { IComment } from '../Interfaces/IComment'
type PropsType = {
   postId: number
}
export const Comments: FC<PropsType> = ({ postId }) => {
   const { data: commentsData } = useGetCommentsByPostIdQuery(postId)
   const [comments, setComments] = useState(commentsData ? commentsData.comments : [])
   const [addComment, { data }] = useAddNewCommentMutation()
   const [newCommentText, setNewCommentText] = useState('')
   useState()
   console.log(data)

   const addNewComment = async () => {
      if (newCommentText) {
         const body = {
            body: newCommentText,
            postId,
            userId: 5,
         }
         await addComment(body).unwrap()
         data && setComments([...comments, data])
      }
   }
   return (
      <div>
         <input
            prefix={'123'}
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            className="text-violet-600 placeholder:text-violet-600 p-2 focus:border-none"
            placeholder="Search post"
         />
         <button onClick={addNewComment}>Add</button>
         {comments.map((comment: IComment) => (
            <Comment key={comment.id} comment={comment} />
         ))}
      </div>
   )
}
