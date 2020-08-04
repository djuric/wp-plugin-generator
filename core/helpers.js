/**
 * Capitalize the string.
 *
 * @param {string} Value to convert to uppercase.
 */
function toCapitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * Convert slug to package name by removing dashes (if any)
 * and capitalizing each first letter
 *
 * @param {string} slug Slug to convert
 * @return {string} Valid package name
 */
function slugToPackageName(slug) {
  const slugLowercase = slug.toLowerCase();
  const slugSplit = slugLowercase.split("-");

  if (slugSplit.length === 1) return toCapitalize(slugLowercase);

  return slugSplit.reduce((previousValue, currentValue, currentIndex) => {
    if (currentIndex === 0) return previousValue;

    return previousValue + "_" + toCapitalize(currentValue);
  }, toCapitalize(slugSplit[0]));
}

/**
 * Convert slug to instance name.
 *
 * @param {string} slug Slug to convert
 * @return {string} Instance name
 */
function slugToInstanceName(slug) {
  const slugLowercase = slug.toLowerCase();
  return slugLowercase.replace(/-/g, "_");
}

module.exports = {
  toCapitalize,
  slugToPackageName,
  slugToInstanceName,
};
