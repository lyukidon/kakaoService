import React from "react";

function Category({
    data,
    dataName,
    changeOption,
    optionValue,
    addOption,
    option,
    removeOption,
}) {
    return (
        <div className="categorySelectBox">
            <div>
                <select name={dataName} id="">
                    {data.map((c) => (
                        <option
                            key={c.content}
                            id={`${dataName}_id`}
                            value={c[`${dataName}_id`]}
                            onClick={changeOption}
                        >
                            {c.content}
                        </option>
                    ))}
                </select>
                <button type="button" name={dataName} onClick={removeOption}>
                    삭제
                </button>
            </div>
            <div>
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
        </div>
    );
}

export default Category;
