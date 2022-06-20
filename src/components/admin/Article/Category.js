import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@nosferatu500/react-sortable-tree/style.css";
import FileExplorerTheme from "@nosferatu500/theme-file-explorer";
import SortableTree, {
    addNodeUnderParent,
    toggleExpandedForAll,
    removeNodeAtPath,
    changeNodeAtPath,
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
    // 트리 상단 버튼 함수
    // 검색하기
    const [searchNode, setSearchNode] = useState("");
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
        children: [],
        parentNode: undefined,
        path: [],
    });
    const selectCategory = (node, path, parentNode) => {
        setSelectedCategory({
            title: node.title,
            children: node.children,
            parentNode,
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
        switch (number) {
            case -2:
                break;
            case -1:
                setPathForMove([]);
                break;
            default:
                setPathForMove(flat[number].path);
                break;
        }
    };
    // 이동하기 버튼
    // 데이터: pathForMove,selectedCategory
    const deleteRef = useRef([]);

    const moveOption = () => {
        if (selectedCategory.children) {
            setState((prev) => ({
                treeData: addNodeUnderParent({
                    treeData: prev.treeData,
                    parentKey: pathForMove[pathForMove.length - 1],
                    newNode: {
                        title: selectedCategory.title,
                        children: selectedCategory.children,
                        expanded: false,
                    },
                    getNodeKey: ({ treeIndex }) => treeIndex,
                }).treeData,
            }));
        } else {
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
        }
    };

    const move = () => {
        if (
            selectedCategory.path[selectedCategory.path.length - 1] >
            pathForMove[pathForMove.length - 1]
        ) {
            removeNode(selectedCategory.path);
            moveOption();
        } else {
            moveOption();
            removeNode(selectedCategory.path);
        }
    };

    const pathLength = (path) => {
        const { length } = path;
        let branch = "";
        if (length > 1) {
            branch = "+ ";
        }
        if (length > 2) {
            branch = `+ `.repeat(length - 2) + branch;
        }
        return branch;
    };

    return (
        <>
            <div className="tree" style={{ height: 600 }}>
                <div className="treeButton">
                    <div className="expanded">
                        <button
                            type="button"
                            onClick={() => expandStatus(true)}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-arrow-down-wide-short" />{" "}
                            펼치기
                        </button>
                        <button
                            type="button"
                            onClick={() => expandStatus(false)}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-short-wide" />{" "}
                            접기
                        </button>
                    </div>
                    <div className="searchInput">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                        <input
                            type="text"
                            value={searchNode}
                            placeholder="검색하기"
                            onChange={(evt) => setSearchNode(evt.target.value)}
                        />
                    </div>
                    <div className="addTopNodeBtn">
                        <button
                            type="button"
                            onClick={() => addNode([])}
                            title="추가하기"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-plus" /> 추가하기
                        </button>
                    </div>
                </div>
                <SortableTree
                    theme={FileExplorerTheme}
                    treeData={state.treeData}
                    onChange={(treeData) => {
                        setState({ treeData });
                    }}
                    canDrag={false}
                    searchQuery={searchNode}
                    scaffoldBlockPxWidth={30}
                    generateNodeProps={({ node, path, parentNode }) => ({
                        title: (
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                    selectCategory(node, path, parentNode);
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
                                        ref={(el) =>
                                            (deleteRef.current[
                                                path[path.length - 1]
                                            ] = el)
                                        }
                                    >
                                        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                                    </button>
                                </div>
                            </div>
                        ),
                    })}
                />
            </div>
            <div className="treeManage">
                <div className="treeController">
                    <div className="treeChangeTitle">
                        <input
                            type="text"
                            value={titleInput}
                            placeholder="카테고리 이름"
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
                    <div className="treeMoveNode">
                        <select
                            name=""
                            id=""
                            onChange={(evt) => {
                                selectPath(evt.target.value);
                            }}
                        >
                            {selectedCategory.title.length === 0 && (
                                <option value={-2}>선택해주세요</option>
                            )}
                            {selectedCategory.title.length !== 0 && (
                                <option value={-1}>최상단</option>
                            )}
                            {flat
                                .filter(
                                    (c) =>
                                        selectedCategory.path[
                                            selectedCategory.path.length - 1
                                        ] !==
                                        c.path[selectedCategory.path.length - 1]
                                )
                                .map((c) => (
                                    <option
                                        key={c.path[c.path.length - 1]}
                                        value={c.path[c.path.length - 1]}
                                    >
                                        {`${pathLength(c.path)} ${c.title}`}
                                    </option>
                                ))}
                        </select>
                        <button
                            type="button"
                            onClick={() => {
                                const { title, path } = selectedCategory;
                                if (title !== "") {
                                    move();
                                } else {
                                    alert("카테고리를 선택해주세요");
                                }
                            }}
                        >
                            이동하기
                        </button>
                    </div>
                </div>

                <div className="treeInfo">
                    <div className="treeInfoTitle">선택된 카테고리</div>
                    <div>
                        이름
                        {selectedCategory.title !== "" &&
                            ` - ${selectedCategory.title}`}
                    </div>
                    <div>
                        뎁스
                        {selectedCategory.path.length !== 0 &&
                            ` - ${selectedCategory.path.length}`}
                    </div>
                    <div>
                        상위 카테고리
                        {selectedCategory.parentNode !== undefined &&
                            ` - ${selectedCategory.parentNode.title}`}
                    </div>
                    <div>
                        하위 카테고리
                        <ul>
                            {selectedCategory && selectedCategory.children
                                ? selectedCategory.children.map((c) => (
                                      <li key={c.title}>{c.title}</li>
                                  ))
                                : "없음"}
                        </ul>
                    </div>
                </div>
                <div className="treeSaveBtn">
                    <button
                        type="button"
                        onClick={() => {
                            console.log(state.treeData);
                        }}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-floppy-disk" />
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
