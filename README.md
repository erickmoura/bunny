# Bunny
An agile project tracking command line tool

## Summary
Bunny is a command line tool based on GIT and meant to be symbiotic with GIT, adding agile project tracking features to it. 
Bunny is lightweight, not relying on any DBMS or web server. It is based on file system operations and GIT commands to track its own versioning of projects, stories, tasks and other trackable objects.

## Command Reference
To create a new project, run the following command: 

`bun init project-name project-code`

`project-code` will be the prefix used for GIT branch names
