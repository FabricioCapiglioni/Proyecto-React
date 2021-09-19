import './Loading.css';


const Loading = () => {

    return (
        <div>
                <h1 className="loadTitle">Loading</h1>
                <div className="spinner-grow spinner-grow-xl m-1 text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow spinner-grow-xl m-1 text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow spinner-grow-xl m-1 text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
    )


}


export default Loading;