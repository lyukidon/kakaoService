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
    getTreeFromFlatData,
    getFlatDataFromTree,
    getVisibleNodeInfoAtIndex,
    map,
    walk,
} from "@nosferatu500/react-sortable-tree";

import categoryData from "./categoryData";

function Tree() {
    // 기본 데이터
    const [state, setState] = useState(categoryData);
    // 렌더링마다 작동
    // 펼치기
    const expandStatus = (bool) => {
        setState((prev) => ({
            treeData: toggleExpandedForAll({
                treeData: prev.treeData,
                expanded: bool,
            }),
        }));
    };
    useEffect(() => {
        expandStatus(true);
    }, []);
    // 1차원 데이터
    const [flat, setFlat] = useState([]);
    const getFlat = () => {
        setFlat([]);
        // walk: forEach랑 비슷한 것
        walk({
            treeData: state.treeData,
            callback: ({ node, path }) =>
                setFlat((prev) => [...prev, { ...node, path }]),
            getNodeKey: ({ treeIndex }) => treeIndex,
        });
    };
    useEffect(() => {
        getFlat();
    }, [state]);
    // 트리 내부 버튼 함수
    // 카테고리 추가
    const addNode = (path) => {
        setState((prev) => ({
            treeData: addNodeUnderParent({
                treeData: prev.treeData,
                parentKey: path[path.length - 1],
                getNodeKey: ({ treeIndex }) => treeIndex,
                newNode: {
                    title: "새 카테고리",
                    expanded: true,
                },
            }).treeData,
        }));
    };
    // 카테고리 제거
    const removeNode = (path) => {
        setState((prev) => ({
            treeData: removeNodeAtPath({
                treeData: prev.treeData,
                path,
                getNodeKey: ({ treeIndex }) => treeIndex,
            }),
        }));
    };
    // 카테고리 선택
    const [selectedCategory, setSelectedCategory] = useState({
        title: "",
        children: "",
        path: [],
    });
    const selectCategory = (node, path) => {
        setSelectedCategory({
            title: node.title,
            children: node.children,
            expanded: node.expanded,
            path,
        });
    };
    // 카테고리 선택 스타일
    const selectCheck = (node, path) => {
        if (selectedCategory.path) {
            if (path.length === selectedCategory.path.length) {
                for (let i = 0; i < path.length; i++) {
                    if (path[i] !== selectedCategory.path[i]) {
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

    // 트리 외부 버튼 함수
    // 카테고리 이름 변경
    const [titleInput, setTitleInput] = useState("");
    useEffect(() => setTitleInput(selectedCategory.title), [selectedCategory]);
    const changeTitle = () => {
        if (titleInput.length === 0) {
            alert("내용을 입력하세요");
        } else {
            setState((prev) => ({
                treeData: changeNodeAtPath({
                    treeData: prev.treeData,
                    path: selectedCategory.path,
                    newNode: {
                        title: titleInput,
                        children: selectedCategory.children,
                        expanded: selectedCategory.expanded,
                    },
                    getNodeKey: ({ treeIndex }) => treeIndex,
                }),
            }));
        }
    };
    // 이동하기
    // select 태그 값 확인
    const [pathForMove, setPathForMove] = useState([]);
    const selectPath = (number) => {
        setPathForMove(flat[number].path);
    };
    // 이동하기 버튼
    // 데이터: pathForMove,selectedCategory
    const move = () => {
        setState((prev) => ({
            treeData: addNodeUnderParent({
                treeData: prev.treeData,
                parentKey: pathForMove[pathForMove.length - 1],
                newNode: {
                    title: selectedCategory.title,
                    expanded: selectedCategory.expanded,
                },
                getNodeKey: ({ treeIndex }) => treeIndex,
            }).treeData,
        }));
    };

    return (
        <>
            <div className="tree" style={{ height: 630 }}>
                <button type="button" onClick={() => expandStatus(true)}>
                    펼치기
                </button>
                <button type="button" onClick={() => expandStatus(false)}>
                    접기
                </button>
                <button type="button" onClick={() => addNode([])}>
                    추가하기
                </button>
                <SortableTree
                    theme={FileExplorerTheme}
                    treeData={state.treeData}
                    onChange={(treeData) => {
                        setState({ treeData });
                    }}
                    canDrag={false}
                    generateNodeProps={({ node, path }) => ({
                        title: (
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                    selectCategory(node, path);
                                    getFlat();
                                }}
                                style={
                                    selectCheck(node, path)
                                        ? {
                                              borderBottom: "3px solid #ff0000",
                                              borderRight: "3px solid #ff0000",
                                              borderLeft: "1px solid #ff0000",
                                              borderTop: "1px solid #ff0000",
                                              paddingBottom: "5px",
                                          }
                                        : {}
                                }
                                className="treeNodes"
                            >
                                <div className="nodeTitle">{node.title}</div>
                                <div className="nodeButtons">
                                    <button
                                        type="button"
                                        onClick={() => addNode(path)}
                                        title="추가하기"
                                    >
                                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => removeNode(path)}
                                        title="삭제하기"
                                    >
                                        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                                    </button>
                                </div>
                            </div>
                        ),
                    })}
                />
            </div>
            <div>
                <div>
                    선택된 카테고리
                    <div>
                        이름 - {selectedCategory && selectedCategory.title}
                    </div>
                    <div>
                        뎁스 -{" "}
                        {selectedCategory.path.length !== 0 && selectedCategory.path.length}
                    </div>
                    <div>
                        하위 태그
                        <ul>
                            {selectedCategory && selectedCategory.children
                                ? selectedCategory.children.map((c) => (
                                      <li key={c.title}>{c.title}</li>
                                  ))
                                : "없음"}
                        </ul>
                    </div>
                </div>
                <div>
                    <input
                        type="text"
                        value={titleInput}
                        onChange={(evt) => {
                            console.log(selectedCategory);
                            setTitleInput(evt.target.value);
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            changeTitle();
                        }}
                    >
                        이름 바꾸기
                    </button>
                </div>
                <div>
                    <select
                        name=""
                        id=""
                        onChange={(evt) => {
                            selectPath(evt.target.value);
                        }}
                    >
                        <option value={-1}>선택해주세요</option>
                        {flat.map((c) => (
                            <option
                                key={c.path[c.path.length - 1]}
                                value={c.path[c.path.length - 1]}
                            >
                                {c.title}
                            </option>
                        ))}
                    </select>
                    <button
                        type="button"
                        onClick={() => {
                            move();
                        }}
                    >
                        이동하기
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={() => {
                            console.log(state.treeData);
                        }}
                    >
                        저장하기
                    </button>
                </div>
            </div>
        </>
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
                </div>
            </div>
        </div>
    );
};
