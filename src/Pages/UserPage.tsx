import { useParams } from 'react-router-dom'
import { useGetUserByIdQuery } from '../Redux/api'
import Loader from '../Components/UIComponents/Loader'

const UserPage = () => {
   const { userId } = useParams()
   const { data: user, isLoading } = useGetUserByIdQuery(userId ? Number(userId) : 0)
   return isLoading ? (
      <Loader />
   ) : (
      <div className="flex justify-between">
         <div className="flex w-full">
            <div className="w-1/3">
               <img
                  className="w-3/4 h-auto object-contain ring-2 ring-violet-600 rounded-full"
                  src={user?.image}
                  alt="user"
               />
            </div>
            <div className="w-2/3 text-3xl p-4">
               <div className="text-center">User info</div>
               <div className="mb-3">@{user?.username}</div>
               <div className="mb-3">{user?.firstName}</div>
               <div className="mb-3">{user?.lastName}</div>
               <div className="mb-3">{user?.maidenName}</div>
               <div className="mb-3">{user?.company.name}</div>
               <div className="mb-3">{user?.phone}</div>
            </div>
         </div>
      </div>
   )
}
export default UserPage
