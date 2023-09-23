import React, { useRef, useState } from "react";
import { SvgDocs } from "../../assets/docs";
import RenderData from "./hooks";
import "./theme/index.css"
import { SvgPdf } from "../../assets/pdf";

interface CardProps {
    title: string;
    important: string;
    subtitle: string;
    text: string;
    document?: string;
    download?: string;
    download_uri?: string;
    code?: string;
}


const Card: React.FC<CardProps> = (props: any) => {
    const codeRef: any = useRef(null);
    const { title, important, subtitle, text, document, download, download_uri, code } = props;
    const [copySuccess, setCopySuccess] = useState(false);
    const handleMouseLeave = () => {
        setCopySuccess(false);
    };
    const handleCopyClick = () => {
        const codeElement = codeRef.current;
        const codeText = codeElement.innerText;

        navigator.clipboard.writeText(codeText)
            .then(() => {
                setCopySuccess(true);
            })
            .catch((error) => {
                console.error('Error copying text to clipboard:', error);
            });
    };

    return (
        <div className='card'>
            <main>
                <h2>{title} {important && (<span className="gradient-text">{important}</span>)}</h2>
                {RenderData.renderSubtitle(subtitle)}
                <br />
                <div className="card-text">
                    {RenderData.renderText(text)}
                </div>
                {code && (
                    <pre className="code-snippet" onMouseLeave={handleMouseLeave}>
                        <code typeof='javascript' className="language-javascript" ref={codeRef} >
                            {RenderData.renderCode(code)}
                        </code>
                        <button className="copy-button" onClick={handleCopyClick}>
                            <SvgDocs />
                        </button>
                        {copySuccess && <div className="copy-success">¡Copiado!</div>}
                    </pre>
                )}
                {document && (
                    <pre className="download-snippet">
                        {document}
                        <a className="download-button" href={download_uri} download={download}>
                            <SvgPdf />
                        </a>
                    </pre>
                )}
            </main>
        </div>
    );
}

export default Card;
