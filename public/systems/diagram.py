#!/bin/python3

from diagrams import Cluster, Diagram, Edge
from diagrams.onprem.client import User
from diagrams.aws.compute import ECS
from diagrams.aws.storage import S3
from diagrams.aws.network import Route53, CloudFront, ALB
from diagrams.aws.database import RDS
from diagrams.aws.devtools import Codedeploy
from diagrams.onprem.ci import GithubActions
from diagrams.onprem.vcs import Github 

with Diagram(name="ningenme.net", filename="public/systems/diagram", show=False):
    user = User("Client")

    with Cluster("AWS"):
        with Cluster("route53"):
            route53NingenmeNet       = Route53("ningenme.net")
            route53ApiNingenmeNet    = Route53("api.ningenme.net")
            route53StaticNingenmeNet = Route53("static.ningenme.net")
        with Cluster("cloud front"):
            cloudFrontNingenmeNet       = CloudFront("ningenme.net")
            cloudFrontApiNingenmeNet    = CloudFront("api.ningenme.net")
            cloudFrontStaticNingenmeNet = CloudFront("static.ningenme.net")
        with Cluster("s3"):
            s3StaticNingenmeNet = S3("static.ningenme.net")
        with Cluster("alb"):
            albNetFront = ALB("net-front")
            albNetApi   = ALB("net-api")
        with Cluster("ecs-cluster"):
            ecsNetFront = ECS("net-front")
            ecsNetApi   = ECS("net-api")
        with Cluster("db"):
            mysql = RDS("ningenme-mysql")
        with Cluster("code deploy"):
            codeDeployNetFront = Codedeploy("net-front")
            codeDeployNetApi   = Codedeploy("net-api")
    with Cluster("GitHub"):
        with Cluster("github actions"):
            actionsNetFront = GithubActions("net-front")
            actionsNetApi   = GithubActions("net-api")
        with Cluster("github"):
            githubNetFront     = Github("net-front")
            githubNetApi       = Github("net-api")
            githubAwsTerraform = Github("aws-terraform")

    user >> route53ApiNingenmeNet >> cloudFrontApiNingenmeNet >> albNetApi   >> ecsNetApi   << codeDeployNetApi   << actionsNetApi   << githubNetApi
    user >> route53NingenmeNet    >> cloudFrontNingenmeNet    >> albNetFront >> ecsNetFront << codeDeployNetFront << actionsNetFront << githubNetFront
    user >> route53StaticNingenmeNet >> cloudFrontStaticNingenmeNet >> s3StaticNingenmeNet << actionsNetApi
    mysql >> Edge(color="black") << ecsNetApi