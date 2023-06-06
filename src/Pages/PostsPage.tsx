import { FC } from 'react'
import Loader from '../Components/Loader'
import { useGetAllPostsQuery } from '../Redux/api'
import { PostPage } from './PostPage'
const PostsPage: FC = () => {
   const { data, isLoading } = useGetAllPostsQuery()
   const posts = data?.posts

   return (
      <>
         {isLoading ? (
            <Loader />
         ) : posts ? (
            posts.map((post) => <PostPage post={post} key={post.id} />)
         ) : (
            <div>empty</div>
         )}
      </>
   )
}
export default PostsPage
