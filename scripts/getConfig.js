const fs = require('fs');

const { doQuery } = require('./dato');

const getConfig = async () => {
  const q = `
  query config {
    site: _site {
      locales
      faviconMetaTags {
        tag
        content
        attributes
      }
    }
    menu: allMenuItems(filter: {parent: {exists: "false"}}) {
      ...menuItemFrag
      parent {
        ...menuItemFrag
        parent {
          ...menuItemFrag
        }
      }
    }
    footer {
      info
      logo {
        responsiveImage(imgixParams: {auto: format, maxW: "600"}) {
          src
        }
      }
      socials {
        id
        link
        title
        image {
          url(imgixParams: {auto: format, h: "80"})
        }
      }
      sections {
        id
        links {
          slugs: _allSlugLocales {
            locale
            value
          }
          titles: _allTitleLocales {
            locale
            value
          }
        }
      }
    }
  }
  fragment menuItemFrag on MenuItemRecord {
    id
    titles: _allTitleLocales {
      locale
      title: value
    }
    slugs: _allSlugLocales {
      locale
      slug: value
    }
    link {
      __typename
      ... on HomeRecord {
        id
      }
      ... on PageRecord {
        id
        slug
        title
        indexType
        isIndex
      }
    }
  }
`;
  return doQuery(q);
};

const updateConfig = async () => {
  const data = await getConfig();
  if (data) {
    const json = JSON.stringify(data, null, 2);
    fs.writeFileSync('data/config.json', json);
    console.log('Config Updated');
  }
};

// (async () => {
//   await updateConfig();
// })();

module.exports = updateConfig;
