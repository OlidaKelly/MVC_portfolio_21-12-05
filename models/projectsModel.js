import connect from '../config/db-config.js';

//GET ALL
const findAllProjects = () => {
  return new Promise((resolve, reject) => {
    connect.query("SELECT * FROM projects", (err, results) => {
      if (err) reject(err)
      else resolve(results);
    })
  }) 
}

//GET ONE BY ID 
const getProjectById = (id) => {
  return new Promise((resolve, reject) => {
    connect.query("SELECT * FROM projects WHERE id = ?", id, (err, result) => {
        if (err) reject(err)
        else resolve(result)
    })
  })
}

//DELETE PROJECT BY ID
const deleteProjectById = (id) => {
  return new Promise((resolve, reject) => {
    connect.query("DELETE FROM projects WHERE id = ?", id, (err, result) => {
        if (err) reject(err)
        else resolve(result)
    })
  })
}

//CREATE PROJECT  
const createProject = (infosProject) => {
  return new Promise((resolve, reject) => {
    connect.query("INSERT INTO projects (title, content, created_date, image) VALUES (?, ?, ?, ?)", infosProject, (err, result) => {
        if (err) reject(err)
        else resolve(result)
    })
  })
}

//UPDATE PROJECT
const update = (infosProject, id) => {
  return new Promise((resolve, reject) => {
    connect.query("UPDATE projects SET title = ?, content = ?, created_date = ?, image = ? WHERE id = ?", infosProject, (err, result) => {
      if (err) reject(err)
      else {
        connect.query("SELECT * FROM projects WHERE id = ?", id, (err, res) => {
          if (err) reject(err)
          else resolve(res)
        })
      }
    })
  })
}



export default { findAllProjects, getProjectById, deleteProjectById, createProject, update }