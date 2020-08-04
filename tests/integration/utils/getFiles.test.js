const getFiles = require("../../../core/utils/getFiles");
const fs = require("fs");

describe("getFiles", () => {
  it("should create folder with downloaded repository", async () => {
    const { data } = await getFiles("my-new-plugin");
    const fileExists = await fs.promises.access(data.pluginDirOutput);
    expect(fileExists).toBe(undefined);
  });
});
