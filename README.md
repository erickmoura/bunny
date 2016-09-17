# Bunny
An agile project tracking command line tool

## Summary
Bunny is a command line tool based on GIT and meant to be symbiotic with GIT, adding agile project tracking features to it. 
Bunny is lightweight, not relying on any DBMS or web server. It is based on file system operations and GIT commands to track its own versioning of projects, stories, tasks and other "agile" entities.

## Command Reference
To create a new project, run the following command: 

`bun init project-name project-code`

`project-code` will be the prefix used for GIT branch names

bun new [title]

Crentes a new job. Gets the job title string as argument and opens there default text editor.
In the file being edited it's possible to assign value to all job's fields by using escaped reserved names:

/title

/description

/assignee 

/assignee-email

/assignee-walet 

/estimated-time - append h,d,w,m for hours, days, weeks or months, respectively. Ex: 5h

/due-date - due date in yyyymmdd format

/reviewer - when the task is switched to done, the reviewer will receive the task in his inbox 

/reviewer-email

/comments

bun update [job-id] [field]

Opens the default text editor with the current content of the given field for the given job and lets the user update and save it





