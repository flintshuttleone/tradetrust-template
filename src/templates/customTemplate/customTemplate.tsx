import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CustomTemplateCertificate } from "../samples";

const style = css`
  pre {
    background-color: lightgray;
    overflow-wrap: anywhere;
    white-space: break-spaces;
  }
`;

export const CustomTemplate: FunctionComponent<TemplateProps<CustomTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={style} className={className} id="custom-template">
      <div>
        <h1>{document?.foo?.title ?? "Default title"}</h1>
        <iframe src={document.foo.img} frameborder="0">
        </iframe>  
        <iframe src={document.foo.pdf} width="100%" height="500px" frameborder="0">
        </iframe>      
      </div>
    </div>
  );
};
