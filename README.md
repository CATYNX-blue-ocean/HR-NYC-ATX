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

 a) Checkout local development branch
  `git checkout dev`
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
  
  
  
# Odds 'n' Ends web application
An C2C e-commerce web application to support local market and community.

![image](https://user-images.githubusercontent.com/81717356/132099139-0ec1c6c8-30f0-4ee2-9805-5be5eae45d68.png)
![Screen Shot 2021-09-04 at 10 00 41 AM](https://user-images.githubusercontent.com/81717356/132099282-1a2e6851-7b8e-47c8-9473-ea730cefd9a9.png)
****

## Frontend: React

## Server: Express

## Database: MongoDB

