const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let a=null;e.addEventListener("click",(l=>{a=setInterval((()=>{e.disabled=!0,t.disabled=!1,d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(d=>{clearInterval(a),t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.c6df5017.js.map
