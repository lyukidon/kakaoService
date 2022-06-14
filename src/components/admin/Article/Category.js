import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@nosferatu500/react-sortable-tree/style.css";
import FileExplorerTheme from "@nosferatu500/theme-file-explorer";
import SortableTree, {
    addNodeUnderParent,
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
            titleInput: "",
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

    addNewNode = (path) => {
        this.setState((prev) => ({
            treeData: addNodeUnderParent({
                treeData: prev.treeData,
                parentKey: path[path.length - 1],
                expandParent: true,
                getNodeKey: ({ treeIndex }) => treeIndex,
                newNode: {
                    title: "안녕",
                },
            }).treeData,
        }));
    };

    selectThis = (node, path) => {
        this.setState((prev) => ({
            currentNode: node,
            path,
            titleInput: node.title,
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

    upNode = () => {
        this.setState((prev) => {
            if (prev.currentNode.children === undefined) {
                return {
                    treeData: addNodeUnderParent({
                        treeData: prev.treeData,
                        parentKey: prev.path[prev.path.length - 3],
                        expandParent: true,
                        getNodeKey: ({ treeIndex }) => treeIndex,
                        newNode: {
                            title: prev.currentNode.title,
                        },
                    }).treeData,
                };
            } else {
                return {
                    treeData: addNodeUnderParent({
                        treeData: prev.treeData,
                        parentKey: prev.path[prev.path.length - 3],
                        expandParent: true,
                        getNodeKey: ({ treeIndex }) => treeIndex,
                        newNode: {
                            title: prev.currentNode.title,
                            children: prev.currentNode.children,
                        },
                    }).treeData,
                };
            }
        });
        this.setState((prev) => ({
            treeData: removeNodeAtPath({
                treeData: prev.treeData,
                path: prev.path,
                getNodeKey: ({ treeIndex }) => treeIndex,
            }),
        }));
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
                        canDrag={false}
                        generateNodeProps={({ node, path }) => ({
                            title: (
                                <div
                                    role="button"
                                    onClick={() => this.selectThis(node, path)}
                                    onKeyPress={() =>
                                        this.selectThis(node, path)
                                    }
                                    tabIndex={0}
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
                                            this.addNewNode(path);
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
                                </div>
                            ),
                        })}
                    />
                </div>
                <div>
                    <div>
                        카테고리 명:
                        <input
                            type="text"
                            value={this.state.titleInput}
                            onChange={(evt) => {
                                this.setState({ titleInput: evt.target.value });
                                console.log(this.state.titleInput)
                            }}
                        />
                        <button type="button" onClick={()=> {
                            this.setState(prev => ({
                                treeData: changeNodeAtPath( {
                                    treeData: prev.treeData,
                                    path: prev.path,
                                    getNodeKey,
                                    newNode: {...prev.currentNode, title: prev.titleInput}
                                })
                            }))
                        }}>바꾸기</button>
                    </div>
                    <div>뎁스: {this.state.path && this.state.path.length}</div>
                    <div>
                        <div>
                            <button type="button" onClick={() => this.upNode()}>
                                밖으로
                            </button>
                        </div>
                        <div>
                            <select name="" id="">
                                <option value="">선택해주세요</option>
                            </select>
                            <button type="button">안으로</button>
                        </div>
                    </div>
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
