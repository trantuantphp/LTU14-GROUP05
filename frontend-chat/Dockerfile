FROM centos:7

# install nodejs 10
RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash -
RUN yum install -y nodejs

EXPOSE 3030
COPY /code /home/chat
WORKDIR /home/chat
RUN npm install
#RUN npm start