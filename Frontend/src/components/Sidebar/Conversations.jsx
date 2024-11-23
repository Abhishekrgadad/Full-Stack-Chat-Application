import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        <Conversation /> 
        <Conversation />
        <Conversation />       
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  )
}

export default Conversations


//STARTER CODE FOR CONVERSATIONS WITH ALL CONTAINERS
// import React from 'react'
// import { FaSearch } from "react-icons/fa";
// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search....' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-sky-500 text-white'><FaSearch className="w-6 h-6 outline-none"/></button>
//     </form>
//   )
// };

// export default SearchInput;