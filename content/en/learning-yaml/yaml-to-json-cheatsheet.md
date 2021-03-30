---
title: YAML to JSON
description: ""
position: 9
category: Learning YAML
---

## Parent to child object

<code-group>
<code-block label="YAML" active>

```
user:
   name: Adil Shehzad
   job: Developer
   skill: Elite

  ```
  </code-block>
<code-block label="JSON">

```
"user": {
    "name": "Adil Shehzad",
    "job": "Developer",
    "skill": "Elite"
  }
```
 </code-block>
</code-group>


## Parent to child array


<code-group>
<code-block label="YAML" active>

```
user:
   name: Adil Shehzad
   job: Developer
   skill: Elite

  ```
  </code-block>
<code-block label="JSON">

```
"user": [
    "Adil Shehzad",
    "Developer",
    "Elite"
  ]
```
 </code-block>
</code-group>

## Parent to child array with object values

<code-group>
<code-block label="YAML" active>

```
user:
- name: Adil Shehzad
  job: Developer
  skill: Elite
- name: Hamees 
  job: Doctor
  skill: Elite


  ```
  </code-block>
<code-block label="JSON">

```
"user": [
    {
      "name": "Adil Shehzad",
      "job": "Developer",
      "skill": "Elite"
    },
    {
      "name": "Hamees ",
      "job": "Product Manager",
      "skill": "Elite"
    }
  ]
```
 </code-block>
</code-group>

## Parent to child array with a single value

<code-group>
<code-block label="YAML" active>

```
user: 
  - name: Adil Shehzad
  - name: Hamees

  ```
  </code-block>
<code-block label="JSON">

```
"user": [
  {
    "name": "Adil Shehzad"
  },
  {
    "name": "Hamees"
  }
],
```
 </code-block>
</code-group>