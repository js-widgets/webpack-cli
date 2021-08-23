import https from 'https';
import http from 'http';

/**
 * Downloads the contents of the HTTP[S] locator.
 */
export default async function downloadFileContents(
  theUrl: URL,
): Promise<string> {
  const proto = theUrl.protocol.replace(/:$/, '') === 'https' ? https : http;

  return new Promise((resolve, reject) => {
    let contents = '';

    const request = proto.get(theUrl.href, (response) => {
      if (response.statusCode !== 200) {
        reject(
          new Error(`Failed to get '${theUrl.href}' (${response.statusCode})`),
        );
        return;
      }

      response.on('end', () => resolve(contents));
      response.on('data', (data) => {
        contents = contents + data;
      });
      response.on('error', reject);
    });

    request.end();
  });
}
