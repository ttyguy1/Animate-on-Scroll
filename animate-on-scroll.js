var Animate_On_Scroll = (function()
{
  var visible = {};

  var _elements_to_animate;
  var _animation;
  var _observer;

  //****************************************
  // Initialize
  //****************************************

  visible.Initialize = function(options)
  {
    _elements_to_animate = document.querySelectorAll(options.elements_to_animate) || false;
    _animation = options.animation || false;

    window.addEventListener('load', Detect_IntersectionObserver_Support);
  };

  //****************************************
  // Determine IntersectionObserver support
  //****************************************

  var Detect_IntersectionObserver_Support = function()
  {
    if('IntersectionObserver' in window) {
      _observer = new IntersectionObserver(function(entries)
      {
        Display_Elements(entries);
      }, { threshold: [0.2] }); // Element 20% visible

      Watch_For_Element_Visibility();
    }
    else
    {
      Display_All_Elements();
    }
  }

  //****************************************
  // Watch for element visibility
  //****************************************

  var Watch_For_Element_Visibility = function()
  {
    _elements_to_animate.forEach(function(element)
    {
      _observer.observe(element);
    });
  };

  //****************************************
  // Display Elements
  //****************************************

  var Display_Elements = function(entries)
  {
    for(var i = 0; i < entries.length; i++)
    {
      if(entries[i].isIntersecting === true)
      {
        Add_Element_Animation(entries[i].target);
      }
    }
  }

  //****************************************
  // Add element animation
  //****************************************

  var Add_Element_Animation = function(element)
  {
    element.style.visibility = 'visible';

    // Need the `animated` class for animations to work
    if(!element.classList.contains('animated'))
    {
      element.classList.add('animated');
    }

    Set_Animation_Delay(element);
    element.classList.add(_animation);

    // Stop observing element
    _observer.unobserve(element);
  }

  //****************************************
  // Set animation delay
  //****************************************

  var Set_Animation_Delay = function(element)
  {
    var random = Math.random();

    element.style.WebkitAnimationDelay = random + 's';
    element.style.animationDelay = random + 's';
  }

  //****************************************
  // Display all elements
  //****************************************

  var Display_All_Elements = function()
  {
    _elements_to_animate.forEach(function(element)
    {
      element.style.visibility = 'visible';
    });
  }

  return visible;
});
