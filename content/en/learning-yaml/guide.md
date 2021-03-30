---
title: YAML Guide
description: ''
position: 7
category: Learning YAML
---
## Collections

This section provides a quick glimpse into the expressive power of YAML. 
It is not expected that the first-time reader grok all of the examples. 
Rather, these selections are used as motivation for the remainder of the specification.

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

## Separate directives

<code-group>

<code-block label="YAML" active>

 ```
---
Time: 2021-03-27 15:01:42 +5 
User: ed
Warning:
  This is an error message
  for the log file
---
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

## Scalar indicators

<code-group>

<code-block label="YAML" active>

 ```
    '''' : Surround in-line unescaped scalar ('' escaped ').
    '"'  : Surround in-line escaped scalar.
    '|'  : Block scalar indicator.
    '>'  : Folded scalar indicator.
    '-'  : Strip chomp modifier ('|-' or '>-').
    '+'  : Keep chomp modifier ('|+' or '>+').
    1-9  : Explicit indentation modifier ('|1' or '>2').
           # Modifiers can be combined ('|2-', '>+1').
  ```
 

</code-group>