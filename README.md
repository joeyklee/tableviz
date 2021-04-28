# Tableviz

This is a repo of experimental visualizations using HTML tables as the key constraint.

This practice seeks to push what we might imagine is possible to create with tables, specifically with the constraints of email clients (with the lowest common denominator being Outlook) meaning that everything must be pre-rendered and we can't use a lot of fancy css.


## Visualizations

* barcharts:
  * vertical
  * horizontal
* ...?


## Brainstorm and thoughts

* What if we treated a table as a canvas?
  * could we think about how to translate the canvas API to be able to create visualizations in a table like we would using canvas?
  * there are obvious limitations such as not being able to create "overlapping" elements, but what if you could do something like "tableCircle(5, 5, 6)" which would be like "a circle at 5 columns to the right, 5 rows down, spanning 6 columns/rows in each direction" ?
  * it's totally ridiculous but what might be brewed up if it becomes easier to compose shapes?
  * another thing to consider is how nested tables could provide interesting opportunities?