const Project = require('../model/project.model');
const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });

const importproject = async (req, res) => {
    upload.single('file');
    const filePath = req.file.path;
    const results = [];

    fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            try {
                await Project.insertMany(results);
                res.status(200).json({ message: 'Data imported successfully!' });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
};


module.exports = {
    importproject,
}