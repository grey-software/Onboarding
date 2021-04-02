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
- name: Muhammad Hamees 
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
      "name": "Muhammad Hamees ",
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
  - name: Muhammad Hamees

  ```
  </code-block>
<code-block label="JSON">

```
"user": [
  {
    "name": "Adil Shehzad"
  },
  {
    "name": "Muhammad Hamees"
  }
],
```
 </code-block>
</code-group>

## Parent to child array with mixed values

<code-group>
<code-block label="YAML" active>

```
user: 
- name : Adil Shehzad
- NoJob
- NoSkill
- name : Muhammad Hamees
  job : Project Manager
  skill:

  ```
  </code-block>
<code-block label="JSON">

```
"user": [
    {
      "name": "Adil Shehzad"
    },
    "NoJob",
    "NoSkill",
    {
      "name": "Muhammad Hamees",
      "job": "Project manager",
      "skill": null
    }
  ],
```
 </code-block>
</code-group>


## Key with null value


<code-group>
<code-block label="YAML" active>

```
user:

  ```
  </code-block>
<code-block label="JSON">

```
"user": null
```
 </code-block>
</code-group>

## Empty string key


<code-group>
<code-block label="YAML" active>

```
null:
null: test
  ```
  </code-block>
<code-block label="JSON">

```
"": null,
"": "test"
```
 </code-block>
</code-group>
