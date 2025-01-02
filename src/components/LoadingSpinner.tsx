import './LoadingSpinner.css'

function LoadingSpinner() {
    return (
        <div className="spinnerContainer">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingSpinner