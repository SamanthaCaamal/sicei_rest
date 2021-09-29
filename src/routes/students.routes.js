import {Router} from 'express'
const router = Router()

import * as studentsCtrl from '../controllers/students.controller'

router.get('/', studentsCtrl.getStudents)

export default router;