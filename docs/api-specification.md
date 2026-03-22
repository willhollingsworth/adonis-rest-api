# Student Enrolment System API Specification

**Base URL:** `/api/v1`

| Method | Endpoint | Controller Action | Description | Success Response |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/students` | `index` | Retrieve all registered students | `200 OK` |
| **GET** | `/students/{id}` | `show` | Retrieve details of a specific student | `200 OK` |
| **POST** | `/students` | `store` | Register a new student | `201 Created` |
| **PUT** | `/students/{id}` | `update` | Full update of student details | `200 OK` / `204` |
| **PATCH** | `/students/{id}` | `update` | Partial update of student details | `200 OK` |
| **DELETE** | `/students/{id}` | `destroy` | Remove a student from the system | `200 OK` / `204` |

## Technical Requirements
- **Framework:** AdonisJS v6 (TypeScript/ESM).
- **ORM:** Lucid (SQLite).
- **Standardization:** All responses must be JSON.
