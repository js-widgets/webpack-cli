// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  shortcode: 'fake',
  title: 'Fake Reviews',
  status: 'stable',
  description: 'Lists product reviews retrieved from Fake service.',
  settingsSchema: {
    type: 'object',
    properties: {
      fields: {
        type: 'object',
        properties: {
          'fake-id': {
            type: 'string',
            title: 'Fake ID',
            description:
              'The ID found within the fake reviews URL that activates the product reviews',
            examples: ['5e20addcac72e40024d9a00a'],
          },
        },
      },
    },
  },
  useExternalPeerDependencies: ['react-dom', 'react-slick'],
  additionalCustomProperties: {
    foo: ['is', 'a', 'bar'],
  },
};
