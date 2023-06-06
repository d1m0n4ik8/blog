import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <div className="w-full h-16 flex justify-between items-center bg-green-400 fixed px-4">
         <Link to="/">Logo</Link>
         <nav className="space-x-5">
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
         </nav>
      </div>
   )
}
export default Header
