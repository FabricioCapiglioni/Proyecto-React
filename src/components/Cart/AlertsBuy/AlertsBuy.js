import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 


export const Processing = () => {

    return (
        <div class="d-flex justify-content-center">
            <div class="alert row col-sm-6 alert-primary alert-dismissible fade show" role="alert">
                <h3><div class="spinner-border text-primary" role="status"></div> Processing Order</h3>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}


export const Confirmation = () => {

    return (
        <div class="d-flex justify-content-center">
            <div class="alert row col-sm-6 alert-primary alert-dismissible fade show" role="alert">
                <h3><FontAwesomeIcon className="confirmIcon" icon={faCheck}/> Your purchase was successful</h3>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
);
}


export const Error = () => {

    return (
        <div class="d-flex justify-content-center">
            <div class="alert row col-sm-6 alert-primary alert-dismissible fade show" role="alert">
                <h3><FontAwesomeIcon className="confirmIcon" icon={faCheck}/> Something went wrong, try again</h3>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}

  