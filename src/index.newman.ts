import * as newman from "newman";

// TODO: 前段処理でPostman CollectionをTypeScriptで記述して吐き出せるようにしたい(Postman Collection SDKを使う？)

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
