---
title: Markdown CheatSheet 
description: ''
position: 7
category: Learn Basics of Markdown Language
link: https://codesandbox.io/embed/markdown-previewer-forked-rjfbl?fontsize=14&hidenavigation=1&theme=dark&view=preview
---
<badge>v1.2+</badge>
## Headers

<code-group>
<code-block label="Header" active>

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
  ```

 </code-block>
</code-group>

## Emphasis

<code-group>
<code-block label="Italic Emphasis" active>


  ```
  *asterisks* or _underscores_
  ```
 </code-block>

<code-block label="Strong Emphasis">


  ```
  **asterisks** or __underscores__
  ```
 </code-block>

<code-block label="Strikethrough">


  ```
  ~~Scratch this.~~
  ```
 </code-block>

</code-group>

## Links

<code-group>
<code-block label="Inline-style link" active>


  ```
  [I'm an inline-style link](https://grey.software/)
  ```
 </code-block>

 <code-block label="Inline-style link with title">


  ```
  [I'm an inline-style link with title](https://grey.software/ "Grey Software")
  ```
 </code-block>
 </code-group>

## Images

<code-group>
<code-block label="Italic Emphasis" active>


  ```
  Inline-style: 
![alt text](https://grey.software/logo.png "Grey Software")
  ```
 </code-block>

 <code-block label="Reference-style">


  ```
  Reference-style: 
![alt text](https://grey.software/logo.png)
  ```
 </code-block>

 

 </code-group>

## Code and Syntax Highlighting

<code-group>
<code-block label="JavaScript" active >

```
```javascript
var s = "JavaScript syntax highlighting";
alert(s);```
    
```
</code-block>

<code-block label="Python" >

```
```python
s = "Python syntax highlighting"
print s```
    
```


</code-block>


</code-group>


## Tables

<code-group>
<code-block label="Tables" active >

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

```


</code-block>
</code-group>

## Blockquotes

<code-group>
<code-block label="BlockQuotes" active >

```
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
```

</code-block>

</code-group>

## Inline HTML

<code-group>
<code-block label="Inline HTML" active >

```
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

</code-block>

</code-group>

## YouTube Videos

<code-group>
<code-block label="YouTube Videos"  active >

```
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```
</code-group>

## SandBox
<code-sandbox :src="link"></code-sandbox>