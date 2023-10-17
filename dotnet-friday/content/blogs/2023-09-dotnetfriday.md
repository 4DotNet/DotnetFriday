---
title: "DotnetFriday September 2023"
date: 2023-09-29T22:00:00+02:00
draft: false
author: Eduard Keilholz
tags:
  - DAPR
  - Workflows
  - Sidecar
  - Resilliency
  - DDD
  - Naive Models
  - Example Mapping
  - Domain
  - EventStorming
image: /images/dnf-20230929.jpg
images:
  - /images/dnf-20230929.jpg
description: |-
  The past DotnetFriday event was a resounding success, featuring a lineup of exceptional speakers and delivering an abundance of valuable content. From start to finish, the event was a dynamic showcase of cutting-edge technologies and innovative solutions in the world of .NET development. Amidst the scorching summer heat, the attendees remained undeterred, displaying their enthusiasm and passion for the subject matter. The event venue resonated with the echoes of thought-provoking discussions and engaging presentations. Furthermore, the delightful aroma of delectable Italian cuisine permeated the air, adding a delicious touch to the proceedings. The combination of great speakers, awesome content, and delightful food made the DotnetFriday event an unforgettable experience that left attendees inspired and eager for more.
toc: true
---

# DotnetFriday - September 2023 Edition

The past DotnetFriday event was a resounding success, featuring a lineup of exceptional speakers and delivering an abundance of valuable content. From start to finish, the event was a dynamic showcase of cutting-edge technologies and innovative solutions in the world of .NET development. Amidst the scorching summer heat, the attendees remained undeterred, displaying their enthusiasm and passion for the subject matter. The event venue resonated with the echoes of thought-provoking discussions and engaging presentations. Furthermore, the delightful aroma of delectable Italian cuisine permeated the air, adding a delicious touch to the proceedings. The combination of great speakers, awesome content, and delightful food made the DotnetFriday event an unforgettable experience that left attendees inspired and eager for more.

## Marc Duiker

Marc is a Sr Developer Advocate at Diagrid with a strong focus on event-driven architectures in the Azure cloud. He loves helping developers to achieve more every day. You might have seen Marc at a developer meetup or conference since he’s a regular speaker in the area of Azure cloud & serverless technologies. He started Azure Functions University, a free and open source learning curriculum on GitHub, where everyone can learn about Azure Functions at their own pace. In 2019, 2020, and 2021 Marc received the Microsoft Azure MVP award for his community contributions. In his spare time, Marc likes to give attention to the creative part of his brain. He likes to create pixel art (check out VSCode Pets), code visuals & music, and an occasional retro game.

### Session: Orchestrate your business logic reliably with Dapr workflows

Many complex business processes are modelled as workflows. Workflows need to be resilient, tolerant to failures, and consistent in their execution. Quite a dauting task if you need to write or manage this yourself. In this session I'll cover the latest Dapr building block that allows developers to build resilient and long running workflows in code. I'll go into the specific workflow features, such as scheduling, sequential and parallel execution, and external event triggers. I'll show code samples (in C#) for each of these features and will run some workflows locally using the Dapr CLI. Finally, we'll take a peek under the cover and look at the internals of Dapr workflow, and which components it is built on top of. By the end of the session you will have a good grasp of Dapr workflows and will be use them yourself to build distributed applications.

## Kenny Baas-Schwegler & Bruno Boucard

## Kenny Baas-Schwegler

A lot of knowledge is lost when designing and building software — lost because of hand-overs in a telephone game, confusing communication by not having a shared language, discussing complexity without visualization and by not leveraging the full potential and wisdom of the diversity of the people. That lost knowledge while creating software impacts the software product’s sustainability, quality, and value. Kenny Baas-Schwegler is a strategic software delivery consultant and agile software architect focusing on socio-technical systems thinking.

He approaches software delivery by blending Domain-Driven Design and Continuous Delivery to facilitate change with Deep Democracy through collaborative modeling tools like Eventstorming, Wardley mapping, context mapping, and many more. As a result, Kenny is the catalyst that empowers and collaboratively enables organizations, teams, and groups of people to design, architecting, and build sustainable quality software products.

One of Kenny’s core principles is sharing knowledge. He does that by writing a blog on his website baasie.com and helping curate the Leanpub book visual collaboration tool. Besides writing, he also shares experience in the Domain-Driven Design community as an organizer of Virtual Domain-Driven Design (virtualddd.com) and Domain-Driven Design Nederland. In addition, he enjoys being a public speaker by giving talks and hands-on workshops at conferences and meetups.

## Bruno Boucard

Bruno Boucard started in the 80s coding on a TRS 80 machine. Today he is a senior developer, trainer, agile coach & technical coach, and speaker. He loves to explain with concrete examples with live coding, if necessary. He is the leader of the BDD Paris user group. He’s a long-time Microsoft MVP, but he still codes Java, Python and C++ with a C# accent ;-)

His company, 42skillz, aims to help organizations make software work differently. he offers training, coaching and advice on TDD, BDD, legacy code refactoring and DDD techniques with an extra soul.

### Session: Moving Beyond Naive Domain Models: Refactoring Towards Deeper Insights Using Domain-Driven Design

When creating initial domain models, we often use shallow knowledge by identifying nouns and verbs to determine the objects and methods. However, these models do not accurately reflect the primary concerns of domain experts. To improve the model, we need to refactor and develop deeper insights that capture key concerns and eliminate superficial aspects. To continuously improve the model, the code design must also support this change. In this live coding session, I will showcase a naive model created using Domain-Driven Design (DDD) principles. I will start the session by explaining what Eric Evans intended to achieve with DDD, which goes beyond tactical patterns like aggregate and domain services. I will demonstrate how to design your domain model using techniques such as EventStorming, Example Mapping, and Responsibility Mapping. Then I will use tactical patterns in code to implement a supple design that enables continuous refactoring and deep modeling as domain expertise grows. By the end of the session, you will have a clear understanding of what DDD is, with a concrete example of how to move away from naive domain models and towards deeper models through refactoring guided by tests.
