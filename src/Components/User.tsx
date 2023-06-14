import { FC } from 'react'
import { IUser } from '../Interfaces/IUser'
import { NavLink } from 'react-router-dom'

type PropsType = {
   user: IUser
}
const User: FC<PropsType> = ({ user }) => {
   return (
      <>
         <NavLink to={'/users/' + user.id} className="flex align-middle border-b-2 border-violet-700 pb-3 mb-4">
            <div className="flex items-center">
               <img src={user.image} alt="user" className="rounded-full w-14 ring-1 ring-violet-700 mr-3" />
            </div>
            <div className="flex align-center flex-col">
               <div className="font-bold text-xl">@{user.username}</div>
               <div className="text-lg pb-2">
                  {user.firstName} {user.lastName}
               </div>
            </div>
         </NavLink>
      </>
   )
}
export default User
