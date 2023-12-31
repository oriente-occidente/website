require("dotenv").config({ path: ".env.local" });

/** @type {import('graphql-config').IGraphQLConfig} */

module.exports = {
  schema: [
    {
      "https://graphql.datocms.com": {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_API_KEY}`,
          "X-Environment": `${process.env.NEXT_PUBLIC_DATO_ENV || "main"}`,
          "X-Exclude-Invalid": "true",
        },
      },
    },
  ],
  documents: ["./**/*.graphql", "./**/*.tsx", "./**/*.ts"],
  extensions: {
    codegen: {
      generates: {
        "./src/graphql/": {
          preset: "client",
          // String documentMode (https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#when-to-use-a-string-documentmode) does not work with nested fragments
          // config: { documentMode: "string" },
          presetConfig: {
            fragmentMasking: { unmaskFunctionName: "getFragmentData" },
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
    },
  },
};
