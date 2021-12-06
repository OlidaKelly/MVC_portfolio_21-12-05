import { application } from 'express';
import projectsController from './controllers/projectsController.js';

export const setupRoutes = (app) => {
  app.use('/projects', projectsController)

}