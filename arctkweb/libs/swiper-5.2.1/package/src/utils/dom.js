import {
  $,
  addClass,
  removeClass,
  hasClass,
  toggleClass,
  attr,
  removeAttr,
  data,
  transform,
  transition,
  on,
  off,
  trigger,
  transitionEnd,
  outerWidth,
  outerHeight,
  offset,
  css,
  each,
  html,
  text,
  is,
  index,
  eq,
  append,
  prepend,
  next,
  nextAll,
  prev,
  prevAll,
  parent,
  parents,
  closest,
  find,
  children,
  filter,
  remove,
  add,
  styles,
} from 'dom7/dist/dom7.modular';

const Methods = {
  addClass,
  removeClass,
  hasClass,
  toggleClass,
  attr,
  removeAttr,
  data,
  transform,
  transition,
  on,
  off,
  trigger,
  transitionEnd,
  outerWidth,
  outerHeight,
  offset,
  css,
  each,
  html,
  text,
  is,
  index,
  eq,
  append,
  prepend,
  next,
  nextAll,
  prev,
  prevAll,
  parent,
  parents,
  closest,
  find,
  children,
  filter,
  remove,
  add,
  styles,
};

Object.keys(Methods).forEach((methodName) => {
  $.fn[methodName] = $.fn[methodName] || Methods[methodName];
});

export default $;
