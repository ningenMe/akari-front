# net-front
[![ci](https://github.com/ningenMe/net-front/actions/workflows/ci.yml/badge.svg)](https://github.com/ningenMe/net-front/actions/workflows/ci.yml)
[![deploy](https://github.com/ningenMe/net-front/actions/workflows/deploy.yml/badge.svg)](https://github.com/ningenMe/net-front/actions/workflows/deploy.yml)

趣味開発のフロントエンド。

## domain

[ningenme.net](https://ningenme.net)

## command

ローカルで動かすとき
```sh
yarn install
yarn next dev
```

## architecture
[system diagrms](https://ningenme.net/systems)


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
