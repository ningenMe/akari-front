FROM node:14.16.0-alpine3.10

COPY ./ /
RUN yarn install && yarn build

CMD ["yarn","start"]