# Setup & First run

:::tip
This guide uses Linux `scripts/*.sh`, but scrips for Windows are also available via `scripts/*-win.ps1`.
:::

1. Clone this repo `git clone --recurse-submodules https://github.com/SloveniaEngineering/laguna-backend` and `cd` into it.
2. Run `scripts/tools.sh` to install project tools that simplify development.
   This can be quite expensive so if you don't need all the tools you can install them manually (see `scripts/tools.sh`).
3. Make sure Postgres daemon is running, then do `sqlx database setup --database-url=postgres://postgres:postgres@127.0.0.1/laguna_dev_db` to create `laguna_dev_db` local DB with tables.
4. Run with `scripts/dev.sh` or with `cargo run`.

:::note
`scripts/dev.sh` watches for changes in source code and if change is detected automatically recompiles and restarts the server.
:::