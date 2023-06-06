import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import PostsPage from './Pages/PostsPage'
import UserPage from './Pages/UserPage'

const App = () => {
   return (
      <div className="w-full h-screen">
         <Header />
         <main className="container mx-auto px-10 pt-24">
            <Routes>
               <Route path="/" element={<div className="w-100 w-full">Aaa</div>}></Route>
               <Route path="/posts" element={<PostsPage />}></Route>
               <Route path="/about" element={<div className="w-100 w-full">About</div>}></Route>
               <Route path="users">
                  <Route path=":userId" element={<UserPage />} />
               </Route>
               <Route path="*" element={<div className="bg-black w-100 w-full text-white">404</div>}></Route>
            </Routes>
         </main>
         <Footer />
      </div>
   )
}
export default App
