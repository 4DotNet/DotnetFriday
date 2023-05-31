---
title: "DotnetFriday & 4Dotnet - DotNet Conf Local Event"
date: 2021-01-22T22:00:00+01:00
draft: false
author: Eduard Keilholz
tags:
  - DotNet Conf
  - Blazor
  - Static Web App
  - Testing
  - Monitoring
  - gRPC
  - Azure
  - Resource Manager
  - Codespaces
  - GitHub
  - Azure Functions
image: /images/dotnetconf-2021.jpg
description: |-
    In january 2021 we organized a DotNet Conference local event. A day full of tech sessions with 6 of the most wanted speakers out there. We hosted the event from our Nieuwegein office with hosts Erwin Staal and Eduard Keilholz. We had a lot of fun, gave away some awesome prices and even became trending topic on twitter.
toc: true
---

# Dotnet Conf Local Event

In january 2021 we organized a DotNet Conference local event. A day full of tech sessions with 6 of the most wanted speakers out there. We hosted the event from our Nieuwegein office with hosts Erwin Staal and Eduard Keilholz. We had a lot of fun, gave away some awesome prices and even became trending topic on twitter.

## Stacy Cashmore
Stacy is Tech Explorer DevOps at Omniplan, and Microsoft MVP in Developer Technologies.
She’s been developing software since the mid-1990s and has been speaking about improving the way we develop software at conferences and meetups since 2018
As well as sparing with the software architect about technical issues, she spends her time helping the development team, and the wider company, with continuous improvement in terms of technical work, process and, of course, working together as a team.

### Session: Deploying Client Side Blazor to a Static Web App
With the joint power of client-side Blazor and static web apps in Azure you no longer need to run web servers or App Services in order to host your site online.
But what options are there for hosting your site? In this session, we'll be deploying an app using the magic of Azure Static Web Apps with a Github hosted repo, taking a look at what that magic is, manually deploy a web app to see how you can do it for yourself, look at an azure pipeline for those repos not hosted in Azure and even looking at attaching a custom domain to your website!

## Henry Been
Henry Been is an independent architect and developer from The Netherlands. He enjoys working with software development teams to create and deliver great software. His interests include the Azure cloud, Agile, DevOps, software architecture and the design and implementation of testable and maintainable software.

### Session: Testing and monitoring distributed applications build using Azure Functions, CosmosDB and Service Bus

We have all seen the flashy presentations on building distributed applications using cloud offerings as Azure CosmosDB, Functions and messaging solutions. But how do you test such an application? How do you ensure that you do not only deploy fast and often, but can also be confident that your new deployments work reliable? In this session I will share my experiences with testing, deploying and monitoring distributed systems built using these cloud-native technologies. You will learn about the different types of tests used, dealing with databases, messaging systems and much more. And what about after the deployment, how do you monitor the quality of your application while running in production? What do you monitor when operating such a distributed system? And how? Join Henry Been to learn how you can not only build your new cloud services architecture, but can also test and operate it so you can reliable ship new features faster!

## Irina Scurtu
Microsoft MVP for Developer Technologies, Software Architect and Microsoft Certified Trainer, always in a quest for latest trends and best practices in architecture, .NET and the world around it. Irina has more than 1000 hours of delivered trainings, workshops, and presentations, being passionate about .NET and the world around it. 

She is the founder of DotNet Iasi User Group where she tries to gather people that are willing to share their knowledge with others, and from time to time publishes articles on her blog.

### Session: Embracing gRPC in .NET
With an increasing need for scalability and performance dictated by the modern web, it becomes harder and harder to choose an API paradigm that is suitable for service to service communication. While the classical models still work and have their own merits, some of them rely heavily on documentation, extensive coordination between teams or code-sharing. We use shared libraries, and over time our projects become intertwined with dependencies. 

In these cases, we need something to untangle those and reduce coupling. Welcome gRPC.
gRPC has been around for a while and .NET Core 3.0 welcomes it as a first-class citizen. It is contract-based, performant - with smaller response/request bodies, perfect for polyglot environments and supports different models – from client-server, to bi-directional streaming out of the box. In this session, we will look at how to use gRPC and its 4 models and what are the benefits and or downsides of using gRPC compared to the traditional models.

## Erwin Staal
Erwin Staal is a Azure Architect and DevOps Consultant at 4DotNet (Meppel, the Netherlands). He has over more than 10 years of experience with both small and large organizations. He likes to immerse himself in the latest technologies. Currently he is working a lot with ASP.NET Core, Docker and Kubernetes. As a DevOps Consultant he helps companies with the implementation of DevOps and Continuous Delivery.

### Session: Azure Resource Manager templates deep dive
There are multiple options in Azure to create your resources like VMs, databases or Web Apps. The Azure Resource Manager is one of them and ideal for infrastructure as code scenarios. In this session we will spend a few minutes on the basics of ARM and then quickly go into more depth on the advanced ARM-template topics! First, we will talk about how to organize your templates. As with normal code, we will try to create nicely structured and reusable templates. Linked templates can help tremendously with that so we will dive in those as well. We will look at quite some interesting template functions because they will make our templates more powerful and reusable.

## Gerald Versluis
Gerald Versluis (@jfversluis) is a software engineer at Microsoft from the Netherlands. After years of experience working with Azure, ASP.NET, DevOps, Xamarin and other .NET technologies, he has been involved in a number of different projects and has been building several real-world apps and solutions.

### Session: Codespaces, Developing from your iPad, browser, VS Code or anywhere!
In this session we will look at Codespaces. The new solution by Microsoft which enabled you to move your development environment into the cloud. Do you still have an old machine sitting under your desk, perfectly configured for that one VB6 legacy app? Or is onboarding new team members costing your hours or even days?

With Codespaces you can get fix all that and get a fully powered development machine up and running in 30 seconds. Say bye to the README.md, just give people a Codespace which has everything they need.

During this session I will show you what Codespaces is and how you can start writing code without installing tools and SDKs for hours on end. We will see how to use Codespaces as a separate solution, from VS Code, in a browser and even directly built into GitHub.

## Ankit Kumar
Ankit Kumar is a Software Engineer in Azure Functions team at Microsoft. In Azure Functions, he works on the Functions runtime, client tools, deployment experiences and Linux support. His primary areas of interest lie within Software design for Distributed Systems.

### Session: Azure Functions and .NET 5
Azure Functions recently announced preview support for .NET 5. This support is based off an out-of-process worker model, different from how
.NET Core 3 and earlier versions were supported. In this talk, we will be looking at the similarities and differences between the two
models, and how we can take advantage of the new features. We will go over the key criteria (such as performance) before thinking of
moving to .NET 5 in Azure Functions.