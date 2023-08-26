# Migrations and model changes

Here is a scenario.

1. You change a model in `laguna-backend-model` crate.
2. You also change the corresponding migration in `migrations` dir.
3. Your migration is now out of sync with DB.
4. Run `scripts/dbreset.sh laguna_dev_db` which drops current `laguna_dev_db`, recreates new `laguna_dev_db` and runs all migrations.

Here is another way to do it (without dropping DB):

1. You change a model in `laguna-backend-model` crate.
2. You create a new migration in `migrations` crate using `sqlx migrate add <migration_name>` which contains some `ALTER` statements which probably have `DEFAULT`s.
3. You run `sqlx migrate run` to run all migrations.

It is also possible to create "reversible" migrations with `sqlx migrate add -r <migration_name>`
which will create an `up` and `down` migration files and can be reverted with `sqlx migrate revert`.