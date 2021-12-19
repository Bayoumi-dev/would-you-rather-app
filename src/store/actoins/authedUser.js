export const SET_AUTHED_USER= 'authedUser/setAuthedUser'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    payload: id,
  }
}