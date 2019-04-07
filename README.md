widgetFrino

- add facebook widget or whatever you want, widget can change color when leave area of element ex slider
- choose your icon, url and colors
- set of icons you can find here: www.rafalfuczynski.com/frino/icons

demo www.rafalfuczynski.com/preview/widgetfrino

How to use

1. add this tag `<a href="" id="widget_frino"></a>` in your html file
2. in head of your website past this `<link href="https://cdn.jsdelivr.net/gh/arbati6/frino@1.0.1/frinostyle.min.css" rel="stylesheet">`
3. also remeber include css file
4. add data attribute "data-area" to element, when position of widget will be lower than height of this element, widget will change style
5. in js file you can change icon, URL and much more: 

    `url: "https://facebook.com",          // put destination URL` \
    `iconClass: "F-FACEBOOK-OFFICIAL-F",   // class list www.rafalfuczynski.com/frino/icons` \
    `primaryBg: "#fff",                    // primary background color` \
    `primaryIconColor: "#3624cc",          // primary icon color` \
    `scrollBg: "#3624cc",                  // background color under height of element` \
    `scrollIconColor: "#fff",              // icon color under height of element` \
    `borderRadius: true                    // false if wont rounded corners` \
