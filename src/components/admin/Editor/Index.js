import React, { useEffect, useState, useRef } from "react";
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

function Article({
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
    setSingleArti,
    preview,
    setPreview,
    articleId,
    setArticleId,
    handleFunc,
}) {
    const titleRef = useRef();
    const [titleData, setTitleData] = useState("");
    const [editorData, setEditorData] = useState("");
    const [cancel, setCancel] = useState(false);
    useEffect(() => {
        setEditorData("");
        if (titleRef.current){
            setTitleData(titleRef.current.value)
        }
    }, [activateEditor]);

    const onEdit = () => {
        if (titleData !== "" && editorData === "") {
            const tmp = article.map((c) => {
                if (c.article_id === articleId) {
                    c.content = titleData;
                }
                return c;
            });
            setArticle([...tmp]);
            setSingleArti({ ...singleArti, content: titleData });
        } else if (titleData === "" && editorData !== "") {
            const tmp = article.map((c) => {
                if (c.article_id === articleId) {
                    c.explain = editorData;
                }
                return c;
            });
            setArticle([...tmp]);
            setSingleArti({ ...singleArti, explain: editorData });
        } else {
            const tmp = article.map((c) => {
                if (c.article_id === articleId) {
                    c.content = titleData;
                    c.explain = editorData;
                }
                return c;
            });
            setArticle([...tmp]);
            setSingleArti({
                ...singleArti,
                content: titleData,
                explain: editorData,
            });
        }
        setActivateEditor(false);
        setPreview(true);
        setEditorData("");
        setTitleData("");
    };


    // 저장하기 버튼 마우스 오버
    const [mouseOver, setMouseOver] = useState("");
    useEffect(() => {
        if (singleArti) {
            if (titleData === "" ) {
                setMouseOver("제목을 입력해주세요");
            } else if (!editorData) {
                setMouseOver("내용을 변경(입력)해주세요");
            } else {
                setMouseOver("저장 가능");
            }
        }
    }, [editorData, titleData, singleArti]);
    return (
        <div className={activateEditor || preview ? "editor" : "editor center"}>
            {!activateEditor && !preview && (
                <div className="request">
                    <strong>도움말을 선택해주세요</strong>
                </div>
            )}
            {activateEditor && (
                <>
                    {console.log(titleData)}
                    {console.log(singleArti)}
                    {console.log(titleRef.current && titleRef.current.value)}
                    <div className="content">
                        <div>제목: </div>
                        <input
                            type="text"
                            placeholder="제목을 입력해주세요"
                            defaultValue={singleArti && singleArti.content}
                            ref={titleRef}
                            onChange={(event) => {
                                setTitleData(event.target.value);
                            }}
                        />
                    </div>
                    <div className="explain">
                        <CKEditor
                            editor={ClassicEditor}
                            data={singleArti ? singleArti.explain : editorData}
                            onChange={(event, editor) => {
                                setEditorData(editor.getData());
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
                                className={
                                    !editorData && !titleData && "not-allowed"
                                }
                                disabled={
                                    !editorData || !titleData ? true : false
                                }
                                onClick={() => {
                                    onEdit();
                                }}
                                title={mouseOver}
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

export default Article;
