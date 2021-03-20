---
title: YAML Guide
description: ''
position: 7
category: Learning YAML
---
## Collections

### Sequence

<code-group>
<code-block label="YAML" active>

```
- Arsala Bangash
- Adil Shehzad
- Muhammad Hamees

  ```
  </code-block>

</code-group>

### Mapping

<code-group>
<code-block label="YAML" active>


  ```
  hr:  65    # Home runs
  avg: 0.278 # Batting average
  rbi: 147   # Runs Batted In
  ```
 </code-block>

 
</code-group>

### Composition
<alert> Mapping Scalars to Sequences</alert>
<code-group>
<code-block label="YAML" active>

  
  ```
  american:
  - Boston Red Sox
  - Detroit Tigers
  - New York Yankees

  national:
  - New York Mets
  - Chicago Cubs
  - Atlanta Braves
  ```
 </code-block>

 
</code-group>

<alert> Sequence of Mappings</alert>

<code-group>
<code-block label="YAML" active>

  
   ```
  -
  name: Mark McGwire
  hr:   65
  avg:  0.278
-
  name: Sammy Sosa
  hr:   63
  avg:  0.288
  ```
 </code-block>

 
</code-group>

<alert> Sequence of sequence </alert>

<code-group>
<code-block label="YAML" active>

 ```
- [name        , hr, avg  ]
- [Mark McGwire, 65, 0.278]
- [Sammy Sosa  , 63, 0.288]
  ```
 </code-block>

 
</code-group>

<alert> Mapping of mapping </alert>

<code-group>

<code-block label="YAML" active>

 ```
 Mark McGwire: {hr: 65, avg: 0.278}
 Sammy Sosa: {
    hr: 63,
    avg: 0.288
  }
  ```
 </code-block>

 

</code-group>

## Collection indicators

<code-group>

<code-block label="YAML" active>

 ```
    '? ' : Key indicator.
    ': ' : Value indicator.
    '- ' : Nested series entry indicator.
    ', ' : Separate in-line branch entries.
    '[]' : Surround in-line series branch.
    '{}' : Surround in-line keyed branch.
  ```
 

</code-group>

## Separate directives

