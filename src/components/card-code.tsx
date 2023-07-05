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
                    <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path></svg>
                </button>
                {copySuccess && <div className="copy-success">¡Copiado!</div>}
            </pre>
        </div>
    );
};

export default CodeSnippet;
