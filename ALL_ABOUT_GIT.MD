show all branchs
```bash
git branch
```
Check out a branch then active to that branch

```bash
git checkout development
u can check for current branch using the same command
```
```bash
git branch
```
Merge dev to current branch
```bash
git merge dev
```
#### Push your changes to remote
```bash
git push origin development
```

### Clone with less history to new directory
```bash
git clone --depth=1 --branch=master git://someserver/somerepo dirformynewrepo

```
Commit all changes `git commit -a -m "Your message here"`

Copy your key to your clipboard with `cat ~/.ssh/id_rsa.pub | pbcopy` .

Copy all content in a folder to a nother place `cp -a /source/. /dest/` *.* for coppying all of files inclue hidden files


Commit all changes to server

```bash
git commit --all  -m 'Your message here'
```


```bash
git branch -v -a
git fetch && git checkout your-branch
```

### Merge a commit to a specific branch
```bash
git cherry-pick <commit hash>
```