# Pasta Landing Page Documentation

This document provides a comprehensive overview of the Pasta Landing Page codebase, explaining its structure, components, and functionality.

## Project Overview

This is a modern landing page built with SvelteKit, TypeScript, and Tailwind CSS. The project uses Supabase for backend services and includes Cloudflare Turnstile for bot protection.

## Project Structure

```
├── src/                    # Source code directory
│   ├── routes/            # SvelteKit routes and pages
│   ├── lib/               # Shared components and utilities
│   │   ├── components/    # Reusable UI components
│   │   ├── types/        # TypeScript type definitions
│   │   └── images/       # Image assets
│   ├── app.css           # Global styles
│   ├── app.d.ts          # TypeScript declarations
│   └── app.html          # HTML template
├── static/               # Static assets
├── build/               # Build output
└── various config files # Configuration files
```

## Key Files and Directories

### Configuration Files

- `svelte.config.js`: SvelteKit configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `vite.config.js`: Vite configuration
- `postcss.config.js`: PostCSS configuration
- `netlify.toml`: Netlify deployment configuration

### Source Code

#### Routes (`src/routes/`)

- `+page.svelte`: Main landing page component
- `+page.ts`: Page-specific TypeScript logic
- `+layout.svelte`: Root layout component
- `Header.svelte`: Navigation header component
- `about/`: About page directory (currently empty)

#### Components (`src/lib/components/`)

- `Turnstile.svelte`: Cloudflare Turnstile integration component for bot protection

#### Types (`src/lib/types/`)

- `turnstile.d.ts`: TypeScript definitions for Cloudflare Turnstile

#### Utilities (`src/lib/`)

- `supabase.ts`: Supabase client configuration
- `types.ts`: Global type definitions

### Environment Configuration

- `.env`: Environment variables (not committed to git)
- `.env.example`: Example environment variables template

## Key Features

1. **Modern Tech Stack**
   - SvelteKit for the framework
   - TypeScript for type safety
   - Tailwind CSS for styling
   - Vite for build tooling

2. **Backend Integration**
   - Supabase for backend services
   - Cloudflare Turnstile for bot protection

3. **Deployment**
   - Configured for Netlify deployment
   - GitHub Actions integration (`.github/` directory)

4. **Code Quality**
   - Prettier for code formatting
   - TypeScript for type checking
   - ESLint for linting

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in required values
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Development Guidelines

1. **Component Structure**
   - Components are placed in `src/lib/components/`
   - Page components are placed in `src/routes/`
   - Shared types are placed in `src/lib/types/`

2. **Styling**
   - Use Tailwind CSS classes for styling
   - Global styles are in `src/app.css`

3. **Type Safety**
   - All new components should be written in TypeScript
   - Define types in appropriate type definition files

4. **Code Formatting**
   - Use Prettier for consistent code formatting
   - Follow the project's ESLint rules

## Deployment

The project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary configuration for the build process and redirects.

## Security

- Environment variables are used for sensitive data
- Cloudflare Turnstile is implemented for bot protection
- Supabase policies are defined in `supabase-policy.sql`

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[Add license information here] 