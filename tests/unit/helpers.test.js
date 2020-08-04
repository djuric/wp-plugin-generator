const {
  toCapitalize,
  slugToPackageName,
  slugToInstanceName,
} = require("../../core/helpers");

describe("toCapitalize", () => {
  it("should return capitalized string if lowercase string is given", () => {
    const result = toCapitalize("test");
    expect(result).toBe("Test");
  });
});

describe("slugToPackageName", () => {
  it("should return package name if slug is given", () => {
    const result = slugToPackageName("test-package-name");
    expect(result).toBe("Test_Package_Name");
  });
});

describe("slugToInstanceName", () => {
  it("should return instance name if slug is given", () => {
    const result = slugToInstanceName("test-package-name");
    expect(result).toBe("test_package_name");
  });
});
