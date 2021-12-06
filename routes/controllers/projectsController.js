import express, { json, Router } from 'express';
import Projects from '../../models/projectsModel.js'

const router = express.Router();

//GET 
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.findAllProjects();
    res.send(projects);
  } catch (error) {
    res.status(500).json('Error server, Try again !');
    
  }
});

//GET ON BY ID
router.get("/:id", async (req, res) => {
  const idProject = Number(req.params.id);
  try {
    const project = await Projects.getProjectById(idProject);
    project.length > 0 ? res.send(project) : res.send("Id not found");
  } catch (error) {
    res.status(500).json('Error server, Try again for find one project !');
  }
});

//DELETE BY ID
router.delete("/:id", async (req, res) => {
  const idProject = Number(req.params.id);
  try {
    const project = await Projects.deleteProjectById(idProject)
    res.send(`The project ${idProject} has been deleted`)
  } catch (error) {
    res.status(500).json('Error server, Try again for delete project !');
  }
});

//CREATE (POST)
router.post("/", async (req, res) => {
  console.log(req.body)
  const newProjectInfos = [
    String(req.body.title),
    String(req.body.content),
    String(req.body.created_date),
    String(req.body.image),
  ];
  try {
    const newProject = await Projects.createProject(newProjectInfos);
    res.send(String(newProject.insertId))
  } catch (error) {
    console.log(error);
    res.status(500).json('Error server, try again for create one project !');
  }
});

//UPDATE (PUT)
router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateProject = [
    String(req.body.title),
    String(req.body.content),
    String(req.body.created_date),
    String(req.body.image),
    id
  ];
  try {
    const project = await Projects.update(updateProject, id);
    project.length > 0 ? res.send(project) : res.send("Id not found");
  } catch (error) {
    console.log(error);
    res.status(500).json('Error server, try again for update project !');
  }
});


export default router;