import React from "react";

interface CardProps {
    title: string;
    important: string;
    subtitle: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ title, important, subtitle, text }) => {
    function renderText() {
        const words = text.split('.');
        return words.map((word: any, index: any) => {
            if (index === words.length - 1) {
                return word;
            }
            return (
                <React.Fragment key={index}>
                    {word}
                    <br />
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

    return (
        <div className='card'>
            <h2>{title} {important && (<span className="gradient-text">{important}</span>)}</h2>

            <div className="subtitle">{renderSubtitle()}</div>
            <br />
            <p>{renderText()}</p>
            <br />
        </div>
    );
}

export default Card;
