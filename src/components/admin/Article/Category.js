import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ toggleSetting, onToggleSetting }) => {
    return (
        <div
            className="settingCategory"
            role="button"
            tabIndex={0}
            onClick={() => {
                onToggleSetting(false);
            }}
        >
            <div className="settingModal">
                <button
                    type="button"
                    onClick={() => {
                        onToggleSetting(false);
                    }}
                >
                    <FontAwesomeIcon icon="fa-solid fa-x" />
                </button>
            </div>
        </div>
    );
};
