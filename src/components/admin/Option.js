import React, { useState } from "react";
// import PropTypes from "prop-types";

function Option({
    index,
    data,
    dataName,
    changeOption,
    optionValue,
    addOption,
    option,
    removeOption,
}) {
    return (
        <div className="optionBox">
            <div className="optionIndex">{index}</div>
            <select name={dataName} id="">
                {data.map((c) => {
                    return (
                        <option
                            key={c.id}
                            id={`${dataName}_id`}
                            value={c[`${dataName}_id`]}
                            onClick={changeOption}
                        >
                            {c.content}
                        </option>
                    );
                })}
            </select>
            <button type="button" name={dataName} onClick={removeOption}>
                삭제
            </button>
            <input
                type="text"
                name={dataName}
                placeholder="입력해주세요"
                onChange={optionValue}
                value={option[`${dataName}`]}
            />
            <button type="button" name={dataName} onClick={addOption}>
                추가
            </button>
        </div>
    );
}

export default Option;
