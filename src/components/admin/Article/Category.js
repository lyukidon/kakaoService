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
                    expanded:true
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
    // 트리 외부 버튼 함수
    // 카테고리 이름 변경
    const [titleInput, setTitleInput] = useState("");
    const changeTitle = () => {
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
            <div style={{ height: 500 }}>
                <SortableTree
                theme={FileExplorerTheme}
                    treeData={state.treeData}
                    onChange={(treeData) => {
                        setState({ treeData });
                    }}
                    generateNodeProps={({ node, path }) => ({
                        title: (
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                    selectCategory(node, path);
                                    getFlat();
                                }}
                            >
                                <div>{node.title}</div>
                                <button
                                    type="button"
                                    onClick={() => addNode(path)}
                                >
                                    추가
                                </button>
                                <button
                                    type="button"
                                    onClick={() => removeNode(path)}
                                >
                                    제거
                                </button>
                            </div>
                        ),
                    })}
                />
            </div>
            <div>
                <div>
                    <input
                        type="text"
                        value={titleInput}
                        onChange={(evt) => {
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
                    {console.log(flat)}
                    <button type="button" onClick={() => {move()}}>
                        이동하기
                    </button>
                </div>
                <div>
                    <button type="button" onClick={() => {console.log(state.treeData)}}>저장하기</button>
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
