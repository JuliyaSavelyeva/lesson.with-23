window.addEventListener('error', function onUnhandledError(e) {
  console.log(e);
});

try {
  const jsonString = '{"name": "Tom"}';
  throw new ReferenceError();
  const userData = JSON.parse(jsonString);
  console.log(userData);
} catch (err) {
  if (err instanceof SyntaxError) {
    console.error('handled');
  } else {
    throw err;
  }
} finally {
  console.log('some action');
}
