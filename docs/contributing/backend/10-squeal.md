# SQL (Squeal) notes

- In stored functions, prefer `RETURNS TABLE (LIKE <table_name>)` over `RETURNS SETOF <table_name>`. 
  See other ways: https://dba.stackexchange.com/questions/135378/how-to-use-returns-table-with-an-existing-table-in-postgresql

- Stored functions return `NULL` rows if rows are not found. This is the only reason why we can't have compile-time queries for now. 
  See: https://stackoverflow.com/questions/60222263/why-do-postgresql-functions-return-null-columns-instead-of-no-rows-when-the-retu. 
  That SO doesn't fix the issue.

- Second blocker to compile-time queries is the fact that `sqlx` doesn't work nice with custom types (even though it should, which is what they claim). 
  For example, role must be used in select like this: `SELECT role AS "role: _" FROM users WHERE id = $1`. 
  The same goes with update where you may need to do `UPDATE "User" SET role = $1 WHERE id = $2` and then in compile-time `sqlx::query!` pass `role as _`.

- Prefer sending empty strings to stored procedures (rather than `NULL` due to usage of `STRICT`, unless ALL parameters are `NULL`-able. 
  See: https://www.postgresql.org/docs/current/sql-createfunction.html specifically `CALLED ON NULL INPUT` (default mode)). 
  Then in stored functions use `NULLIF`, `TRIM` and `COALESCE` to convert empty strings to `NULL` if needed.

- See also https://github.com/launchbadge/sqlx/pull/2670 as a possible fix to the third point.

## Changing queries and using prepared statements

Always prefer compile-time query to runtime query, so that errors are caught at compile time.

- If a compile time (ie. `query_*!`) is changed (even if just spacing is changed (because of underlying hash of query)) it needs to be re-prepared with `scripts/prepare.sh`.
  This generates `.sqlx/*` files.
  Use `--merged` to genertae `sqlx-data.json` in workspace root.

- If after compiling, **compile time query is valid and works correctly** you might consider moving it into stored procedure/function. Using `sqlx = { ..., git = ..., rev = ... }` in `Cargo.toml` didn't solve the issue though.