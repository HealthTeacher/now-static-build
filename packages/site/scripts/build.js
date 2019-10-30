const fs = require("fs");

fs.mkdir(`${process.cwd()}/public`, error => {
  error => {
    if (error) {
      throw error;
    }
  };

  fs.copyFile(
    `${process.cwd()}/src/index.html`,
    `${process.cwd()}/public/index.html`,
    error => {
      if (error) {
        throw error;
      }
    }
  );
});
