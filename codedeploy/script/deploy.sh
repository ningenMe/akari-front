#!/bin/bash
aws ecr get-login-password --region AWS_REGION | docker login --username AWS --password-stdin AWS_ECR_REGISTRY
docker pull AWS_ECR_REGISTRY/AWS_ECR_REPOSITORY:latest
docker container stop net-front | true
docker container rm net-front | true
docker run -d -p3000:3000 --name net-front AWS_ECR_REGISTRY/AWS_ECR_REPOSITORY:latest
docker rmi `docker image ls | grep none | awk '{print $3}'` | true
