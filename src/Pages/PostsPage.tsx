import { FC, useCallback, useState } from 'react'
import Loader from '../Components/Loader'
import { useGetAllPostsQuery } from '../Redux/api'
import { Post } from '../Components/Post'
import Pagination from '../Components/Pagination'
import { FaSearch } from 'react-icons/fa'

const PostsPage: FC = () => {
   const [currentPage, setCurrentPage] = useState(1)
   const [limit, setLimit] = useState(5)
   const [skip, setSkip] = useState(0)
   const [searchString, setSearchString] = useState('')
   const { data, isLoading } = useGetAllPostsQuery({ skip, limit, searchString })
   const posts = data?.posts

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
               placeholder="Search post"
            />
         </div>
         {isLoading ? (
            <Loader />
         ) : posts?.length ? (
            <div>
               {posts.map((post) => (
                  <Post post={post} key={post.id} />
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
export default PostsPage
