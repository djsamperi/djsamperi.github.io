# Details

Details shortcode is a helper for `details` html5 element. It is going to replace `expand` shortcode.

## Example
```tpl
{{</* details "Title" [open] */>}}
## Markdown content
Lorem markdownum insigne...
{{</* /details */>}}
```
```tpl
{{</* details title="Proof" open=false */>}}
## Markdown content
Detailed proof here.
Lorem markdownum insigne...
{{</* /details */>}}
```

{{< details title="Proof" open=false >}}
## Markdown content
{{< katex display >}}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
{{< /katex >}}

Lorem markdownum insigne...

{{< /details >}}
