---
title: Add your profile data
description: "To put your profile up on our organization website, you first need to create a data model for your profile."
position: 3002
category: Contributing
---

## Your profile's data model

### Introducing YAML FrontMatter

YAML is a flexible, data-oriented language that is mostly used to write configuration files.

YAML FrontMatter is an optional section of YAML code on top of Markdown files to maintain metadata for a page and its contents.

<alert>
The word Frontmatter comes from the term for the pages that precede the main text of a book, such as the title page and preface.
</alert>

### Profile Data in YAML Frontmatter

The profile cards you see on our [explorers page](https://org.grey.software/team/open-source-explorers/)! get their data from YAML frontmatter.

We've configured the website so that simply adding your profile data can render your profile card on the website!

## Action Items

### ✅ Locate the Explorers File

You'll find the explorer file at `/content/en/team/open-source-explorers.md`

<cta-button text="Explorers File" link="https://gitlab.com/grey-software/org/-/blob/master/content/en/team/open-source-explorers.md">
</cta-button>

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

<br></br>
