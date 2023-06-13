#!/usr/bin/env sh
open https://jinglebaba2023.github.io/shoptrade-documentation/
# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd src/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/JingleBaba2023/prismic-adaptor-integration.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/JingleBaba2023/shoptrade-documentation master:main
# git push -f git@github.com:JingleBaba2023/anatta-docs.git master:gh-pages
cd -
