---
title: "DotnetFriday Februari 2024"
date: 2024-02-28T22:00:00+02:00
draft: false
author: Eduard Keilholz
tags:
  - Authentication
  - Authorization
  - OAuth
  - OpenID Connect
  - Mocking
  - Testing
  - Identity Provider
image: /images/dnf-20231201.jpg
images:
  - /images/dnf-20231201.jpg
description: |-
    The February 2024 edition of DotnetFriday was a compelling event centered around authentication-themed discussions, featuring enlightening presentations by Annejan Barelds and Kristof Riebbels. Annejan delved into the intricacies of the On-Behalf-Of pattern within OAuth, providing attendees with valuable insights into its practical applications and best practices. Meanwhile, Kristof offered an insightful exploration of mocking identity providers, equipping developers with essential techniques to streamline development and testing processes. Attendees left the meetup with a deeper understanding of authentication strategies, armed with practical knowledge to enhance security measures and development efficiency in their projects.
toc: true
---

# DotnetFriday - February 2024 Edition

The February 2024 edition of DotnetFriday was a compelling event centered around authentication-themed presentations, featuring enlightening sessions by Annejan Barelds and Kristof Riebbels. Annejan delved into the intricacies of the On-Behalf-Of pattern within OAuth, providing attendees with valuable insights into its practical applications and best practices. Meanwhile, Kristof offered an insightful exploration of mocking identity providers, equipping developers with essential techniques to streamline development and testing processes. Attendees left the meetup with a deeper understanding of authentication strategies, armed with practical knowledge to enhance security measures and development efficiency in their projects.

## Annejan Barelds

Annejan has been an avid software developer since 2006. And while his career took him to several non-development roles, he keeps coming back to development: exploring new technologies, building great software with it, and sharing his knowledge with others, is what makes him tick. He currently works for 4Dotnet where he's helping customers build great software on Azure.

### Session: Delegated Access with OAuth: Why Developers Should Care

So you're a developer and want to learn how to build those cool, new, autonomous services? Nice. Then you also want
to attend this session and learn you can enable your autonomous services to also make autonomous authorization
decisions. Join me in finding out how OAuth On-Behalf-Of works, and why it's relevant. In this talk, we'll cover why
user delegation using On-Behalf-Of helps you meet auditing requirements, how it helps you achieve lower coupling
between services, and how it fits into a larger puzzle that security specialists like to call Zero Trust Architecture.
And of course we'll also demo how to actually implement it using Entra ID and .NET. So whether you're not sure yet
if this is worth your trouble, or are already sold on the idea and want to make it happen, this talk is for you.

## Kristof Riebbels

Kristof is a Consultant at Xebia | Xpirit, driven by a passion for knowledge acquisition and sharing. With a background working as an employee and a steadfast commitment to continuous improvement, he recently made a transition into the consultancy field. Alongside earning the AZ-204 certificate, Kristof is currently focused on the development and delivery of secure code, motivated by the growing importance of safeguarding data privacy in the face of frequent breaches. Over the past years, he has dedicated himself to inspiring and coaching fellow developers, empowering them to enhance their software development skills by embracing modern practices and the timeless SOLID principles.

### Session: Mock your OpenID Connect Provider

This session delves into the importance of OpenID Connect in ensuring robust authentication and authorization for APIs.

Join us for an informative session where we explore the integration of OpenID Connect within the development lifecycle.

Gain insights on how OpenID Connect is configured, how you can mock it to seamlessly integrate OpenID Connect within your CI Pipeline and even test your scopes and policies, without changing your configuration.
