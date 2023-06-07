import { FC, useCallback, useState } from 'react'
import Loader from '../Components/Loader'
import { useGetAllPostsQuery } from '../Redux/api'
import { PostPage } from './PostPage'
import Pagination from '../Components/Pagination'
const PostsPage: FC = () => {
   const [currentPage, setCurrentPage] = useState(1)
   const [limit, setLimit] = useState(5)
   const [skip, setSkip] = useState(0)
   const { data, isLoading } = useGetAllPostsQuery({ skip, limit })
   const posts = data?.posts

   const changePage = useCallback(
      (currentPage: number) => {
         setCurrentPage(currentPage)
         setSkip(currentPage * limit)
         setLimit(5)
      },
      [limit]
   )
   return (
      <>
         {isLoading ? (
            <Loader />
         ) : posts ? (
            posts.map((post) => <PostPage post={post} key={post.id} />)
         ) : (
            <div>empty</div>
         )}
         <Pagination currentPage={currentPage} changePage={changePage} limit={limit} total={data ? data.total : 0} />
      </>
   )
}
export default PostsPage
