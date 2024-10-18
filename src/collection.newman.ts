import { Collection } from "postman-collection";

declare namespace Postman {
  interface PM {
    test(
      testName: string,
      specFunction: (done?: (error?: unknown) => void) => void,
    ): void;
    expect: Chai.ExpectStatic;
    response: {
      to: Chai.Assertion;
      json(): {
        status: number;
        method: string;
        text: string;
        [key: string]: string | number;
      };
      text(): string;
    };
  }
}

declare const pm: Postman.PM;

const convertPostmanTestToStringArray = (pmTest: () => void): string[] => {
  // TODO: 実行に支障はないが、出力されたexecがすごく汚いので、どうにかして直したい
  return [pmTest.toString().replace(/\(\)\=\>(.*)/g, "$1")];
};

export const collection = new Collection({
  name: "verify-cfw-drizzle-crud",
  item: [
    {
      name: "GET",
      event: [
        {
          listen: "test",
          script: {
            exec: convertPostmanTestToStringArray(() =>
              pm.test("レスポンスボディのJSONが想定通りか", () => {
                const jsonData = pm.response.json();
                pm.expect(jsonData.status).to.eql(200);
                pm.expect(jsonData.method).to.eql("GET");
                pm.expect(jsonData.text).to.eql("OK!");
                pm.expect(jsonData.apiKey).to.eql("Example_0000");
              }),
            ),
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
            exec: convertPostmanTestToStringArray(() =>
              pm.test("レスポンスボディのJSONが想定通りか", () => {
                const jsonData = pm.response.json();
                pm.expect(jsonData.status).to.eql(200);
                pm.expect(jsonData.method).to.eql("POST");
                pm.expect(jsonData.text).to.eql("OK!");
                pm.expect(jsonData.apiKey).to.eql("Example_0000");
              }),
            ),
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
            exec: convertPostmanTestToStringArray(() =>
              pm.test("レスポンスボディのJSONが想定通りか", () => {
                const jsonData = pm.response.json();
                pm.expect(jsonData.status).to.eql(200);
                pm.expect(jsonData.method).to.eql("PATCH");
                pm.expect(jsonData.text).to.eql("OK!");
                pm.expect(jsonData.apiKey).to.eql("Example_0000");
              }),
            ),
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
            exec: convertPostmanTestToStringArray(() =>
              pm.test("レスポンスボディのJSONが想定通りか", () => {
                const jsonData = pm.response.json();
                pm.expect(jsonData.status).to.eql(200);
                pm.expect(jsonData.method).to.eql("DELETE");
                pm.expect(jsonData.text).to.eql("OK!");
                pm.expect(jsonData.apiKey).to.eql("Example_0000");
              }),
            ),
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
