# akari-front
[![ci](https://github.com/ningenMe/akari-front/actions/workflows/ci.yml/badge.svg)](https://github.com/ningenMe/akari-front/actions/workflows/ci.yml)
[![deploy](https://github.com/ningenMe/akari-front/actions/workflows/deploy.yml/badge.svg)](https://github.com/ningenMe/akari-front/actions/workflows/deploy.yml)

趣味開発のフロントエンド。

## domain

[ningenme.net](https://ningenme.net)

## command

ローカルで動かすとき
```sh
yarn install
yarn upgrade mami-interface
yarn next dev
```

## architecture

|             |                                 |
| ----------- | ------------------------------- |
| routing     | CloudFront + k8s                |
| hosting     | ec2                             |
| ci/cd       | github actions, aws codedeploy  |
| application | Next.js + TypeScript            |

## history

| version  | repository                                                                   | architecture               |
| -------- | ---------------------------------------------------------------------------- | -------------------------- |
| v5(this) | [akari-front](https://github.com/ningenMe/akari-front)                       | Next.js + TypeScript + K8S |
| v4       | [net-front](https://github.com/ningenMe/net-front) (renamed to akari-front)  | Next.js + TypeScript + ECS |
| v3       | [ningenme-net-front](https://github.com/ningenMe/ningenme-net-front)         | react + s3                 |
| v2       | [ningenMe.net.UI](https://github.com/ningenMe/ningenMe.net.UI)               | vue + s3                   |
| v1       | [old-ningenme-net-front](https://github.com/ningenMe/old-ningenme-net-front) | html + github pages        |
