# node.js-backend-frontend-mongodb
node.js backend app + fronted up + mongoDB


In this project you can find 3 folders: frontend and backend.
This represents standard structure and web application.
The app is written in node.js using express framework.

frontend app service will render the site
backend app will serve as api layer for the app
mongodb is the DB behind the backend app


this project can be deployed in 2 ways:

docker-compose file :


![docker-compose up](https://user-images.githubusercontent.com/22144148/114088136-6115ed80-98bd-11eb-85aa-f2c2c2d37942.jpg)

helm charts :


![3 pods](https://user-images.githubusercontent.com/22144148/114088189-712dcd00-98bd-11eb-84d9-0452f2a775b2.jpg)

HOW TO USE:

Helm charts:

base on 3 containers images (the dockerfiles can be found in the repos)

1.clone the repo


2.helm install <service-name> -n <namespace>  -- # example helm install backend-charts -n beckend


3.after the 3 services installed up and running, we can check the fronted app url 


![backend connection](https://user-images.githubusercontent.com/22144148/114088874-2b253900-98be-11eb-894e-df0cfde2b0e7.jpg)
  
 
 
 4. check the pods services
 
 
 ![services](https://user-images.githubusercontent.com/22144148/114088969-46904400-98be-11eb-8600-e27016f4b9ba.jpg)


5. mongo logs can indecate if the app is up and if the database acceept connections



![mongo logs](https://user-images.githubusercontent.com/22144148/114089079-67589980-98be-11eb-8a46-a4f004c815e3.jpg)

 

Docker-compose:

1. clone the repo
2. docker-compose up -d
