class FileController {
  constructor(fileService) {
    this.fileService = fileService;
    this.getFiles = this.getFiles.bind(this);
    console.log(this.getFiles.toString());
  }

  async getFiles(req, res) {
    try {
      const files = await this.fileService.getFiles();
      console.log("return from server", files);
      res.json(files);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
module.exports = FileController;
