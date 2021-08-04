module.exports = {
  client: {
    service: {
      name: "graphql-client",
      url: "http://localhost:4000/graphql",
      //local copy can be downloaded using local schema file
      skipSSLValidation: true,
    },
  },
};
