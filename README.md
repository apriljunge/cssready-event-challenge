# CSSready event challenge

## The challenge
In some cases, such as the computation of heights, JavaScript needs completely applied CSS.

Just as JavaScript that has dependencies on the DOM can listen to the DOMContentLoaded event, we need an event that fires when CSS **loaded and applied**. But there isn't one yet.

**We need your help!**

Together we want to create the new _CSSready_ event. We want to find the best solution to detect if the css is loaded and fully applied.

The goal is to load our JavaScript completely asyncronously. Only JavaScript that has dependencies on CSS listens to the new event.

## Contribute
All suggestions are welcome. They can be submitted as pull-request or as issue.

These basic requirements should be met:
- both tests (fast-css-test.html and slow-css-test.html) should be passed
- the tests should work with the lastest versions of Chrome, Firefox, Edge and Internet Explorer 11
- the existing CSS should be loaded using the link tag (as they do now)


_Thank you!_
