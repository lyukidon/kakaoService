import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Index({ articleId, setArticleId, singleArti }) {
    const titleRef = useRef(null);
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current && titleRef.current) {
            console.log(titleRef.current.value);
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <div className={articleId !== -1 ? "editor" : "editor center"}>
            {articleId === -1 && (
                <div className="request">
                    <strong>도움말을 선택해주세요</strong>
                </div>
            )}
            {articleId !== -1 && (
                <>
                    <div className="content">
                        <div>제목</div>
                        <input
                            type="text"
                            placeholder="제목을 입력해주세요"
                            ref={titleRef}
                            value={singleArti.content}
                        />
                    </div>
                    <div className="explain">
                        <div>내용</div>
                        <Editor
                            apiKey="hfwmexaein3epohgzx9107h3evusuan35khip2qzgwwo0n1m"
                            onInit={(evt, editor) =>
                                (editorRef.current = editor)
                            }
                            initialValue={singleArti.explain}
                            init={{
                                selector: "textarea",
                                placeholder: "내용",
                                resize: "both",
                                plugins: [
                                    "advlist",
                                    "autolink",
                                    "autoresize",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "preview",
                                    "help",
                                    "wordcount",
                                ],
                                min_height: 500,
                                toolbar:
                                    "undo redo | blocks | " +
                                    "bold italic forecolor | alignleft aligncenter " +
                                    "alignright alignjustify | bullist numlist outdent indent | " +
                                    "removeformat | help",
                                content_style:
                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px;}",
                            }}
                        />
                        <button type="button" onClick={log}>
                            <FontAwesomeIcon
                                icon="fa-solid fa-floppy-disk"
                                size="lg"
                            />
                            저장하기
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Index;
