---
title: Markdown Guide
description: ""
position: 2001
category: Learning Markdown
link: https://codesandbox.io/s/markdown-editor-vue-vuex-forked-gytjh?from-embed=&file=/src/store/editor.module.js
---

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

_asterisks_ or _underscores_

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

**asterisks** or **underscores**

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

````
```javascript
var s = "JavaScript syntax highlighting";
alert(s);```

````

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

````
```python
s = "Python syntax highlighting"
print s```

````

 </code-block>

 <code-block label="Output">

```python
s = "Python syntax highlighting"
print s
```

 </code-block>
</code-group>

## Images

<code-group>
<code-block label="Markdown" active>

```
### Image With Description

![Grey Software Logo](https://grey.software/logo-black-padded.png)

### Image With Link 

[![Grey Software Logo](https://grey.software/logo-black-padded.png)](https://grey.software)


### Image With Title on Hover

[![Grey Software Logo](https://grey.software/logo-black-padded.png "Visit Our Website")](https://grey.software)

```

 </code-block>

 <code-block label="Output">

### Image With Description

![Grey Software Logo](https://grey.software/logo-black-padded.png)

### Image With Link 

[![Grey Software Logo](https://grey.software/logo-black-padded.png)](https://grey.software)


### Image With Title on Hover

[![Grey Software Logo](https://grey.software/logo-black-padded.png "Visit Our Website")](https://grey.software)

 </code-block>
</code-group>

## HTML In Markdown

<code-group>
<code-block label="Markdown" active>

```
### A Markdown Heading 

<h3>An HTML Heading</h3>
```

 </code-block>

 <code-block label="Output">

### A Markdown Heading 

<h3>An HTML Heading</h3>

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

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

 </code-block>
</code-group>

## Further Learning

[The Markdown Guide](https://www.markdownguide.org/) is a free and open-source reference guide that explains how to use Markdown, the simple and easy-to-use markup language you can use to format virtually any document.

