import './ErrorStyle.css'
import userNotFoundImg from'../../public/usernotfound.jpg'

interface ErrorProps {
  errorMsg: string
}

function Error({ errorMsg }: ErrorProps) {
  return (
    <div className='errorContainer'>
      <div>{errorMsg}</div>
      <img src={userNotFoundImg} alt="User not found" />
    </div>
  )
}

export default Error