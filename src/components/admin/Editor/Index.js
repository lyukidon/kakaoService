import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Warning({ setCancel, setActivateEditor }) {
    return (
        <div className="warning">
            <div>변경을 취소 하시겠습니까?</div>
            <div>
                <button type="button" onClick={() => {
                    setActivateEditor(false);
                    setCancel(false)
                }}>
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
    articleId,
    setArticleId,
    singleArti,
}) {
    const [data, setData] = useState("");
    const [cancel, setCancel] = useState(false);

    return (
        <div className={activateEditor ? "editor" : "editor center"}>
            {!activateEditor && (
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
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                // console.log("Editor is ready to use!", editor);
                            }}
                            onChange={(event, editor) => {
                                setData(editor.getData());

                                // console.log({ event, editor, data });
                            }}
                            onBlur={(event, editor) => {
                                // console.log("Blur.", editor);
                            }}
                            onFocus={(event, editor) => {
                                // console.log("Focus.", editor);
                            }}
                        />

                        <div className="buttonBox">
                            <button
                                type="button"
                                onClick={() => {
                                    // setActivateEditor(false);
                                    setCancel(true)
                                }}
                            >
                                <FontAwesomeIcon
                                    icon="fa-solid fa-x"
                                    size="lg"
                                />
                                취소하기
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    data
                                        ? console.log(data)
                                        : alert("내용을 수정해주세요")
                                }
                            >
                                <FontAwesomeIcon
                                    icon="fa-solid fa-floppy-disk"
                                    size="lg"
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
        </div>
    );
}

export default Index;
