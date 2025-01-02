import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import './BestRepos.css'
import { FaCode, FaRegStar } from "react-icons/fa"
import { FaBookBookmark, FaCodeFork } from "react-icons/fa6"
import LoadingSpinner from "./LoadingSpinner"

interface Repos {
    id: number,
    html_url: string,
    name: string,
    language: string,
    stargazers_count:number,
    forks:number,
}
function BestRepos() {
    const { login } = useParams()
    const [repos, setRepos] = useState<Repos[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchRepos = async () => {
            if (login) {
                try {
                    const res = await fetch(`https://api.github.com/users/${login}/repos`)
                    const data = await res.json()
                    console.log(data)
                    setRepos(data)
                } catch (error) {
                    console.error("Error fetching repos:", error)
                }finally{
                    setIsLoading(false)
                }
            }
        }
        fetchRepos()
    }, [login])

    return (
        <div>
            <div className="reposContainer">
                <Link className="backbtn" to={"/"}>
                    ← back
                </Link>
                <div className="title">Best Repositories from {login}</div>
                {isLoading === true? <LoadingSpinner/> : repos.length > 0 ? (
                    repos.map((repo) => (
                        <div key={repo.id} className="repos">
                            <h2>{repo.name}</h2>
                            <p><FaCode /> {repo.language}</p>
                            <div className="numberContainer">
                                <div className="stars">
                                    <FaRegStar /> {repo.stargazers_count}
                                </div>
                                <div className="forks">
                                    <FaCodeFork/>{repo.forks}
                                </div>
                            </div>
                            <Link to={repo.html_url} target="blank">
                                <FaBookBookmark /> Check Code
                            </Link>
                        </div>
                    ))
                ) : (<p>No repositories found</p>)}
            </div>
        </div>
    )
}

export default BestRepos