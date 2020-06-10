import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Loading = () => {
    return (
        <div className="col-12">
            <FontAwesomeIcon icon={['fas','spinner']}
                             pulse={true}
                             size={'6x'}
                             color={'primary'}
            />
            <p>Loading...</p>
        </div>
    );
}