---
title: "DotnetFriday June 2023"
date: 2023-06-09T22:00:00+02:00
draft: false
author: Eduard Keilholz
tags:
  - Testcontainers
  - Testing
  - Unit
  - Flurl
  - HTTP
  - Requests
  - Event Sourcing
  - CosmosDB
  - Cloud scale
image: /images/dnf-20230609.jpg
images:
  - /images/dnf-20230609.jpg
description: |-
    The past DotnetFriday event was a resounding success, featuring a lineup of exceptional speakers and delivering an abundance of valuable content. From start to finish, the event was a dynamic showcase of cutting-edge technologies and innovative solutions in the world of .NET development. Amidst the scorching summer heat, the attendees remained undeterred, displaying their enthusiasm and passion for the subject matter. The event venue resonated with the echoes of thought-provoking discussions and engaging presentations. Furthermore, the delightful aroma of delectable Italian cuisine permeated the air, adding a delicious touch to the proceedings. The combination of great speakers, awesome content, and delightful food made the DotnetFriday event an unforgettable experience that left attendees inspired and eager for more.
toc: true
---

# DotnetFriday - June 2023 Edition

The past DotnetFriday event was a resounding success, featuring a lineup of exceptional speakers and delivering an abundance of valuable content. From start to finish, the event was a dynamic showcase of cutting-edge technologies and innovative solutions in the world of .NET development. Amidst the scorching summer heat, the attendees remained undeterred, displaying their enthusiasm and passion for the subject matter. The event venue resonated with the echoes of thought-provoking discussions and engaging presentations. Furthermore, the delightful aroma of delectable Italian cuisine permeated the air, adding a delicious touch to the proceedings. The combination of great speakers, awesome content, and delightful food made the DotnetFriday event an unforgettable experience that left attendees inspired and eager for more.

## Florian van Dillen
Full-stack software engineer at 4Dotnet, specialized in .NET and Azure. I like to work with event-driven systems and microservices, but also know my way around frontends, specifically Angular, React and Vue.

### Session: Testcontainers - a practical deep-dive
Are you mocking your dependencies, especially during unit tests? Tired of setting up infrastructure before
running your integration tests? There are other ways to go about this! Testcontainers are a lightweight,
disposable means of running your infrastructure such as a database. In this session we will explore the
different ways in which we can use the excellent Testcontainers-dotnet library and hopefully give you
solid foundation of using it in your own projects.

## Martijn Veld
As software Developer at 4DotNet I help our clients to build future-proof software using the .NET
framework / .NET Core in combination with different data storage technologies among which SQL server.\
A strong focus is on delivering cloud-native software solutions on the Azure platform.

### Session: Calling Flurl - Accessing REST APIs the easy way
Flurl is a modern, fluent, asynchronous, testable, portable, buzzword-laden URL builder and HTTP client
library for .NET. In this brief talk I will demonstrate how Flurl can make your life easier when trying
to access data from an external API and how you can easily test such applications.


## Sander Molenkamp
Sander Molenkamp is principal cloud architect and Microsoft Azure MVP with over 20 years of professional
experience. He works for Info Support (www.infosupport.com) designing and developing customer solutions
using cloud native architectures. Sander is passionate about community and is co-organizer of the Dutch
Azure Meetup and a host on the dotnetFlix podcast (www.youtube.com/dotnetflix).

### Session: Star Tours - Event Sourcing at Cosmic Scale

Set in the Star Wars universe, Star Tours is a Disney theme park attraction that takes passengers on a turbulent trip across the
galaxy. You might have ridden it, but have you ever stopped and thought about the complexity of running such an interplanetary
travelling agency?

Event Sourcing can help us tackle this complexity by storing state as a series of events that include the 'why' and 'when' of the
specific event. Cosmos DB, the multi-model globally distributed database service on Azure is a great fit for storing these events.

In this demo-heavy session I'll show you how to build an event store on Cosmos DB starting from scratch. Topics include bulk
operations using stored procedures, partitioning strategies, and how to create projections using the Cosmos DB Change Feed. After
this session, you'll be ready to start your own galactic travelling agency!