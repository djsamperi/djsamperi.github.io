# Tabs

Tabs let you organize content by context, for example installation instructions for each supported platform.

```tpl
{{%/* tabs "uniqueid" */%}}
{{%/* tab "MacOS" */%}} # MacOS Content {{%/* /tab */%}}
{{%/* tab "Linux" */%}} # Linux Content {{%/* /tab */%}}
{{%/* tab "Windows" */%}} # Windows Content {{%/* /tab */%}}
{{%/* /tabs */%}}
```

## Example

{{% tabs "uniqueid" %}}
{{% tab "MacOS" %}}
# MacOS

This is tab **MacOS** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.

## MacOS Sub

hello sub

### MacOS subsub

hello subsub

```bash
export foo=bar
pwd
R
ls -l
sudo apt-get install r-base r-base-dev
sudo apt-get install libxt-dev
```

```r
x <- 0:200/20
y <- sin(x)
plot(x,y)
```

{{% /tab %}}

{{% tab "Linux" %}}

# Linux

This is tab **Linux** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{% /tab %}}

{{% tab "Windows" %}}

# Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{% /tab %}}
{{% /tabs %}}
