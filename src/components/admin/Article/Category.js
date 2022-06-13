import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@nosferatu500/react-sortable-tree/style.css";
import FileExplorerTheme from "@nosferatu500/theme-file-explorer";
import SortableTree, {
    toggleExpandedForAll,
    getNodeAtPath,
    removeNodeAtPath,
    changeNodeAtPath,
    insertNode,
} from "@nosferatu500/react-sortable-tree";

class Tree extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: "",
            currentNode: {},
            selectCheck: false,
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
        };
    }

    expandAndCollapse = (expanded) => {
        this.setState((prev) => ({
            ...prev,
            treeData: toggleExpandedForAll({
                treeData: prev.treeData,
                expanded,
            }),
        }));
    };

    removeNode = (path) => {
        this.setState((prev) => ({
            treeData: removeNodeAtPath({
                treeData: prev.treeData,
                path,
                getNodeKey: ({ treeIndex }) => treeIndex,
            }),
        }));
    };

    insertNewNode = () => {
        this.setState((prev) => ({
            treeData: insertNode({
                treeData: prev.treeData,
                depth: 0,
                // minimumTreeIndex: prev.treeData.length,
                newNode: { title: "", children: [] },
                getNodeKey: ({ treeData }) => prev.treeData,
            }).treeData,
        }));
    };

    selectThis = (node, path) => {
        this.setState((prev) => ({
            currentNode: node,
            path,
        }));
    };

    selectCheck = (node, path, state) => {
        console.log(node, path, state);
        if (node.title === state.currentNode.title) {
            for (let i = 0; i < path.length; i++) {
                if (path[i] === state.path[i]) {
                    return true;
                }
            }
        }
        return false;
    };

    render() {
        const getNodeKey = ({ treeIndex }) => treeIndex;
        return (
            <>
                <div style={{ height: 800 }}>
                    <button
                        type="button"
                        onClick={() => {
                            this.expandAndCollapse(true);
                        }}
                    >
                        펼치기
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            this.expandAndCollapse(false);
                        }}
                    >
                        접기
                    </button>
                    <input
                        type="text"
                        placeholder="Search"
                        value={this.state.searchString}
                        onChange={(event) => {
                            this.setState({ searchString: event.target.value });
                        }}
                    />
                    <button
                        type="button"
                        onClick={(evt) => {
                            evt.preventDefault();
                            evt.stopPropagation();
                            this.insertNewNode();
                        }}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                        추가
                    </button>
                    <SortableTree
                        treeData={this.state.treeData}
                        searchQuery={this.state.searchString}
                        onChange={(treeData) => this.setState({ treeData })}
                        theme={FileExplorerTheme}
                        canDrag={false}
                        generateNodeProps={({ node, path }) => ({
                            title: (
                                <form
                                    onClick={() => this.selectThis(node, path)}
                                    style={
                                        this.selectCheck(node, path, this.state)
                                            ? { border: "1px solid #111111" }
                                            : { border: "none" }
                                    }
                                >
                                    {node.title}
                                    <button
                                        type="button"
                                        onClick={(evt) => {
                                            evt.preventDefault();
                                            evt.stopPropagation();
                                            this.removeNode(path);
                                        }}
                                    >
                                        <FontAwesomeIcon icon="fa-solid fa-x" />
                                    </button>
                                </form>
                            ),
                        })}
                    />
                </div>
                <div>안녕</div>
            </>
        );
    }
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
                </div>
            </div>
        </div>
    );
};
