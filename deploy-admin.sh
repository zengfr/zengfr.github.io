cd admin
npm install @angular-devkit/build-angular
npm install -g @angular/cli
ng build --base-href=/admin/ --prod
rm -rf ../deploy/admin
mkdir --parents ../deploy
mv dist/ng-ant-admin ../deploy/admin