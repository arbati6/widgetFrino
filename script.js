let widgetSettings = {
    
    url: "https://facebook.com",          // put destination URL
    iconClass: "F-FACEBOOK-OFFICIAL-F",   // class list www.rafalfuczynski.com/frino/icons
    primaryBg: "#fff",                    // primary background color
    primaryIconColor: "#3624cc",          // primary icon color
    scrollBg: "#3624cc",                  // background color under height of element
    scrollIconColor: "#fff",              // icon color under height of element
    borderRadius: true                    // false if won`t rounded corners

}
    function createWidget(){
        
        let newWidget = document.getElementById("widget_frino");
        newWidget.setAttribute('href', widgetSettings.url);
        newWidget.className = widgetSettings.iconClass;
        newWidget.style.background = widgetSettings.primaryBg;
        newWidget.style.color = widgetSettings.primaryIconColor;

            if (widgetSettings.borderRadius == true) {
                newWidget.style.borderRadius = 3 + "px";
            }
    
        addEventListener("scroll", function changeColors() {
                
            let sliderHeight = document.querySelector("[data-area]").offsetHeight; 
            let widgetDistanceFromTop = newWidget.getBoundingClientRect().top;
                if ( (window.scrollY + widgetDistanceFromTop) > sliderHeight ) {
                    newWidget.style.background = widgetSettings.scrollBg
                    newWidget.style.color = widgetSettings.scrollIconColor
                } else {
                    newWidget.style.background = widgetSettings.primaryBg
                    newWidget.style.color = widgetSettings.primaryIconColor
                }
        });
    }

    createWidget()