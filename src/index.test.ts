import { describe, expect, it } from "vitest";
import app from "./index";
import type { DOT_ENV } from "./types";

const testResponse = {
  status: 200,
  method: "GET",
  text: "OK!",
  apiKey: "Example_0000",
};
type TestResponse = typeof testResponse;

// TODO: dotenvが使えれば、環境変数を取得できるようになるはず
const MOCK_ENV = {
  DEVELOP: "1",
  X_API_KEY: "Example_0000",
  DB_HOST: "",
  DB_USERNAME: "",
  DEV_DB_USERNAME: "",
  DB_PASSWORD: "",
  DEV_DB_PASSWORD: "",
  DB_NAME: "",
  GH_PAT: "",
} satisfies DOT_ENV;

describe("レスポンス確認", () => {
  it("GET", async () => {
    const testGetResponse = structuredClone(testResponse);
    const res = await app.request(
      "/",
      {
        method: "GET",
      },
      MOCK_ENV,
    );
    expect(res.status).toBe(200);
    const json = await res.json<TestResponse>();
    expect(json).toStrictEqual(testGetResponse);
  });

  it("POST", async () => {
    const testPostResponse = structuredClone(testResponse);
    testPostResponse.method = "POST";
    const res = await app.request(
      "/",
      {
        method: "POST",
      },
      MOCK_ENV,
    );
    expect(res.status).toBe(200);
    const json = await res.json<TestResponse>();
    expect(json).toStrictEqual(testPostResponse);
  });

  it("PATCH", async () => {
    const testPatchResponse = structuredClone(testResponse);
    testPatchResponse.method = "PATCH";
    const res = await app.request(
      "/",
      {
        method: "PATCH",
      },
      MOCK_ENV,
    );
    expect(res.status).toBe(200);
    const json = await res.json<TestResponse>();
    expect(json).toStrictEqual(testPatchResponse);
  });

  it("DELETE", async () => {
    const testDeleteResponse = structuredClone(testResponse);
    testDeleteResponse.method = "DELETE";
    const res = await app.request(
      "/",
      {
        method: "DELETE",
      },
      MOCK_ENV,
    );
    expect(res.status).toBe(200);
    const json = await res.json<TestResponse>();
    expect(json).toStrictEqual(testDeleteResponse);
  });
});
