---
title: Add your profile data
description: To put your profile up on our organization website, you first need to create a data model and find your subgroup.
position: 3002
category: Contributing
---

## Your profile's data model

### YAML FrontMatter

YAML is a flexible, data-oriented language that is mostly used to write configuration files.

YAML FrontMatter is an optional section of YAML code on top of Markdown files to maintain metadata for a page and its contents.

<alert>
The word Frontmatter comes from the term for the pages that precede the main text of a book, such as the title page and preface.
</alert>

### Profile Data in YAML Frontmatter

The profile cards you see on our [org website's team page](https://org.grey.software/team) come from:

➡️ YAML frontmatter that is rendered

➡️ By a Vue component from

➡️ Inside a Markdown file that is parsed

➡️ By the Nuxt framework's content module.

**But don't worry, you won't have to understand Nuxt or write Vue code to add your profile card**

We've configured the website so that simply adding your profile to the YAML frontmatter can render your profile card on the website!

![YAML](/team-yaml.png)

![Nuxt Content Vue Component](/team-vue.png)

## Action Items

### ✅ Create Your Profile Data Model

<code-group>
<code-block label="YAML" active>

```
name: YOUR_NAME
avatar: YOUR_AVATAR_LINK
github: YOUR_GITHUB_LINK
gitlab: YOUR_GITLAB_LINK
linkedin: YOUR_LINKEDIN_LINK
```

 </code-block>

 </code-group>

<alert>
You can find your avatar link by clicking 'Copy Image Address' after right clicking on your Github or Gitlab profile picture. 
</alert>

### ✅ Locate the Explorers File

You'll find the explorer file at `/content/en/team/open-source-explorers.md`

<cta-button text="Explorers File" link="https://gitlab.com/grey-software/org/-/blob/master/content/en/team/open-source-explorers.md">
</cta-button>

<br></br>
