import { test } from '@japa/runner'
import Student from '#models/student'

test.group('Students', (group) => {
  group.each.setup(async () => {
    await Student.query().delete()
  })

  test('get all students', async ({ client }) => {
    await Student.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    })

    const response = await client.get('/api/v1/students')

    response.assertStatus(200)
    response.assertBodyContains([{ firstName: 'John' }])
  })
})
