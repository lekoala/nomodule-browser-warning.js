/**
 * Display a warning message for browser not supporting js modules
 *
 * https://github.com/lekoala/nomodule-browser-warning.js
 * MIT License
 */
document.addEventListener("DOMContentLoaded", function () {
  var el = document.getElementById("nomodule-browser-warning");
  var text = "⚠️ Your web browser is out of date. Update your browser for more security, speed and the best experience on this site.";
  var updateText = "Update browser";
  var ignoreText = "Ignore";
  var link = "https://browsehappy.com/";
  var setCookie = true;
  if (el && el.getAttribute("data-text")) {
    text = el.getAttribute("data-text");
  }
  if (el && el.getAttribute("data-update-text")) {
    updateText = el.getAttribute("data-update-text");
  }
  if (el && el.getAttribute("data-ignore-text")) {
    ignoreText = el.getAttribute("data-ignore-text");
  }
  if (el && el.getAttribute("data-link")) {
    link = el.getAttribute("data-link");
  }
  if (el && el.getAttribute("data-cookie")) {
    setCookie = el.getAttribute("data-cookie") ? true : false;
  }

  var cookies = document.cookie;
  if (cookies.indexOf("nomodule_browser_warning=ignore") !== -1) {
    return;
  }
  var cookieScript = "";
  if (setCookie) {
    cookieScript = "document.cookie = 'nomodule_browser_warning=ignore; path=/';";
  }

  var html = "";
  html += '<div style="position:absolute;top:16px;right:16px;background:#FCE100;border:5px solid #f9b700; padding:15px;z-index:5000;color:#111;width:50%;min-width:200px">';
  html += '<p style="margin-bottom:0px;"><strong>' + text + "</strong></p>";
  html += '<a style="display:inline-block;padding:1em 2em;background:#42bd3b;color:#fff;text-decoration:none;margin-right:16px;margin-top:16px;text-align:center" href="' + link + '" target="_blank" rel="noreferrer">' + updateText + "</a>";
  html += '<button style="display:inline-block;padding:1em 2em;border:1px solid;background:transparent;margin-right:16px;margin-top:16px;" onclick="this.parentNode.style.display=\'none\';' + cookieScript + '">' + ignoreText + "</button>";
  html += "</div>";

  var child = document.createElement("div");
  child.innerHTML = html;
  child = child.firstChild;
  body = document.getElementsByTagName("body")[0];
  body.appendChild(child);
});
