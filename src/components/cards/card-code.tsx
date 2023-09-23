import "./theme/card-code.component.css";

function CardCode() {
    return (
        <div className="code-editor">
            <div className="header">
                <span className="title">CSS</span>
            </div>
            <div className="editor-content">
                <code className="code">
                    <p>
                        <span className="color-0">.code-editor </span>{" "}
                        <p>{"{"}</p>
                    </p>

                    <p className="property">
                        <span className="color-2">max-width</span>
                        <span>:</span>
                        <span className="color-1">300px</span>;
                    </p>
                    <p className="property">
                        <span className="color-2">background-color</span>
                        <span>:</span>
                        <span className=""> #1d1e22</span>;
                    </p>
                    <p className="property">
                        <span className="color-2"> box-shadow</span>
                        <span>:</span>
                        <span className="color-1">
                            0px 4px 30px
                            <span className="color-3"> rgba(</span>0, 0, 0, 0.5
                            <span className="color-3">)</span>
                        </span>
                        ;
                    </p>
                    <p className="property">
                        <span className="color-2">border-radius</span>
                        <span>:</span>
                        <span className="color-1">8px</span>;
                    </p>
                    <p>{"}"}</p>
                </code>
            </div>
        </div>
    );
}

export default CardCode;
