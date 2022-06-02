import React, { useEffect, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Editor({ toggleId, setToggleId, toggleData, setToggleData }) {
    const [editorData, setEditorData] = useState("");
    const titleRef = useRef(null);
    useEffect(() => {
        if (titleRef.current !== null) {
            titleRef.current.value = `답변: [ ${toggleData.title} ]`;
        }
    }, [toggleData]);
    return (
        <div className="editorComponent">
            <div className="titleBox">
                <div>제목:</div>
                <input
                    type="text"
                    placeholder="제목을 입력해주세요"
                    ref={titleRef}
                />
                <div>
                    <button
                        type="button"
                        onClick={() => {
                            setToggleId(-1);
                            setToggleData({
                                id: 0,
                                title: "",
                                content: "",
                                status: false,
                                answer: "",
                            });
                        }}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-x" />
                        취소하기
                    </button>
                    <button
                        type="button"
                        disabled={editorData === "" ? true : false}
                        onClick={() => {
                            console.log(editorData);
                            setToggleData({
                                ...toggleData,
                                answer: editorData,
                            });
                        }}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                        답변하기
                    </button>
                </div>
            </div>
            <CKEditor
                editor={ClassicEditor}
                config={{ placeholder: "답변을 입력해주세요" }}
                data={toggleData.answer ? toggleData.answer : ""}
                onChange={(evt, editor) => {
                    setEditorData(editor.getData());
                }}
            />
        </div>
    );
}

export default Editor;
