import { useEffect, useState } from "react"
import Search from "../components/Search"
import { UserProps } from "../types/UserInterface"
import User from "../components/User"
import Error from "../components/Error"
import LoadingSpinner from "../components/LoadingSpinner"

function Home() {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [isInitial, setIsInital] = useState<boolean>(true)

  function handleNoUser(){
    const topUsers:string[] = ['sindresorhus','kamranahmedse','donnemartin','jwasham','996icu']
    const initial = topUsers[Math.floor(Math.random()*topUsers.length)]
    loadUser(initial)
    setIsInital(true)
  }

  const loadUser = async (userName: string) => {
    setError(false)
    setLoading(true)
    setIsInital(false)
    
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`)

      const data = await res.json()

      if (res.status === 404) {
        setError(true)
        setErrorMsg('There is no one around here, but you can try again')
        return
      }

      const { avatar_url, login, location, followers, following, name, bio } = data

      const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
        name,
        bio,
      }

      setUser(userData)
    }

    catch(error){
      setError(true)
      setErrorMsg("Something went wrong. Please try again.")
    }

    finally{
      setLoading(false)
    }
    
  }

  useEffect(()=>{
    handleNoUser()
  },[])

  return (
    <div>
      <Search loadUser={loadUser} />
      {loading && <LoadingSpinner />}
      {error ? <Error errorMsg={errorMsg} /> : user ? <User {...user} isInitial={isInitial} /> : null}
    </div>
  )
}

export default Home