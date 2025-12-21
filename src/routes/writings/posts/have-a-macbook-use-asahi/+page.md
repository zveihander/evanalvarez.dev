---
title: Have a MacBook? Use Asahi!
description: Why anyone with a MacBook should be using Asahi Linux
date: 2025-12-20
slug: "have-a-macbook-use-asahi"
---

# {title}

## Introduction

MacBooks prior to 2020 were some of the worst machines (performance wise) you could buy. However, after Apple's switch to ARM based chips, MacBooks have actually become some of the _best_ performing computers on the market. There are, however, still a few problems with MacBooks.

## The Problems

First, they are too expensive. I have a refurbished M1 Pro, and it cost me about $1200. For the majority of people (whose computer is basically just the bootloader into their web browser), a computer this powerful simply isn't necessary, and they should look at cheaper, less powerful models. That being said, if you are a developer who needs fast compile times, or a video editor, it makes much more sense to invest that amount of money in a good machine.

The next problem I have with MacBooks is that they are not easy to repair. The Apple silicon models of MacBook are hard to open, and even if you do get it open, the memory, CPU, SSD, etc. are all soldered together, preventing repair without serious technical know-how and tools.

The final problem I have with MacBooks is the operating system. I am a Linux user, and for a very long time there was simply no good option for using MacBooks with Linux. I dislike MacOS because of its proprietary nature. I honestly can't fully trust any piece of proprietary software, especially not ones made by American companies (yes, it is because of the NSA).

## The Solution

[Asahi Linux!](https://asahilinux.org) Thankfully, there is a solution to at least one of these problems, a distribution (or rather a kernel and firmware project) known as Asahi. Asahi Linux is a project that aims to bring Linux to Apple silicon. While it started off with far fewer features than were available on MacOS, after a lot of reverse engineering and tons of open source contributions, I would say that Asahi is ready to be used by the majority of people. Most hardware features (at least on the M1) work the same as in MacOS, see [here](https://asahilinux.org/docs/platform/feature-support/overview) for more information on feature support for each model of MacBook. The default Asahi is a Fedora based "remix" known as Fedora Asahi Remix, but you can install several alternative operating systems, as long as they package the Asahi kernel and video driver forks.

## What I Use

I do not use the default Fedora-based remix, mainly because I simply do not like Fedora and the only option available for installing it is without LUKS encryption support. Instead, I use [Void Linux](https://voidlinux.org). I won't get into why I chose Void in this post, but I will mention other available options if you don't want to use Asahi Fedora Remix. The biggest alternative distros are NixOS, Debian, Ubuntu, and the previously mentioned Void Linux. I have found that most packages work perfectly fine, and for Void specifically, if the package isn't in the aarch64 repository you can usually compile it yourself using [xbps-src](https://github.com/void-linux/void-packages).

## Conclusion

The Asahi Linux project is a clear superior choice when it comes to using Apple silicon. Linux is better for your privacy, security, and it's a better platform for developers. Take the red pill and download Asahi Linux today!
