/** @format */
import asyncHandler from 'express-async-handler'
import Teams from '../models/Teams.js'

//@desc Get the team details data
//@route POST /api/team/
//@access Public

const getTeams = asyncHandler(async (req, res) => {
  try {
    const teams = await Teams.find()
    res.json(teams)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

export { getTeams }
