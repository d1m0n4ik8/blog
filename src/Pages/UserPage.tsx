import { useParams } from 'react-router-dom'
import { useGetUserByIdQuery } from '../Redux/api'
import Loader from '../Components/Loader'

const UserPage = () => {
   const { userId } = useParams()
   const { data: user, isLoading } = useGetUserByIdQuery(userId ? Number(userId) : 0)
   return isLoading ? (
      <Loader />
   ) : (
      <div>
         <img src={user?.image} alt="user" />
         <div>{user?.firstName}</div>
         <div>{user?.lastName}</div>
      </div>
   )
}
export default UserPage
