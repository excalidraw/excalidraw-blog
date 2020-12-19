---
title: Magic Charts
date: 2020-12-20
author: Lipis
link: https://twitter.com/lipis
---

One of the hidden features of Excalidraw, is that you can generate _beautiful_ charts in seconds. We recently updated our support for copying any two column data from another source and by pasting it in your scene, we generate a bar chart automagically. Read on to find out how.

<!-- end -->

## Examples

Copy any two columns data from Excel, Spreadsheet, or even HTML tables and paste it directly to Excalidraw. It will work when the number of columns is one or two. Here is the generated chart from the data below it.

https://excalidraw.com/#json=6035723371151360,_YC8ms6v1fhghy3SCLYljQ

| Month | Accounts |
| ----- | -------: |
| Jan   |      653 |
| Feb   |      751 |
| Mar   |      941 |
| Apr   |      116 |
| May   |      828 |
| Jun   |       85 |
| Jul   |      169 |
| Aug   |      666 |
| Sep   |      127 |
| Oct   |      484 |
| Nov   |      288 |
| Dec   |      687 |

But it doesn't stop there. You can also copy the data from a plain text file as comma separated values (CSV). Open your favorite editor, type the values separated by comma or tab, copy/paste and you are ready to go. Here is another example from the data bellow the chart.

https://excalidraw.com/#json=4659903914311680,mBoVCGfah7dPzNI90_8JcA

```
Day,Commits
Sun,143
Mon,167
Tue,92
Wed,114
Thu,128
Fri,155
Sat,193
```

## Modifying the chart

Once the chart is imported you can select it and change any of the properties to adjust it to your needs. With just a few clicks we could have the following result.

https://excalidraw.com/#json=5256133992251392,-IbUT9ofyNLaS0gJpKjibw

## Implementation

The implementation of this feature was done in two iterations and if you are interested on how it was done, check out the first [pull request](https://github.com/excalidraw/excalidraw/pull/1723) by [petehunt](https://github.com/petehunt) and the [second one](https://github.com/excalidraw/excalidraw/pull/2495) by [lipis](https://github.com/lipis). It quite an _experimental_ feature and overall works fine, but if you find any edge case that you think it should convert it to a char but it's not, [submit an issue](https://github.com/excalidraw/excalidraw/issues).
