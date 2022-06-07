import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ toggleSetting, onToggleSetting }) => {
    return (
        <div className="settingCategory">
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
