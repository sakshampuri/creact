import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Loading = () => {
    return (
        <div className="col-12">
            <div className="offset-md-6">
                <FontAwesomeIcon icon={['fas','spinner']}
                                 pulse
                                 size={'6x'}
                                 color={'primary'}
                                 speed={'3x'}
                                 className={'text-primary'}
                />
                <h5>Loading...</h5>
            </div>
        </div>
    );
}