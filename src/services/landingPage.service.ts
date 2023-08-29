import makeAnApiCall from "."

const getIntro = () => {
  return 'Hello world! welcome to react typescript boilerplate!'
}

const getMockData = () => {
  return makeAnApiCall('https://jsonplaceholder.typicode.com/posts', 'GET')
}

export {
  getIntro,
  getMockData
}