import React from "react";

const renderCode = (code: string): React.ReactNode => {
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

const renderText = (text: string): React.ReactNode => {
  const elements: React.ReactNode[] = [];
  const lines = text.split('\n');

  lines.forEach((line, index) => {
    const parts = line.split(/(<strong>.*?<\/strong>|<br \/>)/g);
    parts.forEach((part, i) => {
      if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
        elements.push(<strong key={`${index}-${i}`}>{part.slice(8, -9)}</strong>);
      } else if (part === '<br />') {
        elements.push(<br key={`${index}-${i}`} />);
      } else {
        elements.push(part);
      }
    });

    if (index !== lines.length - 1) {
      elements.push(<br key={`br-${index}`} />);
    }
  });

  return elements;
};


const renderSubtitle = (subtitle: string): React.ReactNode => {
  const processedSubtitle = subtitle.replace(/<strong>(.*?)<\/strong>/g, "<strong>$1</strong>");
  return <div className="subtitle" dangerouslySetInnerHTML={{ __html: processedSubtitle }} />;
};

const RenderData = {
  renderCode,
  renderText,
  renderSubtitle,
};

export default RenderData;
