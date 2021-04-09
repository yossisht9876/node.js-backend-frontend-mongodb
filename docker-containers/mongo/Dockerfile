FROM docker.io/mongo:latest


#ADD create_ddbb.js /tmp/
#
#RUN mongod --fork --logpath /var/log/mongodb.log \
#    && sleep 5 && mongo foobar /tmp/create_ddbb.js

COPY create_db_user.js /docker-entrypoint-initdb.d/
