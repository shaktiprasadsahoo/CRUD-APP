FROM node:12-alpine

WORKDIR /AngularTask/CRUD
COPY . ./

RUN npm install -g @angular/cli 
RUN npm install


EXPOSE 4200

CMD ["ng", "serve"]