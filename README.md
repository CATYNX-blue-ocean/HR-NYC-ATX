# HR-NYC-ATX

---

## Development Procedures Cheat Sheet

1) Pull updates from development
`git pull origin dev`

2) Create feature branch with
     Service_ticket#
`git checkout -b <service_ticket#>`

3) Commit/push / save regularly to feature branch
`git add, git commit, etc`

4) Commit/push to feature branch EOD every day
`git push origin <branchname: branchname>`

5) In order to combine on development branch:

 a) Pull updates from development
  `git pull origin dev`
 b) Merge to identify conflicts
  `git checkout <featureBranch>`
  `git merge dev`
 c) Resolve conflicts with owner of conflicting code
  (conflicts will be in the file structure - review and make any changes with involved developers)
 d) Push new changes to gitHub branch
  `git push origin <branchname: branchname>`
 e)Pull request end of feature development (Architect or PM code  review before approval)
  (be sure to select the correct branchname that is getting merged into DEV, not MAIN)
  