const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '');
};

const toDotCase = (str) => {
  return str
    // Insert space before capital letters (for camelCase or PascalCase)
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    // Replace all separators (space, underscore, hyphen) with a dot
    .replace(/[\s_-]+/g, '.')
    // Convert the entire string to lowercase
    .toLowerCase();
};
