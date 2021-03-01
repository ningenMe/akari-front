FROM node:14.16.0-buster

COPY ./ /
RUN yarn install && yarn build

CMD ["yarn","start"]