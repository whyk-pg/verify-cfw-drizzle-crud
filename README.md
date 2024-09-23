# Verify CRUD in Drizzle ORM and TiDB Serverless on Cloudflare Workers
<!-- ![Status: ToDo](https://flat.badgen.net/static/Status/ToDo/red) -->
![Status: In Progress](https://flat.badgen.net/static/Status/In%20Progress/yellow)
<!-- ![Status: Done](https://flat.badgen.net/static/Status/Done/green) -->

## 本リポジトリの目的
Cloudflare Workersへの移行作業中に、PATCHリクエストが正常に反映されない問題が発生した。  
Cloudflare Workers以前では正常に反映されていたため、Cloudflare Workers移行作業での変更が原因という可能性が高い。

そこで、現行実装を最小構成で再現し、CRUD処理が正常に送信されるか確認する。

### 最小構成要件
- Cloudflare Workers向け構成のHonoでAPIが構築されている
- 各リクエストは`hono/factory`でHandlerとして構築されている
- 環境変数は`configMiddleware`としてまとめられ、`ctx.var`から取得できるようになっている
- `drizzle/`配下にDrizzle ORMの設定群が配置されている（Drizzle Zodは本要件に含めない）
- Drizzle ORMのDB Driverには`@tidbcloud/serverless`を採用している
- TiDB Serverlessと接続され、データの入出力が行なわれている

## 本リポジトリの達成目標
- [x] HonoでAPIを構築し、CRUDで正常にテストが通過するか確認する
  - [x] GETの動作確認
  - [x] POSTの動作確認
  - [x] PATCHの動作確認
  - [x] DELETEの動作確認
- [ ] 環境変数を`.dev.vars`で管理し、Middlewareから読み出せるか確認する
- [ ] Drizzle ORMを導入し、TiDB Serverlessに繋いで確認する
  - [ ] GETの動作確認
  - [ ] POSTの動作確認
  - [ ] PATCHの動作確認
  - [ ] DELETEの動作確認

## 参考資料
- [Test runner | Node.js v20.17.0 Documentation](https://nodejs.org/docs/latest-v20.x/api/test.html)
- [Web標準のバックエンドアプリのテスト](https://zenn.dev/yusukebe/articles/9a6335ed793c43#hono%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88)
- [How to run the Node built-in testrunner for TypeScript files inside a specific directory? · Issue #3902 · nodejs/help](https://github.com/nodejs/help/issues/3902)
- [Factory Helper - Hono](https://hono.dev/docs/helpers/factory#createmiddleware)
- [Vitest integration | Cloudflare Workers docs](https://developers.cloudflare.com/workers/testing/vitest-integration/)
