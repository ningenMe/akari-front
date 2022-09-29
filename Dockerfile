FROM node:16.13.1-alpine3.13

COPY . .

CMD ["yarn","start"]
