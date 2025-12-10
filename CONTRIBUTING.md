# Contributing to MSDL Editor

Thank you for your interest in contributing to the MSDL Editor project! Please follow
these best practices to ensure a smooth workflow:

## 1. Fork the Repository

- Click the **Fork** button at the top right of the [repository page](https://github.com/orbat-mapper/msdl-editor) to
  create your own copy.

## 2. Clone Your Fork

```
git clone https://github.com/YOUR-USERNAME/msdl-editor.git
cd msdl-editor
```

## 3. Create a Branch

- Always create a new branch for your work:

```
git checkout -b your-feature-branch
```

## 4. Make Your Changes

- Make your changes in your branch.
- Follow the project's code style and conventions.
- This project uses [Prettier](https://prettier.io/) for code formatting. Please ensure your code is formatted before
  committing.
- You can automatically format your code by running:

```
pnpm run format
```

## 5. Rebase Regularly

- Keep your branch up to date with the main repository to maintain a linear git history:

```
git fetch upstream
# Rebase your branch on top of the latest main
git rebase upstream/main
```

- Resolve any conflicts that arise during the rebase.

## 6. Push and Create a Pull Request

- Push your branch to your fork:

```
git push origin your-feature-branch
```

- Open a Pull Request (PR) from your branch to the `main` branch of the main repository.
- Provide a clear description of your changes.

## 7. Respond to Feedback

- Be ready to make changes based on code review feedback.
- Rebase and update your PR as needed.

Thank you for helping improve MSDL Editor!
