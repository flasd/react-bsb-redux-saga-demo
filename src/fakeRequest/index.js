function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async function fakeRequest(url) {
  const [, query] = url.split('?');

  await new Promise((resolve) =>
    setTimeout(() => resolve(), getRandomIntInclusive(50, 250)),
  );

  return new Array(5)
    .fill(0)
    .map((x, index) => new Array(index).fill(0).map(() => query))
    .map((suggestion) => `${query}${suggestion.join('')}`);
}
