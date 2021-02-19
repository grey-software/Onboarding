---
title: Markdown Guide
description: ''
position: 4
category: Learning Markdown
link: https://codesandbox.io/embed/markdown-live-preview-react-code-challenge-forked-85j0o?fontsize=14&hidenavigation=1&theme=light&view=preview
---
<badge>v1.2+</badge>
## Headers

<code-group>
<code-block label="Markdown" active>

```
# H1
## H2
### H3
#### H4

  ```
  </code-block>
<code-block label="Output">
<br></br>

# H1
## H2
### H3
#### H4

 </code-block>
</code-group>

## Italic Emphasis

<code-group>
<code-block label="Markdown" active>


  ```
  *asterisks* or _underscores_
  ```
 </code-block>

 <code-block label="Output">

 *asterisks* or _underscores_

 </code-block>
</code-group>

## Strong Emphasis

<code-group>
<code-block label="Markdown" active>

  
  ```
  **asterisks** or __underscores__
  ```
 </code-block>

 <code-block label="Output">

  **asterisks** or __underscores__

 </code-block>
</code-group>

## Strikethrough

<code-group>
<code-block label="Markdown" active>

  
   ```
  ~~Scratch this.~~
  ```
 </code-block>

 <code-block label="Output">

  
 ~~Scratch this.~~

 </code-block>
</code-group>


## Inline-style link

<code-group>
<code-block label="Markdown" active>

 ```
  [I'm an inline-style link](https://grey.software/)
  ```
 </code-block>

 <code-block label="Output">

 [I'm an inline-style link](https://grey.software/)

 </code-block>
</code-group>

## Inline-style link with title

<code-group>

<code-block label="Markdown" active>

 ```
  [I'm an inline-style link with title](https://grey.software/ "Grey Software")
  ```
 </code-block>

 <code-block label="Output">

 [I'm an inline-style link with title](https://grey.software/ "Grey Software")

 </code-block>

</code-group>

## Code and Syntax Highlighting Using JavaScript

<code-group>
<code-block label="Markdown" active>

```
```javascript
var s = "JavaScript syntax highlighting";
alert(s);```
    
```
 </code-block>

 <code-block label="Output">

 ```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

 </code-block>
</code-group>


## Code and Syntax Highlighting Using Python

<code-group>
<code-block label="Markdown" active>

```
```python
s = "Python syntax highlighting"
print s```
    
```
 </code-block>

 <code-block label="Output">

```python
s = "Python syntax highlighting"
print s
```

 </code-block>
</code-group>

## Image with Title

<code-group>
<code-block label="Markdown" active>

```
![alt text](https://grey.software/logo.png "Grey Software")

```

 </code-block>

 <code-block label="Output">

![alt text](https://grey.software/logo.png "Grey Software")

 </code-block>
</code-group>


## Tables
<code-group>
<code-block label="Markdown" active>

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

```

 </code-block>

 <code-block label="Output">

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

 </code-block>
</code-group>

## Blockquotes


<code-group>
<code-block label="Markdown" active>

```
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
```

 </code-block>

 <code-block label="Output">

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

 </code-block>
</code-group>

## Inline HTML

<code-group>
<code-block label="Markdown" active>

```
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```


 </code-block>

 <code-block label="Output">

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

 </code-block>
</code-group>

## YouTube Videos

<code-group>
<code-block label="Markdown" active>

```
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

```


 </code-block>

 <code-block label="Output">

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

 </code-block>
</code-group>

## MarkDown PlayGround
<code-sandbox :src="link"></code-sandbox>