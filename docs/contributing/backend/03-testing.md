# Testing

## Integration tests

1. Run `scripts/test.sh` to run all tests using `_sqlx_test` databases and store test infos in `laguna_dev_db` in `_sqlx_test` schema rather than `public` used for local development.

To delete zombie test databases if tests failed use `scripts/dbdroptest.sh _sqlx_test`.

:::tip
On WSL or Mingw64 you likely don't have a tty terminal. For that you can use `scripts/dbdroptest_fixtty.sh scripts/dbdroptest.sh _sqlx_test`.
:::

:::note
You probably don't want to delete test databases, because they are useful for debugging/inspection.
:::