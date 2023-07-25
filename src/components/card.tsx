import React, { useState } from "react";
import { SvgDocs } from "../assets/docs";

interface CardProps {
    title: string;
    important: string;
    subtitle: string;
    text: string;
    document?: string;
    download?: string;
}


const Card: React.FC<CardProps> = (props: any) => {

    const { title, important, subtitle, text, document, download } = props;

    const [dowloadSuccess, setDowloadSuccess] = useState(false);
    function renderText() {
        const words = text.split('|salto de linea|');
        return words.map((word: any, index: any) => {
            if (index === words.length - 1) {
                return word;
            }
            return (
                <React.Fragment key={index}>
                    {word}
                    <br /><br />
                </React.Fragment>
            );
        });
    };
    function renderSubtitle() {
        const processedSubtitle = subtitle.replace(
            /<strong>(.*?)<\/strong>/g,
            "<strong>$1</strong>"
        );
        return <div dangerouslySetInnerHTML={{ __html: processedSubtitle }} />;
    }
    const handleMouseLeave = () => {
        setDowloadSuccess(false);
    };
    function downloadFile() {
        window.open(download, '_blank');
    }

    return (
        <div className='card'>
            <h2>{title} {important && (<span className="gradient-text">{important}</span>)}</h2>

            <div className="subtitle">{renderSubtitle()}</div>
            <br />
            <p>{renderText()}</p>
            {document && (
                <>
                    <br />
                    <div className="code-snippet" onMouseLeave={handleMouseLeave}>
                        <pre className='code-text'>
                            <code typeof='javascript' >
                                {document}
                            </code>
                            <button className="copy-button" onClick={downloadFile}>
                                <SvgDocs />
                            </button>
                            {dowloadSuccess && <div className="copy-success">¡Copiado!</div>}
                        </pre>
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
