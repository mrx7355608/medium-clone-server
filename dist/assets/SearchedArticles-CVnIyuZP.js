import{m as o,j as r,S as c,T as m}from"./index-DYWyMemB.js";import{A as p}from"./ArticlesList-CPJwlqTd.js";import{u as n}from"./useFetch-DzajyYiW.js";import"./articles-CI0uANMa.js";import"./chunk-4FCEGNGT-BlQ-xkAW.js";import"./chunk-5FG5SY5K-DB2SVxzE.js";import"./chunk-AXLEE3EK-2dpTatEp.js";import"./chunk-W7WUSNWJ-BBuZZILn.js";function A(){const[s,l]=o(),e=s.get("query"),{loading:a,err:t,data:i}=n(`/api/articles/search?articles=${e}`);return r.jsx(r.Fragment,{children:a?r.jsx(c,{}):t?r.jsx(m,{color:"red.600",children:t}):r.jsx(p,{articles:i})})}export{A as default};
