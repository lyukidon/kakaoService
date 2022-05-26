import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Preview from "./Preview";

function Warning({ setCancel, setActivateEditor }) {
    return (
        <div className="warning">
            <div className="question">변경을 취소 하시겠습니까?</div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setActivateEditor(false);
                        setCancel(false);
                    }}
                >
                    예
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setCancel(false);
                    }}
                >
                    아니오
                </button>
            </div>
        </div>
    );
}

function Index({
    activateEditor,
    setActivateEditor,
    singleArti,
    preview,
    setPreview,
    setArticleId,
    handleFunc,
}) {
    const [data, setData] = useState("");
    const [cancel, setCancel] = useState(false);

    return (
        <div className={activateEditor || preview ? "editor" : "editor center"}>
            {!activateEditor && !preview && (
                <div className="request">
                    <strong>도움말을 선택해주세요</strong>
                </div>
            )}
            {activateEditor && (
                <>
                    <div className="content">
                        <div>제목: </div>
                        <input
                            type="text"
                            placeholder="제목을 입력해주세요"
                            value={singleArti && singleArti.content}
                        />
                    </div>
                    <div className="explain">
                        <CKEditor
                            editor={ClassicEditor}
                            data={singleArti ? singleArti.explain : data}
                            onChange={(event, editor) => {
                                setData(editor.getData());
                            }}
                        />

                        <div className="buttonBox">
                            <button
                                type="button"
                                onClick={() => {
                                    setCancel(true);
                                }}
                            >
                                <FontAwesomeIcon
                                    className="x-icon"
                                    icon="fa-solid fa-x"
                                    size="lg"
                                    color="red"
                                />
                                취소하기
                            </button>
                            <button
                                type="button"
                                className={!data && "not-allowed"}
                                onClick={() =>
                                    data
                                        ? console.log(data)
                                        : alert("내용을 수정해주세요")
                                }
                                disabled={data ? false : true}
                            >
                                <FontAwesomeIcon
                                    className="floppy-disk-icon"
                                    icon="fa-solid fa-floppy-disk"
                                    size="lg"
                                    color="#0096F8"
                                />
                                저장하기
                            </button>
                            {cancel && (
                                <Warning
                                    setActivateEditor={setActivateEditor}
                                    setCancel={setCancel}
                                />
                            )}
                        </div>
                    </div>
                </>
            )}
            {preview && (
                <Preview
                    handleFunc={handleFunc}
                    setPreview={setPreview}
                    setActivateEditor={setActivateEditor}
                    setArticleId={setArticleId}
                    singleArti={singleArti}
                />
            )}
        </div>
    );
}

export default Index;
