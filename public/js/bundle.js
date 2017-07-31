(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.onload = function () {
  var navIcons = document.querySelectorAll('.nav__icon, .navM__icon');
  var mobileMenu = document.querySelector('.navM');
  var navLinksWide = document.querySelectorAll('.nav__link a');
  var navMLinks = document.querySelectorAll('.navM__link, .infoIcon--nav');
  var titleWrapper = document.querySelector('.headline__wrapper');
  var titleTop = parseInt(window.getComputedStyle(titleWrapper, null).top, 10);
  var tastyRow = document.querySelector('.tastyRow');
  var navFullWidth = document.querySelector('.navFull');

  // toggle mobile nav
  navIcons.forEach(function (icon) {
    icon.addEventListener('click', function () {
      mobileMenu.classList.toggle('showNavM');
      navMLinks.forEach(function (link) {
        link.classList.toggle('showNavMLinks');
      });
    });
  });

  // slow / delayed parallax-style scroll for site title
  document.addEventListener('scroll', function () {
    parllaxHeadlineControl();
    navBgControl();
  });

  function parllaxHeadlineControl() {
    var scrollDistance = window.scrollY;
    var topSet = titleTop + scrollDistance / 2;
    titleWrapper.style.top = topSet + 'px';
  }

  function navBgControl() {
    var tastyRowTop = tastyRow.getBoundingClientRect().top;
    var linkColor = void 0;
    function linkColorSwitch(link) {
      link.style.color = linkColor;
    }
    if (window.innerWidth > 640) {
      if (tastyRowTop < 200) {
        navFullWidth.style.backgroundColor = 'white';
        linkColor = 'black';
        navLinksWide.forEach(linkColorSwitch);
      } else if (tastyRowTop > 200) {
        navFullWidth.style.backgroundColor = 'transparent';
        linkColor = 'white';
        navLinksWide.forEach(linkColorSwitch);
      }
    }
  }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxNQUFQLEdBQWdCLFlBQVU7QUFDeEIsTUFBTSxXQUFXLFNBQVMsZ0JBQVQsQ0FBMEIseUJBQTFCLENBQWpCO0FBQ0EsTUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFuQjtBQUNBLE1BQU0sZUFBZSxTQUFTLGdCQUFULENBQTBCLGNBQTFCLENBQXJCO0FBQ0EsTUFBTSxZQUFZLFNBQVMsZ0JBQVQsQ0FBMEIsNkJBQTFCLENBQWxCO0FBQ0EsTUFBTSxlQUFlLFNBQVMsYUFBVCxDQUF1QixvQkFBdkIsQ0FBckI7QUFDQSxNQUFNLFdBQVksU0FBUyxPQUFPLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLElBQXRDLEVBQTRDLEdBQXJELEVBQTBELEVBQTFELENBQWxCO0FBQ0EsTUFBTSxXQUFXLFNBQVMsYUFBVCxDQUF1QixXQUF2QixDQUFqQjtBQUNBLE1BQU0sZUFBZSxTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBckI7O0FBR0E7QUFDQSxXQUFTLE9BQVQsQ0FBaUIsVUFBUyxJQUFULEVBQWM7QUFDN0IsU0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3ZDLGlCQUFXLFNBQVgsQ0FBcUIsTUFBckIsQ0FBNEIsVUFBNUI7QUFDQSxnQkFBVSxPQUFWLENBQWtCLFVBQVMsSUFBVCxFQUFjO0FBQzlCLGFBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsZUFBdEI7QUFDRCxPQUZEO0FBR0QsS0FMRDtBQU1ELEdBUEQ7O0FBU0E7QUFDQyxXQUFTLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQVU7QUFDNUM7QUFDQTtBQUNELEdBSEQ7O0FBS0EsV0FBUyxzQkFBVCxHQUFpQztBQUMvQixRQUFNLGlCQUFpQixPQUFPLE9BQTlCO0FBQ0EsUUFBTSxTQUFVLFdBQVksaUJBQWlCLENBQTdDO0FBQ0EsaUJBQWEsS0FBYixDQUFtQixHQUFuQixHQUF5QixTQUFTLElBQWxDO0FBQ0Q7O0FBRUYsV0FBUyxZQUFULEdBQXVCO0FBQ3JCLFFBQU0sY0FBYyxTQUFTLHFCQUFULEdBQWlDLEdBQXJEO0FBQ0EsUUFBSSxrQkFBSjtBQUNBLGFBQVMsZUFBVCxDQUF5QixJQUF6QixFQUE4QjtBQUMxQixXQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQW1CLFNBQW5CO0FBQ0g7QUFDRCxRQUFJLE9BQU8sVUFBUCxHQUFvQixHQUF4QixFQUE0QjtBQUMxQixVQUFHLGNBQWMsR0FBakIsRUFBcUI7QUFDbkIscUJBQWEsS0FBYixDQUFtQixlQUFuQixHQUFxQyxPQUFyQztBQUNBLG9CQUFZLE9BQVo7QUFDQSxxQkFBYSxPQUFiLENBQXFCLGVBQXJCO0FBQ0QsT0FKRCxNQUlPLElBQUcsY0FBYyxHQUFqQixFQUFxQjtBQUMxQixxQkFBYSxLQUFiLENBQW1CLGVBQW5CLEdBQXFDLGFBQXJDO0FBQ0Esb0JBQVksT0FBWjtBQUNBLHFCQUFhLE9BQWIsQ0FBcUIsZUFBckI7QUFDRDtBQUNGO0FBRUY7QUFJRixDQXZERCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbmF2SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19pY29uLCAubmF2TV9faWNvbicpO1xuICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdk0nKTtcbiAgY29uc3QgbmF2TGlua3NXaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGluayBhJyk7XG4gIGNvbnN0IG5hdk1MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZNX19saW5rLCAuaW5mb0ljb24tLW5hdicpO1xuICBjb25zdCB0aXRsZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGxpbmVfX3dyYXBwZXInKTtcbiAgY29uc3QgdGl0bGVUb3AgPSAgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGl0bGVXcmFwcGVyLCBudWxsKS50b3AsIDEwKTtcbiAgY29uc3QgdGFzdHlSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzdHlSb3cnKTtcbiAgY29uc3QgbmF2RnVsbFdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkZ1bGwnKTtcblxuXG4gIC8vIHRvZ2dsZSBtb2JpbGUgbmF2XG4gIG5hdkljb25zLmZvckVhY2goZnVuY3Rpb24oaWNvbil7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dOYXZNJyk7XG4gICAgICBuYXZNTGlua3MuZm9yRWFjaChmdW5jdGlvbihsaW5rKXtcbiAgICAgICAgbGluay5jbGFzc0xpc3QudG9nZ2xlKCdzaG93TmF2TUxpbmtzJyk7XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gc2xvdyAvIGRlbGF5ZWQgcGFyYWxsYXgtc3R5bGUgc2Nyb2xsIGZvciBzaXRlIHRpdGxlXG4gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuICAgICBwYXJsbGF4SGVhZGxpbmVDb250cm9sKCk7XG4gICAgIG5hdkJnQ29udHJvbCgpO1xuICAgfSlcblxuICAgZnVuY3Rpb24gcGFybGxheEhlYWRsaW5lQ29udHJvbCgpe1xuICAgICBjb25zdCBzY3JvbGxEaXN0YW5jZSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICBjb25zdCB0b3BTZXQgPSAodGl0bGVUb3AgKyAoc2Nyb2xsRGlzdGFuY2UgLyAyKSk7XG4gICAgIHRpdGxlV3JhcHBlci5zdHlsZS50b3AgPSB0b3BTZXQgKyAncHgnO1xuICAgfVxuXG4gIGZ1bmN0aW9uIG5hdkJnQ29udHJvbCgpe1xuICAgIGNvbnN0IHRhc3R5Um93VG9wID0gdGFzdHlSb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGxldCBsaW5rQ29sb3I7XG4gICAgZnVuY3Rpb24gbGlua0NvbG9yU3dpdGNoKGxpbmspe1xuICAgICAgICBsaW5rLnN0eWxlLmNvbG9yID0gbGlua0NvbG9yO1xuICAgIH1cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA2NDApe1xuICAgICAgaWYodGFzdHlSb3dUb3AgPCAyMDApe1xuICAgICAgICBuYXZGdWxsV2lkdGguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgbGlua0NvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgbmF2TGlua3NXaWRlLmZvckVhY2gobGlua0NvbG9yU3dpdGNoKVxuICAgICAgfSBlbHNlIGlmKHRhc3R5Um93VG9wID4gMjAwKXtcbiAgICAgICAgbmF2RnVsbFdpZHRoLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIGxpbmtDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIG5hdkxpbmtzV2lkZS5mb3JFYWNoKGxpbmtDb2xvclN3aXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG5cblxufVxuIl19
