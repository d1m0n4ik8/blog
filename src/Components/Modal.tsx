import { FC, ReactNode, useState } from 'react'

type Props = {
   button?: ReactNode
   children: ReactNode
}

const Modal: FC<Props> = ({ button, children }) => {
   const [isOpen, setIsOpen] = useState(false)
   const toggleIsOpen = () => {
      setIsOpen((prev) => !prev)
   }
   return (
      <>
         <button onClick={toggleIsOpen}>{button ? button : <>Modal</>}</button>
         {isOpen && (
            <div
               className="fixed w-full h-full bg-gray-950 bg-opacity-50 top-0 left-0 flex justify-center items-center cursor-pointer"
               onClick={toggleIsOpen}>
               <div
                  className="bg-black bg-opacity-75 cursor-default w-3/4 h-3/4 rounded-2xl shadow-lg shadow-violet-600 p-8"
                  onClick={(e) => e.stopPropagation()}>
                  {children}
               </div>
            </div>
         )}
      </>
   )
}

export default Modal
