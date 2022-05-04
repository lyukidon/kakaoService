import React, { useRef, useEffect } from "react";
import ContentEditable from "react-contenteditable";

import buttonData from "./buttonData";

function Command({ display, action, contRef }) {
    const commandRef = useRef(null);
    useEffect(() => {
        commandRef.current.innerHTML = display;
    }, []);
    return (
        <button
            type="button"
            ref={commandRef}
            onClick={() => {
                document.execCommand(action);
                contRef.current.focus();
            }}
        >
            {display}
        </button>
    );
}

class ContentEdit extends React.Component {
    constructor(props) {
        super(props);
        this.contentEditable = React.createRef();
        this.state = { html: props.explain, fontSize: 3 };
    }

    onChangeContent = (event) => {
        this.setState({ html: event.target.value });
    };

    onFontSize = (event) => {
        if (event.target.name === "larger") {
            this.setState((prev) => ({ fontSize: prev.fontSize + 1 }));
            document.execCommand("fontSize", false, this.state.fontSize + 1);
        } else {
            this.setState((prev) => ({ fontSize: prev.fontSize - 1 }));
            document.execCommand("fontSize", false, this.state.fontSize - 1);
        }
    };

    render() {
        const { onEditData, articleId } = this.props;
        return (
            <>
                <div className="buttonGroup">
                    <button
                        type="button"
                        name="larger"
                        onClick={this.onFontSize}
                    >
                        +
                    </button>
                    <div className="fontSizeChecker">{this.state.fontSize}</div>
                    <button
                        type="button"
                        name="smaller"
                        onClick={this.onFontSize}
                    >
                        -
                    </button>
                    {buttonData.map((c) => (
                        <Command
                            key={c.id}
                            contRef={this.contentEditable}
                            display={c.display}
                            action={c.action}
                        />
                    ))}
                </div>
                <ContentEditable
                    className="contentEditable"
                    innerRef={this.contentEditable}
                    html={this.state.html}
                    disabled={false}
                    onChange={this.onChangeContent}
                />
                <button
                    type="button"
                    onClick={() => {
                        onEditData(articleId, this.state.html);
                    }}
                >
                    수정하기
                </button>
            </>
        );
    }
}

export default ContentEdit;
