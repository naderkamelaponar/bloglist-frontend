// بسم الله الرحمن الرحيم

console.log( process.env.REACT_APP_ENV)
const baseUrl =
   process.env.REACT_APP_ENV === "dev" ? process.env.REACT_APP_BASE_URI_DEV : process.env.REACT_APP_BASE_URI;

module.exports = {
	baseUrl
};
