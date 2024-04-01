const fs = require("fs").promises;
const path = require("path");

class FileService {
  constructor() {
    this.directoryPath = path.join(__dirname, "../", "data");
  }
  async getFiles() {
    let fileContents = [];
    try {
      const files = await fs.readdir(this.directoryPath, {
        withFileTypes: true,
      });
      for (let file of files) {
        if (file.isFile() && path.extname(file.name) === ".json") {
          const filePath = path.join(this.directoryPath, file.name);
          const data = await fs.readFile(filePath, "utf8");
          fileContents.push({
            fileName: file.name,
            tables: JSON.parse(data).tables,
          });
        }
      }
    } catch (error) {
      throw new Error(
        `Error listing .json files in directory ${this.directoryPath}: ${error}`,
      );
    }
    return fileContents;
  }
}

module.exports = FileService;
