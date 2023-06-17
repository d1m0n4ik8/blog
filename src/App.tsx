import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Layout/Footer/Footer'
import Header from './Components/Layout/Header/Header'
import PostsPage from './Pages/PostsPage'
import UserPage from './Pages/UserPage'
import Home from './Pages/Home'
import UsersPage from './Pages/UsersPage'
import About from './Pages/About'

const App = () => {
   return (
      <div className="flex flex-col min-h-screen bg-zinc-800 text-white">
         <Header />
         <main className="container flex-grow mx-auto pt-24 px-8 pb-8 lg:px-24 xl:px-60">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/posts" element={<PostsPage />} />
               <Route path="/about" element={<About />} />
               <Route path="/users" element={<UsersPage />} />
               <Route path="/users">
                  <Route path=":userId" element={<UserPage />} />
               </Route>
               <Route path="*" element={<div className="bg-black w-100 w-full text-white">404</div>} />
            </Routes>
         </main>
         <Footer />
      </div>
   )
}
export default App
