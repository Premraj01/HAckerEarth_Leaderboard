/** @format */

import {
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_DETAILS_FAIL,
} from '../constants/leaderboardConstants'

export const teamDetailsReducer = (state = { teams: [] }, action) => {
  switch (action.type) {
    case TEAM_DETAILS_REQUEST:
      return { loading: true, teams: [] }
    case TEAM_DETAILS_SUCCESS:
      return {
        loading: false,
        teams: action.payload,
      }
    case TEAM_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
