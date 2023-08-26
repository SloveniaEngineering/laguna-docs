# Project structure

:::note
Only important files and dirs are listed here.
:::

- `.github/` contains GitHub Actions definitions for CI/CD.
  - `dependabot.yml` contains config for automatic dependency updates.
  - `workflows/` contains CI/CD workflows.
    - `rust.yml` contains CI workflow for Rust.
- `.cargo/config.toml` contains GLOBAL project config for Cargo and Rust. This is because we have a [Cargo Workspace](https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html) and its easier to have global config.
- `/` root directory contains root Cargo Crate `laguna-backend` and definition of [Cargo Workspace](https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html).
- `src/main.rs` is server entry point.
- `crates/` contains Cargo Workspace members (sub-Crates) of the project.
  - `laguna-backend-internal/` is a crate that contains re-exports of all other `crates/*` and is used by `laguna-backend` (root crate) to access all other crates.
    - `laguna-backend-internal/src/lib.rs` re-exporting can be seen here.
  - `laguna-backend-api/` contains API endpoints.
  - `laguna-backend-dto/` contains DTOs (data-transfer-objects) used by [laguna-frontend](https://github.com/SloveniaEngineering/laguna-frontend).
  - `laguna-backend-model/` contains DB models and relations.
  - `laguna-backend-config/` contains custom config structs for `Laguna.toml` config.
  - `laguna-backend-setup/` contains App setup logic (for tests, dev and production) and relies heavily from definitions in `laguna-backend-config`.
  - `laguna-backend-middleware/` contains application logic from API to DB.
  - `laguna-backend-tracker/` contains torrent tracking system commons.
  - `laguna-backend-tracker-http/` implements TCP-based (HTTP) tracker.
  - `laguna-backend-tracker-udp/` implements UDP-based tracker.
  - `laguna-backend-tracker-ws/` implements WebRTC-based (WebSocker) tracker.
- `migrations/` contains SQL migrations for DB.
- `configs/` contains config files for development, testing and deploy.
- `scripts/` contains scripts for development, testing and deploy.