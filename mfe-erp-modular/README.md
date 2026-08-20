0.- Ambiente de desarrollo
CLI
ng version
node --version
npm --version
IDEs
- Plugins:
Angular Extensions Pack

1.-Elegir el tipo de proyecto (Monorepo)

(Workspace)

ng new mfa-demo-v1 --create-application=false

ng generate application host
ng g application dashboard-mfe 
ng g application customer-mfe 

ng g library library 

npm i @angular-architects/native-federation

ng g @angular-architects/native-federation:init --project=host --port 4200 --type dynamic-host

ng g @angular-architects/native-federation:init --project dashboard-mfe --port=4201 --type=remote

ng g @angular-architects/native-federation:init --project customer-mfe --port=4201 --type=remote

ng g c components/local.component --project=host

ng serve remote --port 4201

ng serve remote2 

ng serve host
