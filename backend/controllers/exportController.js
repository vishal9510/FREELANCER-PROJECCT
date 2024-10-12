const { Parser } = require('json2csv');
const Project = require('../model/project.model');



const exportproject = async (req, res) => {
    try {
        const projects = await Project.find();
        const jsonProjects = projects.map(p => p.toObject());

        const fields = ['_id', 'name', 'client', 'status', 'budget'];
        const json2csv = new Parser({ fields });
        const csv = json2csv.parse(jsonProjects);

        res.header('Content-Type', 'text/csv');
        res.attachment('projects.csv');
        res.send(csv);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    exportproject,
}