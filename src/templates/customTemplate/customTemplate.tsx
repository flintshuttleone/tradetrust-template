import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CustomTemplateCertificate } from "../samples";

const style = css`
  pre {
    background-color: lightgray;
    overflow-wrap: anywhere;
    white-space: break-spaces;
  },
  h4 {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const CustomTemplate: FunctionComponent<TemplateProps<CustomTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={style} className={className} id="custom-template">
      <div>
        <h4>{document?.foo?.title ?? "Default title"}</h4>
        <img src={document?.foo?.img} width="500px"/>
      </div>
    </div>
  );
};
