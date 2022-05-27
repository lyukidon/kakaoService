import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Preview from "./Preview";

function Warning({ setPreview, setCancel, setActivateEditor }) {
    return (
        <div className="warning">
            <div className="question">변경을 취소 하시겠습니까?</div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setPreview(true);
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
    ids,
    setIds,
    service,
    category,
    platform,
    article,
    setService,
    setCategory,
    setPlatform,
    setArticle,
    activateEditor,
    setActivateEditor,
    singleArti,
    preview,
    setPreview,
    articleId,
    setArticleId,
    handleFunc,
}) {
    const [data, setData] = useState("");
    const [cancel, setCancel] = useState(false);
    useEffect(() => {
        setData("");
    }, [activateEditor]);
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
                                onClick={() => console.log(data)}
                                disabled={!data ? true : false}
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
                                    setPreview={setPreview}
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
                    setIds={setIds}
                    service={service}
                    setService={setService}
                    category={category}
                    setCategory={setCategory}
                    platform={platform}
                    setPlatform={setPlatform}
                    article={article}
                    setArticle={setArticle}
                    handleFunc={handleFunc}
                    setPreview={setPreview}
                    setActivateEditor={setActivateEditor}
                    articleId={articleId}
                    setArticleId={setArticleId}
                    singleArti={singleArti}
                />
            )}
        </div>
    );
}

export default Index;
