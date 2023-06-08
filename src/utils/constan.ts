function URL_API(): string {
  if (process.env.URL_API !== undefined) {
    return process.env.URL_API;
  }

  return "";
}

function URL_THIS(): string {
  if (process.env.URL_THIS !== undefined) {
    return process.env.URL_THIS;
  }

  return "";
}

const env = {
  url_api: URL_API(),
  url_this: URL_THIS(),
};

export default env;
