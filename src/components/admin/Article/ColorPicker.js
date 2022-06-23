import React, { useState } from "react";
import { SketchPicker } from "react-color";

function ColorPicker({ selectedCategory, setSelectedCategory }) {
    const [hex, setHex] = useState({
        background: "",
    });
    const handleHex = (color) => {
        setHex({
            background: color.hex,
        });
        const { background } = hex;
        // setSelectedCategory({
        //     ...selectedCategory,
        //     background,
        // });
    };
    return (
        <div className="ColorPicker treeChangeTitle">
            <input
                type="text"
                value={hex.background}
                placeholder="색깔 변경"
                className="changeHex"
                onChange={(evt) => {
                    setHex({ ...hex, background: evt.target.value });
                }}
            />
            <button
                type="button"
                onClick={() => {
                    setSelectedCategory({
                        ...selectedCategory,
                        background: hex.background,
                    });
                }}
            >
                변경
            </button>
            <div className="colorPicker">
                <SketchPicker color={hex.background} onChange={handleHex} />
            </div>
        </div>
    );
}

export default ColorPicker;
