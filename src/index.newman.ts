import { writeFileSync } from "node:fs";
import * as newman from "newman";
import { Collection } from "postman-collection";

const collection = new Collection({
  name: "verify-cfw-drizzle-crud",
  item: [
    {
      name: "GET",
      event: [
        {
          listen: "test",
          script: {
            exec: [
              'pm.test("レスポンスボディのJSONが想定通りか", () => {\r',
              "    const jsonData = pm.response.json();\r",
              "    pm.expect(jsonData.status).to.eql(200);\r",
              '    pm.expect(jsonData.method).to.eql("GET");\r',
              '    pm.expect(jsonData.text).to.eql("OK!");\r',
              '    pm.expect(jsonData.apiKey).to.eql("Example_0000");\r',
              "});",
            ],
            type: "text/javascript",
          },
        },
      ],
      request: {
        method: "GET",
        header: [],
        url: {
          protocol: "http",
          host: ["localhost"],
          port: "8787",
        },
      },
      response: [],
    },
    {
      name: "POST",
      event: [
        {
          listen: "test",
          script: {
            exec: [
              'pm.test("レスポンスボディのJSONが想定通りか", () => {\r',
              "    const jsonData = pm.response.json();\r",
              "    pm.expect(jsonData.status).to.eql(200);\r",
              '    pm.expect(jsonData.method).to.eql("POST");\r',
              '    pm.expect(jsonData.text).to.eql("OK!");\r',
              '    pm.expect(jsonData.apiKey).to.eql("Example_0000");\r',
              "});",
            ],
            type: "text/javascript",
          },
        },
      ],
      request: {
        method: "POST",
        header: [],
        url: {
          protocol: "http",
          host: ["localhost"],
          port: "8787",
        },
      },
      response: [],
    },
    {
      name: "PATCH",
      event: [
        {
          listen: "test",
          script: {
            exec: [
              'pm.test("レスポンスボディのJSONが想定通りか", () => {\r',
              "    const jsonData = pm.response.json();\r",
              "    pm.expect(jsonData.status).to.eql(200);\r",
              '    pm.expect(jsonData.method).to.eql("PATCH");\r',
              '    pm.expect(jsonData.text).to.eql("OK!");\r',
              '    pm.expect(jsonData.apiKey).to.eql("Example_0000");\r',
              "});",
            ],
            type: "text/javascript",
          },
        },
      ],
      request: {
        method: "PATCH",
        header: [],
        url: {
          protocol: "http",
          host: ["localhost"],
          port: "8787",
        },
      },
      response: [],
    },
    {
      name: "DELETE",
      event: [
        {
          listen: "test",
          script: {
            exec: [
              'pm.test("レスポンスボディのJSONが想定通りか", () => {\r',
              "    const jsonData = pm.response.json();\r",
              "    pm.expect(jsonData.status).to.eql(200);\r",
              '    pm.expect(jsonData.method).to.eql("DELETE");\r',
              '    pm.expect(jsonData.text).to.eql("OK!");\r',
              '    pm.expect(jsonData.apiKey).to.eql("Example_0000");\r',
              "});",
            ],
            type: "text/javascript",
          },
        },
      ],
      request: {
        method: "DELETE",
        header: [],
        url: {
          protocol: "http",
          host: ["localhost"],
          port: "8787",
        },
      },
      response: [],
    },
  ],
});

writeFileSync(
  "src/verify-cfw-drizzle-crud.postman_collection.json",
  JSON.stringify(collection.toJSON()),
);

newman.run(
  {
    collection: "src/verify-cfw-drizzle-crud.postman_collection.json",
    reporters: "cli",
    insecure: true,
    timeout: 600000,
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  },
);
