# Personal Blog Specification

This specification outlines the design and development instructions for creating a personal blog using Vite and Vue.js, inspired by a modern design.

## Design Overview

The blog should have a clean and minimalist design similar to the attached image, featuring categories, and links to articles. There will be two main sections:

- **Blog**: For hosting articles categorized by interests (starting with "Tech").
- **About**: Featuring links to LinkedIn and GitHub.

## Architecture

- **Technology**: Vite, Vue.js
- **Hosting**: GitHub Pages
- **Content**: Articles stored as Markdown files and converted for display on the static site.
- **Package Manager**: Yarn

## Development Instructions

### Setup Vite and Vue.js

1. **Initialize the Project**:
    ```bash
    npm create vite@latest my-blog
    cd my-blog
    yarn install
    ```

2. **Install Additional Dependencies**:
    ```bash
    yarn add vue-router@4
    ```

3. **Setup Project Structure**:
    - Create directories:
      ```
      src/
      ├── components/
      ├── views/
      ├── assets/
      └── content/
      ```
    - Files:
      - `src/main.js`: Entry point for Vue application.
      - `src/components/`: Vue components for different sections.
      - `src/views/`: Pages for "Blog" and "About".
      - `src/assets/`: Styles and images.
      - `src/content/`: Markdown articles.

### Create Markdown Articles

- Store articles in a `src/content/` directory.
- Use frontmatter for metadata, e.g., title, date, author.
  
### Configure Routing

- Use `vue-router` for navigation between "Blog" and "About".

### Implement Design

- Use CSS and assets to mimic the sleek design.
- Add navigation bar with "Blog" and "About".
- Display articles using Vue components.

### Integrate Markdown

1. **Install Markdown Packages**:
    ```bash
    yarn add marked gray-matter
    ```

2. **Configure Vite for Markdown**:
    - Update `vite.config.js` to handle markdown files.

### Development Commands

- **Start Development Server**:
    ```bash
    yarn dev
    ```

- **Build for Production**:
    ```bash
    yarn build
    ```

- **Preview Production Build**:
    ```bash
    yarn preview
    ```

### Deployment

- **Build** the project:
    ```bash
    yarn build
    ```

- **Deploy** to GitHub Pages by pushing the `dist/` folder to your repo's `gh-pages` branch or using GitHub Actions.

### About Page

- Include your LinkedIn and GitHub links in the "About" section.

## Project Setup Progress

- ✅ Created new branch `blog-redesign`
- ✅ Backed up old site files to `old-site/` directory
- ✅ Initialized Vite project with Vue.js template
- ✅ Switched to Yarn package manager
- ✅ Installed base dependencies

## Next Steps

1. Install additional dependencies (vue-router, markdown processors)
2. Create basic layout and navigation
3. Implement blog listing and article display
4. Add styling inspired by the design
5. Create sample articles
6. Set up deployment workflow

## Git Workflow Guidelines

### Commit Best Practices

- **Small, focused commits**: Each commit should represent a single logical change
- **Clear commit messages**: Maximum 10 lines, first line should be a brief summary (50 chars max)
- **Commit message format**:
  ```
  feat: brief description of the feature
  
  - More detailed explanation if needed
  - What was changed and why
  - Any breaking changes or important notes
  ```

### Commit Types

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Workflow Commands

- **Stage changes**: `git add .` or `git add <specific-file>`
- **Commit changes**: `git commit -m "commit message"`
- **Push to remote**: `git push origin blog-redesign`
- **Check status**: `git status`
- **View changes**: `git diff`

### Example Commit Workflow

```bash
# Make changes
git add .
git commit -m "feat: add vue-router dependency

- Install vue-router@4 for navigation
- Update package.json with new dependency"
git push origin blog-redesign
```

## Future Enhancements

- Add more categories to the blog.
- Implement dynamic loading of articles.
- Enhance styling with animations.
- Add search functionality.
- Implement RSS feed.

---

This specification is a starting point and may evolve as development progresses.
