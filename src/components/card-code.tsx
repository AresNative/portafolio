import { useRef, useState } from 'react';

const CodeSnippet = ({ code }: any) => {
    const codeRef: any = useRef(null);
    const [copySuccess, setCopySuccess] = useState(false);

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


    const handleMouseLeave = () => {
        setCopySuccess(false);
    };

    const renderCode = () => {
        const keywords = ["npm", "vite", "ionic"];
        const words = code.split(/\s+/);
        return words.map((word: any, index: any) => {
            if (keywords.includes(word)) {
                return (
                    <span key={index} className="keywords-code">
                        {word}
                    </span>
                );
            }
            return " " + word;
        });
    };

    return (
        <div className="code-snippet" onMouseLeave={handleMouseLeave}>
            <pre className='code-text'>
                <code ref={codeRef} >
                    {renderCode()}
                </code>
                <button className="copy-button" onClick={handleCopyClick}>
                    Click mi
                </button>
                {copySuccess && <div className="copy-success">¡Copiado!</div>}
            </pre>
        </div>
    );
};

export default CodeSnippet;
