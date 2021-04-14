cd hack
npm install vuepress@2.0.0-beta.23
yarn docs:build
rm -rf ../deploy/hack
mkdir --parents ../deploy
mv docs/.vuepress/dist ../deploy/hack