import { test } from '@japa/runner'
import type { ApiClient } from '@japa/api-client'
import Student from '#models/student'

const BASE_URL = '/api/v1/students'

/**
 * Helper to create a student for test setup
 */
async function createStudent(client: ApiClient, overrides = {}) {
  const response = await client.post(BASE_URL).json({
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    ...overrides,
  })
  return response.body() as { id: number }
}

test.group('Students', (group) => {
  group.each.setup(async () => {
    // Delete all existing student records to ensure a clean test environment
    await Student.query().delete()
  })

  test('get all students', async ({ client }) => {
    // Create a student record via POST
    await createStudent(client, { firstName: 'John' })

    // Fetch all students
    const response = await client.get(BASE_URL)

    // Check response is accurate
    response.assertStatus(200)
    response.assertBodyContains([{ firstName: 'John' }])
  })

  test('get single student', async ({ client }) => {
    // Create a student to get their ID
    const { id } = await createStudent(client, { firstName: 'Jane' })

    // Fetch the specific student
    const response = await client.get(`${BASE_URL}/${id}`)

    // Verify the correct student is returned
    response.assertStatus(200)
    response.assertBodyContains({ firstName: 'Jane' })
  })

  test('create a new student', async ({ client }) => {
    // Send student data to POST
    const response = await client.post(BASE_URL).json({
      firstName: 'Alice',
      lastName: 'Wonderland',
      email: 'alice@example.com',
    })

    // Assert the student was created successfully
    response.assertStatus(201)
    response.assertBodyContains({ firstName: 'Alice' })
  })

  test('update a student', async ({ client }) => {
    // Create a student to get their ID
    const { id } = await createStudent(client, { firstName: 'Bob' })

    // Update the student's first name
    const response = await client.put(`${BASE_URL}/${id}`).json({
      firstName: 'Robert',
    })

    // Verify the update was successful
    response.assertStatus(200)
    response.assertBodyContains({ firstName: 'Robert' })
  })

  test('delete a student', async ({ client }) => {
    // Create a student to get their ID
    const { id } = await createStudent(client, { firstName: 'Charlie' })

    // Delete the student
    const response = await client.delete(`${BASE_URL}/${id}`)

    // Verify the deletion was successful
    response.assertStatus(200)
  })
})
