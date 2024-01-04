# lucid

A (one of many) HTML templating engine that produces static HTML files.
Based entirely on TypeScript. At it's core it's a new way to write HTML. 

```html
<a href="www.google.com" rel="nofollow" target="_blank">Google</a>
```

becomes

```ts

new A().href("www.google.com").rel("nofollow").target("_blank").populate("Google")

```

The `populate` function is used to set the children of the tag. It takes an array of strings or tags, or a mixture. It can also take a single string or tag.

You can also use the shorthand `p` function to populate the tag.


The `toString()` function will return the HTML string.

All the HTML tags have been implemented as subclasses of the parent class `Tag`.

## Examples

### Basic

```ts
import { A } from "./tags/A";

const a = new A().href("www.google.com").rel("nofollow").target("_blank").p("Google")

console.log(a.toString())
```


### Nesting

```ts

import { A } from "./tags/A";
import { Div } from "./tags/Div";

const div = new Div().class("link-container").populate(
    new A().href("www.google.com").rel("nofollow").target("_blank").p("Google"),
    new A().href("www.github.com").rel("nofollow").target("_blank").p("Github")
)

console.log(div.toString())

```

### Nesting with text

```ts

import { A } from "./tags/A";
import { Div } from "./tags/Div";

const div = new Div().class("link-container").populate(
    new A().href("www.google.com").rel("nofollow").target("_blank").p("Google"),
    "This is some text",
    new A().href("www.github.com").rel("nofollow").target("_blank").p("Github")
)

console.log(div.toString())

```

There are also some convenience tags that make using them easier. For example, the `EnhancedDiv` class takes arguments for class, id, and content. Similarly, the `EnhancedImg`,`EnhancedScript`,`SimpleAnchor` tag provide convenience methods for common attributes.


Example for `EnhancedDiv`:

```ts
import { EnhancedDiv } from "./urils/EnhancedDiv";

const div = new EnhancedDiv({
    id:"my-id",
    class:"my-class",
    children:[
        "This is some text",
        new A().href("www.google.com").p("Google"),
    ]
})



```

While most attributes listed in the MDN docs have their own functions, if there's an attribute that doesn't have a function, you can use the `setAttr` function to set it.

```ts
import { A } from "./tags/A";

const a = new A().setAttr("data-foo","bar").p("Google")
```


For a more comprehensive example, see the website branch of this repo. It uses Lucid to generate the code for [my website](https://www.satvikgupta.com)

You can also view the Website code [here]("https://github.com/Satvik2101/portfolio"). But that also contains other stuff (AWS stuff and other things) that you might not want to see.

