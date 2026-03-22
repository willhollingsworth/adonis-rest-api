import { test } from '@japa/runner'
import Student from '#models/student'

test.group('Students', (group) => {
  group.each.setup(async () => {
    // Delete all existing student records to ensure a clean test environment
    await Student.query().delete()
  })

  test('get all students', async ({ client }) => {
    // Create a  student record via POST to /api/v1/students
    await client.post('/api/v1/students').json({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    })

    // Fetch all students via  GET /api/v1/students
    const response = await client.get('/api/v1/students')

    // check response is accurate
    response.assertStatus(200)
    response.assertBodyContains([{ firstName: 'John' }])
  })

  test('get single student', async ({ client }) => {
    // Create a student to get their ID
    const studentResponse = await client.post('/api/v1/students').json({
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
    })

    // Grab the id
    const studentId = (studentResponse.body() as { id: number }).id

    // Fetch the specific student
    const response = await client.get(`/api/v1/students/${studentId}`)

    // Verify the correct student is returned
    response.assertStatus(200)
    response.assertBodyContains({ firstName: 'Jane' })
  })

  test('create a new student', async ({ client }) => {
    // Send student data to POST /api/v1/students
    const response = await client.post('/api/v1/students').json({
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
    const studentResponse = await client.post('/api/v1/students').json({
      firstName: 'Bob',
      lastName: 'Builder',
      email: 'bob@example.com',
    })

    const studentId = (studentResponse.body() as { id: number }).id

    // Update the student's first name
    const response = await client.put(`/api/v1/students/${studentId}`).json({
      firstName: 'Robert',
    })

    // Verify the update was successful
    response.assertStatus(200)
    response.assertBodyContains({ firstName: 'Robert' })
  })
})
