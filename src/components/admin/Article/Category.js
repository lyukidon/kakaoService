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

// function CategoryOption({treeData}){
//     return(

//     )
// }

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

    componentDidMount() {
        this.expandAndCollapse(true);
    }
    componentDidUpdate() {
        console.log(this.state.treeData);
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

    insertNewNode = (pathLength) => {
        this.setState((prev) => ({
            treeData: insertNode({
                treeData: prev.treeData,
                depth: pathLength,
                
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

    selectCheck = (node, path) => {
        if (this.state.path) {
            if (path.length === this.state.path.length) {
                for (let i = 0; i < path.length; i++) {
                    if (path[i] !== this.state.path[i]) {
                        return false;
                    }
                }
            } else {
                return false;
            }
            return true;
        }
        return false;
    };

    render() {
        const getNodeKey = ({ treeIndex }) => treeIndex;
        const { title, children } = this.state.currentNode;
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
                            this.insertNewNode(0);
                        }}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                    </button>
                    <SortableTree
                        treeData={this.state.treeData}
                        searchQuery={this.state.searchString}
                        onChange={(treeData) => this.setState({ treeData })}
                        theme={FileExplorerTheme}
                        // canDrag={false}
                        generateNodeProps={({ node, path }) => ({
                            title: (
                                <form
                                    role="button"
                                    onClick={() => this.selectThis(node, path)}
                                    style={
                                        this.selectCheck(node, path)
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
                                            this.insertNewNode(path.length);
                                        }}
                                    >
                                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                                    </button>
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
                <div>
                    <div>카테고리 명: {title && title}</div>
                    <div>뎁스: {this.state.path && this.state.path.length}</div>
                    <div>
                        <select name="" id="">
                            <option value="">선택해주세요</option>
                            {/* {
                                this.state.treeData.map( c => {
                                    let checkChild = true;
                                    while (checkChild){
                                        if (c.children){

                                        }
                                    }
                                    return(
                                        <option value="">{c.title}</option>
                                    )
                                })
                            } */}
                        </select>
                    </div>
                    <div></div>
                </div>
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
