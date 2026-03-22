import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'

export default class StudentsController {
  /**
   * Display a list of resource
   */
  async index(_: HttpContext) {
    return await Student.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const student = await Student.create(request.all())
    return response.created(student)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await Student.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    return await student.merge(request.all()).save()
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    await student.delete()
  }
}

