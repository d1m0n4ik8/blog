import { FaSearch } from 'react-icons/fa'
import Loader from '../Components/Loader'
import User from '../Components/User'
import { useGetAllUsersQuery } from '../Redux/api'
import Pagination from '../Components/Pagination'
import { useCallback, useState } from 'react'

const UsersPage = () => {
   const [currentPage, setCurrentPage] = useState(1)
   const [limit, setLimit] = useState(5)
   const [skip, setSkip] = useState(0)
   const [searchString, setSearchString] = useState('')
   const { data, isLoading } = useGetAllUsersQuery({ skip, limit, searchString })

   const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchString(e.target.value)
      setCurrentPage(1)
      setSkip(0)
   }

   const changePage = useCallback(
      (currentPage: number) => {
         setCurrentPage(currentPage)
         setSkip((currentPage - 1) * limit)
         setLimit(5)
      },
      [limit]
   )
   return (
      <>
         <div className="flex max-w-fit border-2 mb-4 bg-violet-700 border-violet-700 rounded-lg text-violet-700 items-center overflow-hidden">
            <FaSearch className="text-white w-8 " />
            <input
               prefix={'123'}
               value={searchString}
               onChange={onSearch}
               className="text-violet-600 placeholder:text-violet-600 p-2 focus:border-none"
               placeholder="Search user"
            />
         </div>
         {isLoading ? (
            <Loader />
         ) : data?.users.length ? (
            <div>
               {data?.users.map((user) => (
                  <User user={user} />
               ))}
            </div>
         ) : (
            <div className="flex justify-center">
               <img className="w-1/3" src="https://hajde.media/img/no-results.png" alt="empty" />
            </div>
         )}
         <Pagination currentPage={currentPage} changePage={changePage} limit={limit} total={data ? data.total : 0} />
      </>
   )
}
export default UsersPage
