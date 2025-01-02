import { MdLocationPin } from "react-icons/md"
import { UserProps } from "../types/UserInterface"
import { Link } from "react-router-dom"
import './UserStyle.css'


function User({login,avatar_url,followers, following,location,name,bio, isInitial}:UserProps) {
  
    return (
    <div className="user">

        <div className="TopStars">{isInitial && 'Github Star'}</div>

        {name &&<h2>{name}</h2>}

        <img src={avatar_url} alt={login} />
        
        <h3>Username: {login}</h3>

        <p className="location"><MdLocationPin/>{location? 
        <span>{location}</span>: 'unknown'}</p>
        
        <p>{bio}</p>

        <div className="stats">

            <div>
                <p>Followers:</p>
                <p className="numbers">{followers}</p>
            </div>

            <div>
                <p>Following:</p>
                <p className="numbers">{following}</p>
            </div>

        </div>

        <Link to={`/repos/${login}`}>
            Repositories
        </Link>

    </div>
  )

}

export default User