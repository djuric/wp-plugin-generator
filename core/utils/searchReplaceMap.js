const { slugToPackageName, slugToInstanceName } = require("../helpers");

function searchReplaceMap(input) {
  return [
    {
      regex: "http://example.com/plugin-name-uri/",
      replacement: input.pluginUri,
    },
    {
      regex: "WordPress Plugin Boilerplate",
      replacement: input.pluginName,
    },
    {
      regex: "Your Name or Your Company",
      replacement: input.authorName,
    },
    {
      regex: "Your Name <email@example.com>",
      replacement: input.authorEmail,
    },
    {
      regex: "http://example.com/",
      replacement: input.authorUri,
    },
    {
      regex: "Plugin_Name",
      replacement: slugToPackageName(input.pluginSlug),
    },
    {
      regex: "plugin-name",
      replacement: input.pluginSlug,
    },
    {
      regex: "PLUGIN_NAME_VERSION",
      replacement:
        slugToInstanceName(input.pluginSlug).toUpperCase() + "_VERSION",
    },
    {
      regex: "plugin_name",
      replacement: slugToInstanceName(input.pluginSlug),
    },
  ];
}

module.exports = searchReplaceMap;
