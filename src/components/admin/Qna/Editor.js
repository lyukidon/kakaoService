import React, { useEffect, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Warning({ setWarn, setToggleId, setToggleData }) {
    return (
        <div>
            <div className="title">취소 하시겠습니까</div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setWarn(false);
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
                    예
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setWarn(false);
                    }}
                >
                    아니오
                </button>
            </div>
        </div>
    );
}

function Editor({ toggleId, setToggleId, toggleData, setToggleData }) {
    const [warn, setWarn] = useState(false);
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
                            setWarn(true);
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
                    {warn && (
                        <Warning
                            setWarn={setWarn}
                            setToggleId={setToggleId}
                            setToggleData={setToggleData}
                        />
                    )}
                </div>
            </div>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    placeholder: "답변을 입력해주세요",
                }}
                data={toggleData.answer ? toggleData.answer : ""}
                onChange={(evt, editor) => {
                    setEditorData(editor.getData());
                }}
            />
        </div>
    );
}

export default Editor;
