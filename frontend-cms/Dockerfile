FROM centos:7

# install nodejs 10
RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash -
RUN yum install -y nodejs

EXPOSE 4040
COPY /code /home/cms
WORKDIR /home/backend
RUN npm install
#RUN npm start