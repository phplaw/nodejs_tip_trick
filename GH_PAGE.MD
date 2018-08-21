1. Fork the repository to your account.
2. Clone it locally on your machine
3. Create a gh-pages branch (if one already exists, remove it and create a new one based off master).
4. Push the branch back to GitHub.
View the pages at `http://username.github.io/repo`
In code:
```bash
git clone git@github.com:username/repo.git
cd repo
git branch gh-pages
# Might need to do this first: git branch -D gh-pages
git push -u origin gh-pages # Push the new branch back to github
```
Go to http://username.github.io/repo
Go to http://phplaw.github.io/nodejs_tip_trick

### Checkout `gh_page` branch
```bash
git checkout --orphan gh-pages
```