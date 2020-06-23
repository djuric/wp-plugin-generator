const AdmZip = require("adm-zip");

function zipFiles(directory, zipTarget, pluginSlug) {
  const filepath = `${zipTarget}/${pluginSlug}.zip`;
  const zip = new AdmZip();

  zip.addLocalFolder(directory);
  zip.writeZip(filepath);

  return filepath;
}

module.exports = zipFiles;
