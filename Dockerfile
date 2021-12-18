FROM node:16.13.1-alpine3.13

COPY ./ /
RUN yarn install && yarn build

CMD ["yarn","start"]
