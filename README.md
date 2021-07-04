# net-front
[![ci-test](https://github.com/ningenMe/net-front/actions/workflows/ci-test.yml/badge.svg)](https://github.com/ningenMe/net-front/actions/workflows/ci-test.yml)
[![cd-resource-push](https://github.com/ningenMe/net-front/actions/workflows/cd-resource-push.yml/badge.svg)](https://github.com/ningenMe/net-front/actions/workflows/cd-resource-push.yml)
[![cd-code-deploy](https://github.com/ningenMe/net-front/actions/workflows/cd-code-deploy.yml/badge.svg)](https://github.com/ningenMe/net-front/actions/workflows/cd-code-deploy.yml)

趣味開発のフロントエンド。

## domain

[beta.ningenme.net](https://beta.ningenme.net)

## document

TODO

## architecture

|             |                                 |
| ----------- | ------------------------------- |
| routing     | CloudFront + auto load balancer |
| hosting     | ecs                             |
| ci/cd       | github actions, aws codedeploy  |
| application | Next.js + TypeScript            |

## history

| version  | repository                                                                   | architecture               |
| -------- | ---------------------------------------------------------------------------- | -------------------------- |
| v4(this) | [net-front](https://github.com/ningenMe/net-front)                           | Next.js + TypeScript + ECS |
| v3       | [ningenme-net-front](https://github.com/ningenMe/ningenme-net-front)         | react + s3                 |
| v2       | [ningenMe.net.UI](https://github.com/ningenMe/ningenMe.net.UI)               | vue + s3                   |
| v1       | [old-ningenme-net-front](https://github.com/ningenMe/old-ningenme-net-front) | html + github pages        |
