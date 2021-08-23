import listFilesSync from './listFilesSync';

describe('listFilesSync', () => {
  it('shows all the files', () => {
    expect.assertions(1);
    expect(listFilesSync(`${__dirname}/../__testData__`)).toMatchSnapshot();
  });
});
