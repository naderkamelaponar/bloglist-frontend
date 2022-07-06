// بسم الله الرحمن الرحيم
const baseUrl =
   !process.env.REACT_APP_ENV  ? process.env.REACT_APP_BASE_URI: process.env.REACT_APP_BASE_URI_DEV ;
module.exports = {
	baseUrl
};
