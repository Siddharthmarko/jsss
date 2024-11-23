import React, { useEffect } from "react";

const FlippingBookEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=83652096";

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <a
        href="https://online.flippingbook.com/view/83652096/"
        className="fbo-embed"
        data-fbo-id="8051d3db99"
        data-fbo-ratio="3:2"
        data-fbo-lightbox="yes"
        data-fbo-width="100%"
        data-fbo-height="auto"
        data-fbo-version="1"
        style={{ maxWidth: "100%" }}
        rel="noopener noreferrer"
      >
      </a>

      
    
                        
    </>
  );
};

export default FlippingBookEmbed;
