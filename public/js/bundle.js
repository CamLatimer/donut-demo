(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var go = 'let\'s go...';
console.log(go);

var navIcons = document.querySelectorAll('.nav__icon, .navM__icon');
var mobileMenu = document.querySelector('.navM');
var navMLinks = document.querySelectorAll('.navM__link, .infoIcon--nav');
navIcons.forEach(function (icon) {
  icon.addEventListener('click', function () {
    mobileMenu.classList.toggle('showNavM');
    navMLinks.forEach(function (link) {
      link.classList.toggle('showNavMLinks');
    });
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBTSxtQkFBTjtBQUNBLFFBQVEsR0FBUixDQUFZLEVBQVo7O0FBRUEsSUFBTSxXQUFXLFNBQVMsZ0JBQVQsQ0FBMEIseUJBQTFCLENBQWpCO0FBQ0EsSUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFuQjtBQUNBLElBQU0sWUFBWSxTQUFTLGdCQUFULENBQTBCLDZCQUExQixDQUFsQjtBQUNBLFNBQVMsT0FBVCxDQUFpQixVQUFTLElBQVQsRUFBYztBQUM3QixPQUFLLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDdkMsZUFBVyxTQUFYLENBQXFCLE1BQXJCLENBQTRCLFVBQTVCO0FBQ0EsY0FBVSxPQUFWLENBQWtCLFVBQVMsSUFBVCxFQUFjO0FBQzlCLFdBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsZUFBdEI7QUFDRCxLQUZEO0FBR0QsR0FMRDtBQU1ELENBUEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgZ28gPSBgbGV0J3MgZ28uLi5gXG5jb25zb2xlLmxvZyhnbyk7XG5cbmNvbnN0IG5hdkljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9faWNvbiwgLm5hdk1fX2ljb24nKTtcbmNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2TScpO1xuY29uc3QgbmF2TUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdk1fX2xpbmssIC5pbmZvSWNvbi0tbmF2Jyk7XG5uYXZJY29ucy5mb3JFYWNoKGZ1bmN0aW9uKGljb24pe1xuICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dOYXZNJyk7XG4gICAgbmF2TUxpbmtzLmZvckVhY2goZnVuY3Rpb24obGluayl7XG4gICAgICBsaW5rLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dOYXZNTGlua3MnKTtcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==
