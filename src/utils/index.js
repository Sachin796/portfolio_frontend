const axios = require("axios");

export default {
  getResume: function () {
    return axios
      .get(
        `${process.env.REACT_APP_RESUME_URL}/api/download/Resume-Sachin-Jhaveri.pdf`
      )
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  },

  getTechSkills: async () => {
    let techskills = await axios
      .get(`${process.env.REACT_APP_ALL_TECHSKILLS}`)
      .then((res) => res.data.data[0])
      .catch((err) => console.error(err));
    return techskills;
  },

  getFrontEndSkills: async () => {
    let frontend = await axios
      .get(`${process.env.REACT_APP_FRONTEND_SKILLS}`)
      .then((res) => res.data.data)
      .catch((err) => console.error(err));
    return frontend;
  },

  getBackEndSkills: () => {
    return axios
      .get(`${process.env.REACT_APP_BACKEND_SKILLS}`)
      .then((res) => res.data.data)
      .catch((err) => console.error(err));
  },

  getDatabaseSkills: () => {
    return axios
      .get(`${process.env.REACT_APP_DATABASE_SKILLS}`)
      .then((res) => res.data.data)
      .catch((err) => console.error(err));
  },

  getProgrammingSkills: () => {
    return axios
      .get(`${process.env.REACT_APP_PROGRAMMING_SKILLS}`)
      .then((res) => res.data.data)
      .catch((err) => console.error(err));
  },

  sendEmail: function (req, res) {
    return axios
      .post(`${process.env.REACT_APP_SEND_EMAIL}`, {
        req,
      })
      .then((res) => res)
      .catch((err) => console.error(err));
  },
};
