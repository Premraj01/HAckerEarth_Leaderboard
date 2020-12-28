/** @format */

import express from 'express'
import { getTeams } from '../controllers/teamsController.js'

const router = express.Router()

router.route('/').get(getTeams)

export default router
