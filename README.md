# MSDL editor

A basic viewer and editor for Military Scenario Definition Language (MSDL) files. A companion project
to [msdllib](https://github.com/orbat-mapper/msdllib). Try the live demo at https://msdl-editor.pages.dev.

[Contributing Guidelines](CONTRIBUTING.md) | [Documentation](docs/)

## Project Setup

### Clone the Repository

```sh
git clone https://github.com/orbat-mapper/msdl-editor.git
cd msdl-editor
```

### Install Dependencies

This project uses [pnpm](https://pnpm.io/) as its package manager. If you don't have it installed, check out
the [pnpm installation guide](https://pnpm.io/installation).

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

## Documentation

This project includes documentation built with VitePress:

```sh
# Start documentation dev server
pnpm run docs:dev

# Build documentation
pnpm run docs:build

# Preview built documentation
pnpm run docs:preview
```
