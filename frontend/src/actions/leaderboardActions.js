/** @format */

import axios from 'axios'

import {
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_DETAILS_FAIL,
} from '../constants/leaderboardConstants'

export const getTeams = (keyword = '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({
      type: TEAM_DETAILS_REQUEST,
    })

    const { data } = await axios.get(`/api/team`)

    dispatch({
      type: TEAM_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TEAM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
