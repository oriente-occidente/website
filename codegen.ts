import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "https://graphql.datocms.com": {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_APIKEY}`,
        "X-Environment": `${process.env.NEXT_PUBLIC_DATO_ENV || "main"}`,
        "X-Exclude-Invalid": "true",
      },
    },
  },
  documents: ["./src/graphql/*.graphql"],
  generates: {
    "src/graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        strictScalars: true,
        scalars: {
          BooleanType: "boolean",
          CustomData: "Record<string, unknown>",
          Date: "string",
          DateTime: "string",
          FloatType: "number",
          IntType: "number",
          ItemId: "string",
          JsonField: "unknown",
          MetaTagAttributes: "Record<string, string>",
          UploadId: "string",
        },
      },
    },
  },
};

export default config;
