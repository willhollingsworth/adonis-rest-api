
# Adonis REST API

[![AdonisJS](https://img.shields.io/badge/AdonisJS-v6-green.svg?style=flat&logo=adonisjs)](https://adonisjs.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue.svg)](https://www.typescriptlang.org/)
[![SQLite](https://img.shields.io/badge/SQLite-sqlite3-orange.svg)](https://www.sqlite.org/)
[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev/)

A learning project for a student enrolment system using AdonisJS.

## Links
- [ API Specification](./docs/api-specification.md)

## Features
- Full CRUD on `/students` resource (GET, POST, PUT, PATCH, DELETE)
- Lucid ORM + SQLite (sqlite3)
- TypeScript + ESM (AdonisJS v6)
- Biome for fast linting, formatting, and import sorting

## Development

### Scripts
- `npm run dev`: Start the development server.
- `npm run check`: Run Biome to lint and format the codebase.
- `npm run lint`: Run Biome linting.
- `npm run format`: Run Biome formatting.
- `npm run typecheck`: Run TypeScript type check.

### VSCode Integration
This project is pre-configured for Biome in VSCode. 
1. Install the [Biome VSCode extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome).
2. The project settings will automatically set Biome as the default formatter and enable "Format on Save".
