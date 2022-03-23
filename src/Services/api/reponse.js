export function Response(response) {
  if (response.results) {
    return response.results
  }
  if (response.data) {
    return response.data
  }
  return response
}

export function Error(error) {
  if (error.data) {
    return error.data
  }
  return error
}
