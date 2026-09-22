(function () {
  document.documentElement.classList.remove('no-js');

  var heroId = 'main',               // ID of the element upon which to cast the shadow
      wrapperId = 'shadowWrapper',   // ID of the shadow wrapper
      shadowClass = 'shadow';        // Shadow class name

  // Sets up the wrapper containing the shadow. Clones the element to be shadowed and replace it with the wrapper.
  function createShadowElements() {
    var hero = document.getElementById(heroId), newHero = hero.cloneNode(true), shadow = hero.cloneNode(true),
        newHero = hero.cloneNode(true), shadow = hero.cloneNode(true),
        wrapper = document.createElement('div');
    newHero.removeAttribute('id');
    wrapper.id = wrapperId;
    newHero.setAttribute('class', heroId);
    shadow.setAttribute('class', shadowClass);
    wrapper.appendChild(newHero);
    wrapper.appendChild(shadow);
    hero.parentNode.replaceChild(wrapper, hero);
    return wrapper;
  }

  function moveShadow(event, wrapper) {
    var minimumPerspective = 80,
        exaggeration = 1.5,
        perspective = window.innerHeight - event.pageY + minimumPerspective + 'px',
        perspectiveOrigin = (window.innerWidth - event.pageX * exaggeration) + 'px 0';
    wrapper.style.perspective = perspective;
    wrapper.style.perspectiveOrigin = perspectiveOrigin;
  }

  function centerWrapper() {
    var wrapper = document.getElementById(wrapperId);
    wrapper.style.marginLeft = ((window.innerWidth - wrapper.firstElementChild.offsetWidth) / 2)+'px';
  }

  function init() {
    var wrapper = createShadowElements();
    centerWrapper();
    addEventListener('mousemove', function(e) { moveShadow(e, wrapper) });
    addEventListener('resize', centerWrapper);
  }

  addEventListener('load', init);
}());

