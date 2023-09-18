const path = require('path');

exports.createPages = async ({ page,actions }) => {
    const { createPage } = actions;
    createPage({
        path: "/items/*",
        matchPath: '/items/*/*',
        component: path.resolve(`src/pages/items/id/index.tsx`),
      });
  };
  