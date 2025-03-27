import './index.css'

export default function LoadingPage() {
    return (
        <div className="loading">
            <div className="loader">
                <div className="loader__inner"></div>
                <div className="loader__orbit">
                    <div className="loader__dot"></div>
                    <div className="loader__dot"></div>
                    <div className="loader__dot"></div>
                    <div className="loader__dot"></div>
                </div>
            </div>
            <div className="loading__text">Payment in progress...</div>
            <div className="text-two">please do not leave the page</div>
            <div className="text-three">After payment is completed, you will be automatically redirected to the home page</div>
        </div>
    )
}