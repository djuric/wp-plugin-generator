const walk = require("walk");
const replace = require("replace");
const fse = require("fs-extra");

function updateFiles(searchReplaceMap, pluginDirOutputRepository, pluginSlug) {
  fse.renameSync(
    `${pluginDirOutputRepository}/plugin-name`,
    `${pluginDirOutputRepository}/${pluginSlug}`
  );

  const walkerOptions = {
    listeners: {
      file: function (root, fileStats, next) {
        const filePath = `${root}/${fileStats.name}`;

        // Replace relevant strings inside the file.
        for (searchReplace of searchReplaceMap) {
          replace({
            regex: searchReplace.regex,
            replacement: searchReplace.replacement,
            paths: [filePath],
            recursive: false,
            silent: true,
          });
        }

        // Rename file itself.
        const pattern = /plugin-name/gi;
        const newFilePath = filePath.replace(pattern, pluginSlug);
        fse.renameSync(filePath, newFilePath);

        next();
      },
      errors: function (root, nodeStatsArray, next) {
        next();
      },
    },
  };

  walk.walkSync(pluginDirOutputRepository, walkerOptions);
}

module.exports = updateFiles;
