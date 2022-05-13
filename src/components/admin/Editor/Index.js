import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Index({ activateEditor, setActivateEdtior }) {
    const  titleRef = useRef(null)
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current && titleRef.current) {
            console.log(titleRef.current.value)
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <div className={activateEditor ? "editor" : "editor center"}>
            {!activateEditor && (
                <div className="request"><strong>도움말을 선택해주세요</strong></div>
            )}
            {activateEditor && (
                <>
                    <input type="text" placeholder="제목" ref={titleRef} />
                    <Editor
                        apiKey="hfwmexaein3epohgzx9107h3evusuan35khip2qzgwwo0n1m"
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        initialValue=""
                        init={{
                            selector:'textarea',
                            placeholder: '내용',
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
                </>
            )}
        </div>
    );
}

export default Index;
