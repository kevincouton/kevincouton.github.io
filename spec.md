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
- ✅ Installed additional dependencies (vue-router, marked, gray-matter)
- ✅ Created router configuration
- ✅ Created Layout component with header navigation
- ✅ Implemented Home view with hero section and blog grid
- ✅ Created About view with personal info and social links
- ✅ Created BlogPost view for individual articles
- ✅ Applied glassmorphism design with gradient backgrounds
- ✅ Added responsive design and hover effects
- ✅ Set up proper git workflow with structured commits

## Next Steps

1. ✅ ~~Install additional dependencies (vue-router, markdown processors)~~
2. ✅ ~~Create basic layout and navigation~~
3. ✅ ~~Implement blog listing and article display~~
4. ✅ ~~Add styling inspired by the design~~
5. Create sample markdown articles in content directory
6. Integrate markdown processing for dynamic content
7. Set up deployment workflow for GitHub Pages
8. Add SEO meta tags and optimization
9. Test and refine responsive design

## Best Practices

### Vue.js Best Practices

#### Component Structure
- **Single File Components (SFC)**: Use `.vue` files with `<template>`, `<script>`, and `<style>` sections
- **Composition API**: Prefer Composition API for complex logic and better TypeScript support
- **Component Naming**: Use PascalCase for component names (e.g., `BlogPost.vue`)
- **Props Validation**: Always define prop types and validation
- **Event Naming**: Use kebab-case for custom events

#### Code Organization
- **Folder Structure**: Organize components logically (`components/`, `views/`, `composables/`)
- **Composables**: Extract reusable logic into composables (use `use` prefix)
- **Constants**: Store constants in separate files or at the top of components
- **Reactive Data**: Use `ref()` for primitives, `reactive()` for objects

#### Performance
- **Lazy Loading**: Use dynamic imports for route-based code splitting
- **v-memo**: Use for expensive list rendering when appropriate
- **Computed Properties**: Prefer computed over methods for derived data
- **Key Attribute**: Always use unique keys in v-for loops

### Vite Best Practices

#### Configuration
- **Environment Variables**: Use `.env` files for environment-specific config
- **Path Aliases**: Configure path aliases in `vite.config.js` for cleaner imports
- **Build Optimization**: Configure build options for production optimization
- **Plugin Management**: Keep plugins organized and documented

#### Development
- **Hot Module Replacement (HMR)**: Leverage Vite's fast HMR for development
- **Asset Handling**: Use Vite's built-in asset handling for images, fonts, etc.
- **CSS Preprocessing**: Configure CSS preprocessors when needed
- **Bundle Analysis**: Use `yarn build --analyze` to analyze bundle size

#### Performance
- **Code Splitting**: Implement route-based and component-based code splitting
- **Tree Shaking**: Ensure dependencies support tree shaking
- **Import Optimization**: Use specific imports to reduce bundle size
- **Static Assets**: Optimize images and other static assets

### CSS Best Practices

#### Scoped Styles
- **Scoped CSS**: Use `scoped` attribute to prevent style leakage
- **CSS Modules**: Consider CSS modules for component-specific styles
- **Global Styles**: Keep global styles minimal and well-organized
- **CSS Variables**: Use CSS custom properties for consistent theming

#### Responsive Design
- **Mobile First**: Design for mobile devices first, then enhance for larger screens
- **Breakpoint Management**: Use consistent breakpoints across the application
- **Flexible Units**: Use relative units (rem, em, %) for better scalability
- **Container Queries**: Consider container queries for component-level responsiveness

### Accessibility Best Practices

#### Semantic HTML
- **Proper Elements**: Use semantic HTML elements (`<main>`, `<article>`, `<section>`)
- **Heading Hierarchy**: Maintain proper heading hierarchy (h1, h2, h3, etc.)
- **Alt Text**: Provide descriptive alt text for images
- **Focus Management**: Ensure proper focus management for keyboard navigation

#### ARIA Support
- **ARIA Labels**: Use ARIA labels for screen readers
- **Role Attributes**: Add appropriate role attributes when needed
- **Live Regions**: Use ARIA live regions for dynamic content updates
- **Color Contrast**: Ensure sufficient color contrast for text readability

### Security Best Practices

#### Content Security
- **XSS Prevention**: Sanitize user input and use v-html carefully
- **Environment Variables**: Never expose sensitive data in client-side code
- **Dependencies**: Regularly update dependencies and audit for vulnerabilities
- **HTTPS**: Always use HTTPS in production

### Testing Best Practices

#### Unit Testing
- **Test Coverage**: Aim for meaningful test coverage, not just high percentages
- **Test Structure**: Use arrange-act-assert pattern for clear tests
- **Mock Dependencies**: Mock external dependencies appropriately
- **Component Testing**: Test component behavior, not implementation details

#### End-to-End Testing
- **User Flows**: Test critical user flows and interactions
- **Cross-browser Testing**: Test across different browsers and devices
- **Performance Testing**: Include performance tests for critical paths
- **Accessibility Testing**: Automated accessibility testing integration

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
