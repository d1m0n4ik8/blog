import { NavLink } from 'react-router-dom'
import { IComment } from '../Interfaces/IComment'
import { useGetUserByIdQuery } from '../Redux/api'
import { FC } from 'react'

type PropsType = {
   comment: IComment
}

export const Comment: FC<PropsType> = ({ comment }) => {
   const { data: user, isLoading } = useGetUserByIdQuery(comment.user.id)
   return isLoading ? (
      <></>
   ) : (
      <div>
         <NavLink to={'/users/' + comment.user.id} className="flex align-middle border-b-2 pb-2">
            <img src={user?.image} alt="user" className="rounded-full w-12" />
            <div className="flex align-middle items-center text-lg">
               @{user?.username} : {comment.body}
            </div>
         </NavLink>
      </div>
   )
}
