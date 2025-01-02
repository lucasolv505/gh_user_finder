import { useState, KeyboardEvent } from "react"
import {BsSearch} from "react-icons/bs"
import './SearchStyle.css'

interface SearchProps{
  loadUser: (userName:string)=>void
}

function Search({loadUser}: SearchProps) {
  const [userName,setUserName] = useState('')

  function handleKeyDown (e:KeyboardEvent<HTMLInputElement>){
    if(e.key === 'Enter'){
      loadUser(userName)
    }
  }


  return (
    <div className="search">
      <h2>Search a user:</h2>
      <p>Discover his best repositories</p>

      <div className="searchContainer">
        <input type="text" placeholder="Type in the username" onChange={(e)=> setUserName(e.target.value)} onKeyDown={handleKeyDown}/>

        <button onClick={()=>loadUser(userName)}><BsSearch className="searchIcon"/></button>
      </div>
        

    </div>
  )
}

export default Search