const getFiles = require("./utils/getFiles");
const updateFiles = require("./utils/updateFiles");
const zipFiles = require("./utils/zipFiles");
const searchReplaceMap = require("./utils/searchReplaceMap");
const validate = require("./validate");

async function generate(input) {
  const { error } = validate(input);
  if (error)
    return {
      data: undefined,
      error: error.details[0].message,
    };

  const { data } = await getFiles(input.pluginSlug);
  if (!data)
    return {
      data: undefined,
      error: "Unable to download remote repository.",
    };

  const map = searchReplaceMap(input);
  updateFiles(map, data.pluginDirOutputRepository, input.pluginSlug);

  const filepath = zipFiles(
    data.pluginDirOutputRepository + "/" + data.pluginSlug,
    data.pluginDirOutput,
    input.pluginSlug
  );

  return {
    data: filepath,
    error: undefined,
  };
}

module.exports = generate;
