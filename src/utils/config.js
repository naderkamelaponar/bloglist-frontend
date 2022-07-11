// بسم الله الرحمن الرحيم
//const appEnv =  process.env.REACT_APP_ENV ? process.env.REACT_APP_ENV :null
const baseUrl =
process.env.REACT_APP_ENV ===' '   ? process.env.REACT_APP_BASE_URI :process.env.REACT_APP_BASE_URI_DEV
export default { baseUrl }

