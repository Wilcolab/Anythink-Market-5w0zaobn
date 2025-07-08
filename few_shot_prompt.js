const toCamelCase = (str) => {
  return str
    .toLowerCase()                              // make the whole string lowercase
    .replace(/[-_\s]+(.)?/g, (_, char) =>       // match separator + next character
      char ? char.toUpperCase() : ''            // capitalize the next char, remove separator
    );
};
