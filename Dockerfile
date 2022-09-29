FROM node:16.13.1-alpine3.13

COPY ./ /
RUN yarn install

CMD ["yarn","start"]
