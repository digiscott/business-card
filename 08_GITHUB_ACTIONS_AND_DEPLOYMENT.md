# GitHub Actions and Deployment

## Branching model

Use a solo-dev workflow:

```text
main = production
feature branches = active work
pull requests = quality gate
manual workflow dispatch = optional dev deploy
merge to main = production deploy
```

Avoid a permanent `develop` branch for v1 unless collaboration or release complexity increases later.

## Environments

Use GitHub Environments:

- `dev`
- `production`

Domains are TBD.

```text
Production domain: TBD
Dev domain: TBD
```

## Required GitHub environment configuration

For `production`, create these environment variables:

```text
DREAMHOST_HOST
DREAMHOST_USER
DREAMHOST_TARGET_PATH
```

And this environment secret:

```text
DREAMHOST_SSH_KEY
```

For `dev`, create these environment variables:

```text
DREAMHOST_HOST
DREAMHOST_USER
DREAMHOST_TARGET_PATH
```

And this environment secret:

```text
DREAMHOST_SSH_KEY
```

Optional environment variable for both environments:

```text
DREAMHOST_PORT
```

## CI workflow

Create:

```text
.github/workflows/ci.yml
```

Purpose:

Run checks on pull requests.

Suggested triggers:

```yaml
on:
  pull_request:
    branches: [main]
```

Suggested steps:

1. Checkout
2. Setup Node
3. Install dependencies
4. Lint
5. Typecheck
6. Test
7. Build static export

Dependency caching is intentionally omitted until the repo includes a supported lock file such as `package-lock.json`.

Suggested workflow:

```yaml
name: CI

env:
  FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true

on:
  pull_request:
    branches: [main]

jobs:
  check:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Lint
        run: npm run lint

      - name: Typecheck
        run: npm run typecheck

      - name: Test
        run: npm run test

      - name: Build
        run: npm run build
```

## Deploy workflow

Create:

```text
.github/workflows/deploy.yml
```

Purpose:

- Deploy production on merge to `main`.
- Allow manual dev deployment with `workflow_dispatch`.
- Upload the static `out/` folder as a GitHub Actions artifact.
- Deploy to DreamHost using rsync over SSH.

Suggested workflow:

```yaml
name: Build and Deploy

env:
  FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true

on:
  push:
    branches: [main]
  workflow_dispatch:
    inputs:
      environment:
        description: "Deployment environment"
        required: true
        default: "dev"
        type: choice
        options:
          - dev
          - production

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: ${{ github.event_name == 'workflow_dispatch' && inputs.environment || 'production' }}

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Lint
        run: npm run lint

      - name: Typecheck
        run: npm run typecheck

      - name: Test
        run: npm run test

      - name: Build static site
        run: npm run build

      - name: Upload static artifact
        uses: actions/upload-artifact@v4
        with:
          name: static-site
          path: out/
          if-no-files-found: error

      - name: Prepare SSH key
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.DREAMHOST_SSH_KEY }}" > ~/.ssh/dreamhost_key
          chmod 600 ~/.ssh/dreamhost_key
          ssh-keyscan -p "${{ vars.DREAMHOST_PORT || '22' }}" "${{ vars.DREAMHOST_HOST }}" >> ~/.ssh/known_hosts

      - name: Deploy to DreamHost
        run: |
          rsync -avz --delete \
            -e "ssh -i ~/.ssh/dreamhost_key -p ${{ vars.DREAMHOST_PORT || '22' }}" \
            out/ \
            "${{ vars.DREAMHOST_USER }}@${{ vars.DREAMHOST_HOST }}:${{ vars.DREAMHOST_TARGET_PATH }}"
```

## Important rsync caution

Only use `--delete` if the DreamHost target path is dedicated to this site.

If the target directory may contain unrelated files, remove `--delete` or deploy into a dedicated subdirectory.

## Deployment readiness checklist

Before enabling deployment:

- Confirm DreamHost SSH access.
- Confirm static web directory path.
- Confirm dev and production target paths are separate.
- Add GitHub environment variables and secrets.
- Test manual dev deployment first.
- Confirm production domain points to the correct DreamHost directory.
- Confirm merge to `main` deploys production.

## Suggested DreamHost path placeholders

Use placeholders until real values are known:

```text
production DREAMHOST_TARGET_PATH=/home/USERNAME/DOMAIN/
dev DREAMHOST_TARGET_PATH=/home/USERNAME/DEV_DOMAIN/
```

## Artifact behavior

Every deploy build should upload the `out/` folder as an artifact named `static-site`.

This provides a downloadable copy of the static site even when deployment fails.
