INSERT INTO users (name, email, password) VALUES ('Guest', 'guest@example.com', '$2b$10$pg35WVjL0qBpmsVpIRJb.u7LdFyfUjPEHhzKLPRgEB887RlkD0paG');
INSERT INTO projects (project_name, priority, user_id) VALUES ('first project', 'high', 1);
INSERT INTO projects (project_name, priority, user_id) VALUES ('second project', 'high', 2);
INSERT INTO projects (project_name, priority, user_id) VALUES ('third project', 'normal', 1);
INSERT INTO project_tasks (task, status, project_id) VALUES ('example of todo task', 'To Do', 7);
INSERT INTO project_tasks (task, status, project_id) VALUES ('example of doing task', 'Doing', 7);
INSERT INTO project_tasks (task, status, project_id) VALUES ('example of done task', 'Done', 7);
INSERT INTO project_tasks (task, status, project_id) VALUES ('example of done task 2', 'Done', 7);