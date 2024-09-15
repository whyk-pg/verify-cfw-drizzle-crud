import { describe, expect, it } from "vitest";
import app from "./index";

const testResponse = {
  status: 200,
  method: "GET",
  text: "OK!",
};

describe("レスポンス確認", () => {
  it("GET", async () => {
    const testGetResponse = structuredClone(testResponse);
    const res = await app.request("/", {
      method: "GET",
    });
    console.log(res);
    const json = await res.json();
    expect(json).toStrictEqual(testGetResponse);
  });

  it("POST", async () => {
    const testPostResponse = structuredClone(testResponse);
    testPostResponse.method = "POST";
    const res = await app.request("/", {
      method: "POST",
    });
    console.log(res);
    const json = await res.json();
    expect(json).toStrictEqual(testPostResponse);
  });

  it("PATCH", async () => {
    const testPatchResponse = structuredClone(testResponse);
    testPatchResponse.method = "PATCH";
    const res = await app.request("/", {
      method: "PATCH",
    });
    console.log(res);
    const json = await res.json();
    expect(json).toStrictEqual(testPatchResponse);
  });

  it("DELETE", async () => {
    const testDeleteResponse = structuredClone(testResponse);
    testDeleteResponse.method = "DELETE";
    const res = await app.request("/", {
      method: "DELETE",
    });
    console.log(res);
    const json = await res.json();
    expect(json).toStrictEqual(testDeleteResponse);
  });
});
