import React, { useState } from "react";
import { ChromePicker } from "react-color";

function ColorPicker({ selectedCategory, setSelectedCategory }) {
    const [hex, setHex] = useState({
        background: "#ffffff",
    });
    const handleHex = (color) => {
        setHex({
            background: color.hex,
        });
        const { background } = hex;
        setSelectedCategory({
            ...selectedCategory,
            background,
        });
    };
    return (
        <div>
            <ChromePicker color={hex.background} onChange={handleHex} />
        </div>
    );
}

export default ColorPicker;
