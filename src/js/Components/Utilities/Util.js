"use strict";

const Util = {
  buildElement(obj) {
    var element = document.createElement(obj.type);
    obj.attrs != "" ? Util.setAttributes(element, obj.attrs) : false;
    obj.content != "" ? (element.textContent = obj.content) : false;
    obj.appendTo != "" ? obj.appendTo.appendChild(element) : false;

    return element;
  },
  getDate() {
    var date = new Date();
    return date.getDate();
  },
  getMonthName() {
    var date = new Date();
    return date.toLocaleString("en-us", { month: "long" });
  },
  getTime() {
    var date = new Date();
    var hours = date.getHours();
    var amPm;

    if (hours > 12) {
      amPm = "pm";
      hours = hours - 12;
    } else {
      amPm = "am";
    }

    return `${hours}:${date.getMinutes()}${amPm}`;
  },
  getYear() {
    var date = new Date();
    return date.getFullYear();
  },
  setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
    return el;
  }
};

export default Util;
