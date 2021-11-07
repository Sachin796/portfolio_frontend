const axios = require("axios");

const API = () => {
  return {
    getResume: () => {
      axios
        .get(
          `${process.env.REACT_APP_LINK}/api/download/Resume-Sachin-Jhaveri.pdf`
        )
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    },

    getTechSkills: async () => {
      let techskills = await axios
        .get(`${process.env.REACT_APP_LINK}/api/techskills/`)
        .then((res) => res.data.data[0])
        .catch((err) => console.error(err));
      return techskills;
    },

    getFrontEndSkills: async () => {
      let frontend = await axios
        .get(`${process.env.REACT_APP_LINK}/api/techskills/frontEnd`)
        .then((res) => res.data.data)
        .catch((err) => console.error(err));
      return frontend;
    },

    getBackEndSkills: () => {
      return axios
        .get(`${process.env.REACT_APP_LINK}/api/techskills/backEnd`)
        .then((res) => res.data.data)
        .catch((err) => console.error(err));
    },

    getDatabaseSkills: () => {
      return axios
        .get(`${process.env.REACT_APP_LINK}/api/techskills/database`)
        .then((res) => res.data.data)
        .catch((err) => console.error(err));
    },

    getProgrammingSkills: () => {
      return axios
        .get(`${process.env.REACT_APP_LINK}/api/techskills/programming`)
        .then((res) => res.data.data)
        .catch((err) => console.error(err));
    },

    sendEmail: function (req, res) {
      return axios
        .post(`${process.env.REACT_APP_LINK}/api/sendEmail`, {
          req,
        })
        .then((res) => res)
        .catch((err) => console.error(err));
    },
  };
};

export default API();
