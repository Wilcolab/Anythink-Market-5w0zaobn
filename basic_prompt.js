const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '');
};
