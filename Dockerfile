FROM nginx:1.13

RUN rm /etc/nginx/conf.d/default.conf
COPY ./.nginx.conf /etc/nginx/conf.d/virtual.conf
COPY ./dist /usr/share/nginx/html
