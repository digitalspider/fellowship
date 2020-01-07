const fetch = require('isomorphic-unfetch');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };

    return paths;
  }
};
