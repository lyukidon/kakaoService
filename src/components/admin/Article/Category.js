import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@nosferatu500/react-sortable-tree/style.css";
import FileExplorerTheme from "@nosferatu500/theme-file-explorer";
import SortableTree, { addNodeUnderParent, getNodeAtPath, removeNodeAtPath, TextField } from "@nosferatu500/react-sortable-tree";

function Tree() {
    const [state, setState] = useState({
        treeData: [
            {
                title: "카카오톡",
                children: [
                    {
                        title: "일반",
                        children: [
                            { title: "안드로이드" },
                            { title: "iOS" },
                            { title: "Windows" },
                        ],
                    },
                    {
                        title: "가입/변경/탈퇴",
                        children: [
                            { title: "안드로이드" },
                            { title: "iOS" },
                            { title: "안드로이드(원스토어)" },
                        ],
                    },
                ],
            },
            {
                title: "카카오계정",
                children: [
                    { title: "로그인", children: [{ title: "공통" }] },
                    {
                        title: "이메일/비밀번호 찾기",
                        children: [{ title: "공통" }],
                    },
                ],
            },
            { title: "카카오 이모티콘" },
        ],
    });

    const removeNode = (rowInfo) => {
        let { node, treeIndex, path } = rowInfo;
        removeNodeAtPath({
            treeData: state.treeData,
            path: path, // You can use path from here
            getNodeKey: ({ node: TreeNode, treeIndex: number }) => {
                console.log(number);
                return number;
            },
            ignoreCollapsed: false,
        });
    };
    return (
        <div style={{ height: 500 }}>
            <SortableTree
                treeData={state.treeData}
                onChange={(treeData) => setState({ treeData })}
                onVisibilityToggle={{ expanded: true }}
                // theme={FileExplorerTheme}
                generateNodeProps={(rowInfo) => ({
                    buttons: [
                        <button
                            onClick={(evt) => {
                                console.log("click");
                                removeNode(rowInfo);
                            }}
                        >
                            X
                        </button>,
                    ],
                })}
            />
        </div>
    );
}

export default ({ onToggleSetting }) => {
    return (
        <div className="settingCategory" role="button" tabIndex={0}>
            <div className="settingModal">
                <div className="modalBtn">
                    <div>카테고리 설정</div>
                    <button
                        type="button"
                        onClick={() => {
                            onToggleSetting(false);
                        }}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-x" />
                    </button>
                </div>
                <div className="treeBox">
                    <Tree />
                    <div>배지 색상</div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
