# Submitting changes

:::caution
**Don't fork** and contribute, just clone and contribute.
This is because some token CI permissions are acting weird with forks.
This will be fixed.
:::

Because of that, if you want to contribute you have to be in the `SloveniaEngineering` GitHub organization.
Message someone from the organization to add you to the organization or create an issue.

## Label guide

There are many types of labels, the general syntax for them is `<TYPE>-<SUBTYPE>`.

Descriptions can be found at: https://github.com/SloveniaEngineering/laguna-backend/labels.

Basic types are:

1. `A` - Area
2. `C` - Challenge
3. `D` - Difficulty
4. `M` - Special type for unsorted
5. `N` - Needs
6. `P` - Priority
7. `S` - Status
8. `T` - Type of issue/PR
9. `V` - Type of SemVer version to bump after resolve

## Versioning

This project uses [Semantic Versioning](https://semver.org/) for releases.
Releases occur when `dev` is merged into `master` (aka. Git Flow).

- Patch version is incremented on merge of `patch-*` into `dev`.
- Minor version is incremented on merge of `impl-*` into `dev`.
- Major version is set manually.

This way `dev` serves as a buffer for review and testing.

- Version applies when `dev` is merged into `master` and Release is created with appropriate tag.

## Branching

- Always branch of off `dev` branch.
- Always rebase your branch to lastest `dev`.

### Naming rules

- If you are fixing/refactoring anything name your branch `patch-<something that is being fixed>`.
- If you are implementing anything name your branch `impl-<something that is being implemented>`.