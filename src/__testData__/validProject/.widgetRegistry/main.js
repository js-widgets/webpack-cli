module.exports = {
  register: [],
  webpackFinal: (config) => {
    return { ...config, mode: 'none' };
  },
  externalPeerDependencies: {
    react: {
      src: 'https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js',
      external: 'React',
    },
    'react-dom': {
      src: 'https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js',
      external: 'ReactDOM',
    },
    'react-intl': {
      src: 'https://cdn.jsdelivr.net/npm/react-intl@5/dist/react-intl.min.js',
      external: 'ReactIntl',
    },
    'react-slick': {
      src: 'https://cdn.jsdelivr.net/npm/react-slick@0/dist/react-slick.min.js',
      external: 'Slider',
    },
  },
};
