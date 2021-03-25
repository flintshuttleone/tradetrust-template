import { v2 } from "@govtechsg/open-attestation";

export interface CustomTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  institute: string;
  foo?: {
    title: string;
    link: string;
    img: string;
  };
  $template: v2.TemplateObject;
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "John Doe",
  institute: "Institute of John Doe",
  issuers: [
    {
      name: "institute of blockchain"
    }
  ],
  $template: {
    name: "custom",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  },
  foo: {
    title: "ShuttleOne",
    link: "http://shuttleone.network/test/table.pdf",
    img: "https://shuttleone.network/test/invoice.png"
  }
};
