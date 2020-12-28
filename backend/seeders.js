/** @format */

import mongoose from 'mongoose'
import Teams from './models/Teams.js'
import dotenv from 'dotenv'
import teams from './data/teams.js'
import connctDB from './config/db.js'

dotenv.config()

connctDB()

const importData = async () => {
  try {
    await Teams.deleteMany()

    await Teams.insertMany(teams)

    console.log('Data imported...!')
    process.exit()
  } catch (error) {
    console.log(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Teams.deleteMany()

    console.log('Data destroyed...!')
    process.exit()
  } catch (error) {
    console.log(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
