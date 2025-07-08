const toKebabCase = (str) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')  // Insert hyphen before capitals
    .replace(/[\s_]+/g, '-')                 // Replace spaces and underscores with hyphens
    .toLowerCase();
};
