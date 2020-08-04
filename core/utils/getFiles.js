let downloadGitRepo = require("download-git-repo");
const util = require("util");
const config = require("config");

downloadGitRepo = util.promisify(downloadGitRepo);

async function getFiles(pluginSlug) {
  const timestamp = new Date().getTime();
  const pluginDirOutput = `${config.pluginOutputDir}/${pluginSlug}-${timestamp}`;
  const pluginDirOutputRepository = `${pluginDirOutput}/repository`;

  try {
    await downloadGitRepo(config.targetRepository, pluginDirOutputRepository);
    return {
      data: {
        pluginDirOutput,
        pluginDirOutputRepository,
        pluginSlug,
      },
    };
  } catch (e) {
    return {
      data: undefined,
    };
  }
}

module.exports = getFiles;
