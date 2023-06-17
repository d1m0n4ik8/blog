import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <div className="w-full h-16 flex justify-between items-center bg-black bg-opacity-50 fixed px-8 shadow-lg">
         <Link className="hover:text-violet-600 text-3xl transition-all" to="/">
            <img
               className="w-24"
               src="https://www.pngplay.com/wp-content/uploads/7/Blogging-PNG-Images-HD.png"
               alt="logo"
            />
         </Link>
         <nav className="space-x-5">
            <Link className="hover:text-violet-600 text-lg transition-all" to="/posts">
               Posts
            </Link>
            <Link className="hover:text-violet-600 text-lg transition-all" to="/users">
               Users
            </Link>
            <Link className="hover:text-violet-600 text-lg transition-all" to="/about">
               About
            </Link>
         </nav>
      </div>
   )
}
export default Header
