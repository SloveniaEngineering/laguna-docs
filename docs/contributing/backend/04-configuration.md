# Configuration

Most of the configuration can be done in `Laguna.toml` file.

You can override config with environment variables (in order of precedence, highest first):

1. `DATABASE_URL` environment variable overrides `application.database`.
2. For example `application.database.name` can be overriden by `APPLICATION_DATABASE_NAME` environment variable.

For more info and to extend config with custom fields see `crates/laguna-backend-config` crate.