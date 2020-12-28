/** @format */

import mongoose from 'mongoose'

const teamSchema = mongoose.Schema(
  {
    team_name: {
      type: String,
      required: true,
    },
    wins: {
      type: Number,
      required: true,
      default: 0,
    },

    losses: {
      type: Number,
      required: true,
      default: 0,
    },

    ties: {
      type: Number,
      required: true,
      default: 0,
    },

    score: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Team = mongoose.model('Team', teamSchema)

export default Team
