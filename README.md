# Animate-on-Scroll
### A simple solutions to add animation to an element when located further down the page.

The `animate.css` is a wonderful collections of animations which can be applied to any element to achieve a desired effect; however, there is just on small problem....the animations will trigger when the page is loaded even if the element is located further down the page and not visible in the current screen position.

## Getting Started

For each element you'd like to animated, add the `animated` class.

Add the following javascript at the bottom of the html body
```javascript
<script src="/path/to/animate_on_scroll.min.js"></script>
<script>

  var animate_on_scroll = new Animate_On_Scroll();
  animate_on_scroll.Initialize({
    elements_to_animate: '.animated',
    animation: 'zoomIn'
  });

</script>
```

## Options

|           Name           |                          Description                              |
|--------------------------|-------------------------------------------------------------------|
| elements_to_animate      | The selector element you are wanting to animate                   |
| animation                | The animation you'd like to apply to the elements                 |

