import { FC } from 'react'

type PropsType = {
   currentPage: number
   limit: number
   total: number
   changePage: (currentPage: number) => void
}
const Pagination: FC<PropsType> = ({ currentPage, total, changePage, limit }) => {
   const pagesAmount = Math.ceil(total / limit)
   let pages = []

   for (let i = 1; i <= pagesAmount; i++) {
      pages.push(i)
   }
   console.log(pages.length)

   let left = currentPage - 5 //19
   let right = currentPage + 5 //29
   if (left <= 0) right = right - left + 1
   if (pages.length < right) left -= right - pages.length
   return (
      <div className="flex justify-center">
         {pages
            .filter((p) => (p > left && p <= right) || p > pages.length - 2)
            .map((p) =>
               p === right && p < pages.length - 2 ? (
                  <button key={p} disabled className={`p-2 border-2 ml-2`} onClick={() => changePage(p)}>
                     ...
                  </button>
               ) : (
                  <button
                     key={p}
                     className={`p-2 border-2 ml-2 ${p === currentPage && 'bg-red-500'}`}
                     onClick={() => changePage(p)}>
                     {p}
                  </button>
               )
            )}
      </div>
   )
}
export default Pagination
