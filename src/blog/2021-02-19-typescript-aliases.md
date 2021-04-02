---
slug: '/blog/2021-02-20-typescript-aliases'
date: '2021-02-20'
title: 'TypeScript aliases to help clean up import statements'
tags: ['TypeScript', 'tsconfig']
---

As a TypeScript project grows, you might get tired of your imports looking like this:

`gist:andrewmcgov/9ec6e8a6643fa3173ac7fc8890266d67#imports.tsx`

When it comes time to move this file to another directory, you might end up with broken imports wondering if you should import from `'../../../../components'` or `'../../../../../../components'`. This can cause a frustrating delay as you count up the folders between your current file and the one you are importing.

Fortunately there is an easy way to clean up these top level imports with a small change in your `tsconfig.json` file. The `baseUrl` compiler option allows you to set a base directory, relative to your `tsconfig.json` file, for resolving non-relative modules.

In our example, the `components`, `hooks`, and `utilities` folders are all at the same level as our `tsconfig.json` file. By adding the line below to our config file, we can now import directly from these folders anywhere in our project.

`gist:andrewmcgov/9ec6e8a6643fa3173ac7fc8890266d67#tsconfig.json?highlights=4`

`gist:andrewmcgov/9ec6e8a6643fa3173ac7fc8890266d67#imports-fixed.tsx`

The `baseUrl` option is documented [here](https://www.typescriptlang.org/tsconfig#baseUrl). If you need to get more specific for different modules, you can combine `baseUrl` with `paths`, documented [here](https://www.typescriptlang.org/tsconfig#paths).
