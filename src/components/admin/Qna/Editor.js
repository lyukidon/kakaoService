import React, { useEffect, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Warning({ setWarn, setToggleId, setToggleData, setChkEditor }) {
    return (
        <div className="warning">
            <div className="title">에디터를 닫으시겠습니까</div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setWarn(false);
                        setChkEditor(false);
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
    const [chkEditor, setChkEditor] = useState(false);
    const [editorData, setEditorData] = useState("");
    const answerRef = useRef(null);

    const titleRef = useRef(null);

    useEffect(() => {
        if (answerRef.current !== null) {
            answerRef.current.innerHTML = toggleData.answer;
        }
    }, [chkEditor]);
    return (
        <>
            {!chkEditor && toggleData.answer === "" && (
                <div className="editorComponent answerRequired">
                    <button type="button" onClick={() => setChkEditor(true)}>
                        답변 해주세요
                    </button>
                </div>
            )}
            {!chkEditor && toggleData.answer !== "" && (
                <div className="editorComponent">
                    <div>
                        <div className="answerTitle">
                            <div>답변</div>
                            <div>
                                <button
                                    type="button"
                                    title="편집하기"
                                    onClick={() => {
                                        setChkEditor(true);
                                    }}
                                >
                                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                    편집하기
                                </button>
                            </div>
                        </div>
                        <hr />
                        <div ref={answerRef} />
                    </div>
                </div>
            )}
            {chkEditor && (
                <div className="editorComponent">
                    <div className="titleBox">
                        <div>제목: {toggleData.title}</div>
                        <div>
                            <button
                                type="button"
                                className="cancel"
                                onClick={() => {
                                    setWarn(!warn);
                                }}
                            >
                                <FontAwesomeIcon icon="fa-solid fa-x" /> 닫기
                            </button>
                            <button
                                type="button"
                                className={`answer ${editorData === "" && "disabled"}`}
                                disabled={editorData === "" ? true : false}
                                title={editorData === "" ? "답변을 입력해주세요" : ""}
                                onClick={() => {
                                    setToggleData({
                                        ...toggleData,
                                        answer: editorData,
                                    });
                                    setChkEditor(false);
                                }}
                            >
                                <FontAwesomeIcon icon="fa-solid fa-paper-plane" />{" "}
                                답변하기
                            </button>
                            {warn && (
                                <Warning
                                    setWarn={setWarn}
                                    setToggleId={setToggleId}
                                    setToggleData={setToggleData}
                                    setChkEditor={setChkEditor}
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
            )}
        </>
    );
}

export default Editor;
