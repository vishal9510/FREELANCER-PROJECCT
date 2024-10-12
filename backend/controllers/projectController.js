const Project = require('../model/project.model');



const createproject = async (req, res) => {
    const { name, client, budget } = req.body;
    try {
       
        const project = new project({
            name,
            client,
            budget,
        });
        await Project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json(project);
        
    } catch (err) {
        res.status(404).json({ message: "Project not found" });
    }
};

const projectupdate = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

   
};


const deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: "Project not found" });
    }
};


module.exports = {
    createproject,
    projectupdate,
    deleteProject,
    getProject,
 
};
