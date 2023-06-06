import { IComment } from '../Interfaces/IComment'
import { useGetUserByIdQuery } from '../Redux/api'

type comment = {
   comment: IComment
}

export const Comment = ({ comment }: comment) => {
   const { data: user, isLoading } = useGetUserByIdQuery(comment.user.id)
   return isLoading ? (
      <></>
   ) : (
      <div>
         <div className="flex align-middle border-b-2 pb-2">
            <img src={user?.image} alt="user" className="rounded-full w-12" />
            <div className="flex align-middle items-center text-lg">
               @{user?.username} : {comment.body}
            </div>
         </div>
      </div>
   )
}
