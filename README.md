Angular Component Seed
======================
This repo contains all you need to kickstart implementing your own Angular component (directive, filter, service, etc.). Just clone this repo, implement your component and share with other AngularJS enthusiasts!


How to See Sample in Action
---------------------------
```
$ git clone https://github.com/yaru22/ng-component-seed.git
$ cd ng-component-seed
$ npm install
$ bower install
$ grunt
```


How to Use Seed Properly
------------------------

(DISCLAIMER: referenced https://github.com/pilwon/ultimate-seed#method-3-git-branch-tracking-remote)

Create a new repo.
```
$ mkdir sample
$ cd sample
$ touch README.md
$ git init .
$ git add README.md
$ git commit -m "First commit."
```

Create `seed` branch that tracks remote branch `ng-component-seed/master`:
```
$ git remote add seed https://github.com/yaru22/ng-component-seed.git
$ git fetch seed
$ git checkout -b seed seed/master
```

Merge `seed` to master branch.
```
$ git checkout master
$ git merge seed
```

Initialize the seed.
```
$ npm install
$ bower install
```

Do the necessary work
- create your component
- change bower.json and package.json
- change README.md and LICENSE
- etc.

Sync your `seed` branch to `ng-component-seed/master` time to time and merge it to `master` branch to get updates from `ng-component-seed`.
```
$ git checkout seed
$ git pull
$ git checkout master
$ git merge seed
<resolve conflicts and updating done>
```


License
-------
This seed is released under permissive MIT License.
