# git basics for this project

the goal is not to teach every git feature. the goal is to help you use git safely on this project without getting lost.

## what git is

git is a version control system.

that means git keeps track of changes to files over time.

with git, we can:

- see what changed
- save checkpoints of our work
- go back to older versions
- work on different features without breaking the main code
- collaborate without emailing files around

## why we use git

without git, team projects become messy very fast.

problems git helps solve:

- "who changed this file?"
- "what broke the app?"
- "how do i work on my feature without touching someone else's?"
- "how do we combine everyone's work?"

git gives us a shared history of the project.

## important idea: local vs github

there are two places your code can exist:

- your local computer
- github

git lets you save changes locally first.
then you can send them to github later.

that means you can work safely before sharing anything.

## basic words

repository:

- the project tracked by git

commit:

- a saved checkpoint of your changes

branch:

- a separate line of work

main:

- the main branch of the project

push:

- send your local commits to github

pull:

- get the latest changes from github

merge:

- combine changes from one branch into another

## the core idea of the workflow

the normal flow is:

1. get the latest code
2. make a new branch
3. change files
4. check what changed
5. commit your work
6. push your branch to github
7. open a pull request

## the most useful commands

### `git status`

this is the most important command for beginners.

it shows:

- what files changed
- what files are untracked
- what branch you are on

use it often.

```bash
git status
```

### `git pull`

this gets the latest changes from github.

use this before starting new work, especially on `main`.

```bash
git pull
```

### `git switch -c <branch-name>`

this makes a new branch and switches to it.

example:

```bash
git switch -c add-course-search
```

now your work is on a separate branch, not on `main`.

### `git branch`

this shows your branches.

```bash
git branch
```

the branch with `*` beside it is your current branch.

### `git add <file>`

this marks files to be included in your next commit.

example:

```bash
git add apps/web/src/App.tsx
```

if you want to add all changed files:

```bash
git add .
```

be a little careful with `git add .`
it can include files you did not mean to commit.

### `git commit -m "message"`

this saves a checkpoint of the files you added.

example:

```bash
git commit -m "add hello world frontend to backend demo"
```

good commit messages are short and clear.

### `git push -u origin <branch-name>`

this sends your branch to github.

example:

```bash
git push -u origin add-course-search
```

the `-u` helps git remember which remote branch this branch belongs to.

after the first push, later pushes are usually just:

```bash
git push
```

### `git switch <branch-name>`

this moves you to an existing branch.

example:

```bash
git switch main
```

### `git log --oneline`

this shows a short history of commits.

```bash
git log --oneline
```

this is useful when you want to understand recent changes.

### `git diff`

this shows what changed but has not been committed yet.

```bash
git diff
```

this is useful before committing.

## what branches are

a branch is a separate workspace for a change.

you should think of branches like this:

- `main` = the stable shared project
- your feature branch = your own work area

instead of everyone editing `main` directly, each person works on their own branch.

that is safer because:

- unfinished work does not go straight into `main`
- code review is easier
- bugs are easier to isolate
- multiple people can work at the same time

## why we use branches

we use branches because this is a team project.

if everyone works directly on `main`, problems happen fast:

- people overwrite each other
- bad code lands too early
- it becomes hard to review work
- debugging gets much harder

branches let each person work safely and independently.

## branch naming examples

try to make branch names short and descriptive. please include your name before the branch name.

good examples:

- `jaden/add-login-page`
- `jaden/build-course-api`
- `jaden/fix-schedule-card-layout`
- `jaden/write-degree-progress-tests`

bad examples:

- `stuff`
- `my-branch`
- `update`

## a basic branch workflow

here is the simplest safe workflow:

### 1. go to `main`

```bash
git switch main
```

### 2. get the latest version

```bash
git pull
```

### 3. make your branch

```bash
git switch -c add-course-api
```

### 4. do your work

edit files as normal.

### 5. check what changed

```bash
git status
git diff
```

### 6. add and commit

```bash
git add .
git commit -m "add basic course api route"
```

### 7. push your branch

```bash
git push -u origin add-course-api
```

### 8. open a pull request on github

this is how your work gets reviewed and merged into `main`.

## what to do before starting work

every time you start a new task:

1. make sure you are on `main`
2. pull the latest changes
3. create a fresh branch

that means:

```bash
git switch main
git pull
git switch -c your-new-branch-name
```

## what to do when you finish work

the usual ending is:

```bash
git status
git add .
git commit -m "your clear message here"
git push
```

then open a pull request.

## very common beginner mistakes

### mistake 1: working directly on `main`

try not to do this.

use a feature branch instead.

### mistake 2: forgetting `git status`

if you are confused, run:

```bash
git status
```

this solves a lot of beginner confusion.

### mistake 3: pushing without pulling recently

if your branch is old, you may be missing new work from the team.

### mistake 4: huge commits

small focused commits are easier to review and debug.

### mistake 5: vague commit messages

bad:

```bash
git commit -m "stuff"
```

better:

```bash
git commit -m "add fastapi hello route"
```

## if git says there is a merge conflict

this means git found two changes that overlap and it does not know which one to keep.

do not panic.

basic idea:

1. open the conflicted file
2. look for conflict markers
3. choose the correct final version
4. save the file
5. add the file again
6. continue the merge

if you are new to git, ask a teammate for help the first few times.

## commands you will probably use the most

if you only remember a few commands, remember these:

```bash
git status
git switch main
git pull
git switch -c my-branch-name
git add .
git commit -m "my message"
git push -u origin my-branch-name
git log --oneline
git diff
```

## simple daily routine

here is a very normal day:

start work:

```bash
git switch main
git pull
git switch -c build-schedule-page
```

during work:

```bash
git status
git diff
```

finish work:

```bash
git add .
git commit -m "build basic schedule page"
git push -u origin build-schedule-page
```

## final advice

- use `git status` constantly
- do not work directly on `main`
- make one branch per task
- write clear commit messages
- push your work before it sits too long on your laptop
- ask for help early if git feels confusing

git feels strange at first, but the basic workflow becomes very repetitive after a few uses.
