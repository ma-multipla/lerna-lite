import glob from 'glob';
import path from 'path';
import rimraf from 'rimraf';
import tempDir from 'temp-dir';

glob(path.join(tempDir, '/lerna-*'), (error, deleteFiles) => {
  // delete silently all files/folders that startsWith "lerna-"
  (deleteFiles || []).forEach((file) => rimraf(file, () => {}));
});
