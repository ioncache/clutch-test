# clutch-test

Things I did:
- made a server that serves up the json and the first page
- created first page that shows the cars similar to the styling in the pdf
- page is responsive, but needs a minimum size for when there is less room that one column can fit
- made the "Make" filters work

Thing I did not get to do:
- make the second page
- finish styling the first page, especially the text in the car displays
- did not implement the price filter
- numerous possible performance issues
- error handling
- test infrastructure

Issues I found:
- I decided not to use a framework, as I wanted as few dependencies as possible
  - this was probably a bad idea since I had to do a bunch of upfront work to get the server going, and decide on structure
  - this also made the temaplating of the html hard to do since I wasn't working with a framework that had a tempalting library in it
  - this also meant I did not get a test infrastrcture out of the box

To do next:
- fix up TODO notes in code
- pick a framework
- start with some tests and go from there  
