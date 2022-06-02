import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Editor({ toggleId, setToggleId, toggleData, setToggleData }) {
    return (
        <div className="editorComponent">
            {toggleId !== -1 && (
                <>
                    <div className="titleBox">
                        <div>제목:</div>
                        
                            <input type="text" />
                        
                    </div>
                    <CKEditor
                        editor={ClassicEditor}
                        config={{ placeholder: "답변을 입력해주세요" }}
                        data={toggleData.content}
                    />
                </>
            )}
        </div>
    );
}

export default Editor;
