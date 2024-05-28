FROM node:16-alpine AS development
ENV NODE_ENV development

WORKDIR /app
COPY ./build ./build

RUN npm install -g serve

EXPOSE 3000

CMD serve -s build