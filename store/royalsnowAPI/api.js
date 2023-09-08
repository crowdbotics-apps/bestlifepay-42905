import axios from "axios"
const royalsnowAPI = axios.create({
  baseURL: "https://bestlifepay-42905.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return royalsnowAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_consumeroffer_list(payload) {
  return royalsnowAPI.get(`/api/v1/consumeroffer/`)
}
function api_v1_consumeroffer_create(payload) {
  return royalsnowAPI.post(`/api/v1/consumeroffer/`, payload.data)
}
function api_v1_consumeroffer_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/consumeroffer/${payload.id}/`)
}
function api_v1_consumeroffer_update(payload) {
  return royalsnowAPI.put(`/api/v1/consumeroffer/${payload.id}/`, payload.data)
}
function api_v1_consumeroffer_partial_update(payload) {
  return royalsnowAPI.patch(
    `/api/v1/consumeroffer/${payload.id}/`,
    payload.data
  )
}
function api_v1_consumeroffer_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/consumeroffer/${payload.id}/`)
}
function api_v1_importedfile_list(payload) {
  return royalsnowAPI.get(`/api/v1/importedfile/`)
}
function api_v1_importedfile_create(payload) {
  return royalsnowAPI.post(`/api/v1/importedfile/`, payload.data)
}
function api_v1_importedfile_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/importedfile/${payload.id}/`)
}
function api_v1_importedfile_update(payload) {
  return royalsnowAPI.put(`/api/v1/importedfile/${payload.id}/`, payload.data)
}
function api_v1_importedfile_partial_update(payload) {
  return royalsnowAPI.patch(`/api/v1/importedfile/${payload.id}/`, payload.data)
}
function api_v1_importedfile_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/importedfile/${payload.id}/`)
}
function api_v1_loanaccount_list(payload) {
  return royalsnowAPI.get(`/api/v1/loanaccount/`)
}
function api_v1_loanaccount_create(payload) {
  return royalsnowAPI.post(`/api/v1/loanaccount/`, payload.data)
}
function api_v1_loanaccount_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/loanaccount/${payload.id}/`)
}
function api_v1_loanaccount_update(payload) {
  return royalsnowAPI.put(`/api/v1/loanaccount/${payload.id}/`, payload.data)
}
function api_v1_loanaccount_partial_update(payload) {
  return royalsnowAPI.patch(`/api/v1/loanaccount/${payload.id}/`, payload.data)
}
function api_v1_loanaccount_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/loanaccount/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return royalsnowAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_payment_list(payload) {
  return royalsnowAPI.get(`/api/v1/payment/`)
}
function api_v1_payment_create(payload) {
  return royalsnowAPI.post(`/api/v1/payment/`, payload.data)
}
function api_v1_payment_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/payment/${payload.id}/`)
}
function api_v1_payment_update(payload) {
  return royalsnowAPI.put(`/api/v1/payment/${payload.id}/`, payload.data)
}
function api_v1_payment_partial_update(payload) {
  return royalsnowAPI.patch(`/api/v1/payment/${payload.id}/`, payload.data)
}
function api_v1_payment_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/payment/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return royalsnowAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return royalsnowAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return royalsnowAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return royalsnowAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return royalsnowAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return royalsnowAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return royalsnowAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return royalsnowAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return royalsnowAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return royalsnowAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return royalsnowAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return royalsnowAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_consumeroffer_list,
  api_v1_consumeroffer_create,
  api_v1_consumeroffer_retrieve,
  api_v1_consumeroffer_update,
  api_v1_consumeroffer_partial_update,
  api_v1_consumeroffer_destroy,
  api_v1_importedfile_list,
  api_v1_importedfile_create,
  api_v1_importedfile_retrieve,
  api_v1_importedfile_update,
  api_v1_importedfile_partial_update,
  api_v1_importedfile_destroy,
  api_v1_loanaccount_list,
  api_v1_loanaccount_create,
  api_v1_loanaccount_retrieve,
  api_v1_loanaccount_update,
  api_v1_loanaccount_partial_update,
  api_v1_loanaccount_destroy,
  api_v1_login_create,
  api_v1_payment_list,
  api_v1_payment_create,
  api_v1_payment_retrieve,
  api_v1_payment_update,
  api_v1_payment_partial_update,
  api_v1_payment_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
