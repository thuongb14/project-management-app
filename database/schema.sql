DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS project_tasks;
DROP TABLE IF EXISTS lists CASCADE;

CREATE TABLE users (
    userID SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    profilePic TEXT,
    admin BOOLEAN
);

CREATE TABLE projects (
    projectID SERIAL PRIMARY KEY,
    project_name TEXT,
    members VARCHAR(50)
);


CREATE TABLE project_tasks (
    tasksID SERIAL PRIMARY KEY,
    task TEXT,
    status TEXT NOT NULL,

    project_id INTEGER,

        CONSTRAINT fk_projects
            FOREIGN KEY (project_id)
                REFERENCES projects(projectID)

);

