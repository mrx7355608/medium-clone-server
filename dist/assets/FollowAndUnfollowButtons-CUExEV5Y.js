import{b as g,h as p,r as m,j as l,a as c,S as f,a4 as x,a5 as y}from"./index-N_Esq6xR.js";function h({authorID:e}){const{user:s,setUser:a}=g(),r=p({duration:4e3,isClosable:!0}),[u,i]=m.useState({isFollowing:!1,isUnfollowing:!1});return l.jsx(l.Fragment,{children:(s==null?void 0:s._id)!==e?s!=null&&s.following.includes(e)?l.jsx(c,{bg:"gray.900",rounded:"full",px:"6",py:"2",pt:"2.5",size:"sm",my:"auto",ml:"auto",color:"white",_hover:{bg:"gray.900",color:"white"},onClick:d,children:u.isUnfollowing?l.jsx(f,{size:"sm"}):"Unfollow"}):l.jsx(c,{variant:"outline",rounded:"full",borderColor:"black",px:"6",py:"2",pt:"2.5",size:"sm",my:"auto",ml:"auto",onClick:w,children:u.isFollowing?l.jsx(f,{size:"sm"}):"Follow"}):null});async function w(){i(o=>({...o,isFollowing:!0}));try{const{data:o,error:n}=await x(e);if(n)return r({description:n,status:"error"});a(t=>t?{...t,following:o}:null),r({description:"You are now following this user",status:"success"})}catch{r({description:"Internal server error",status:"error"})}finally{i(o=>({...o,isFollowing:!1}))}}async function d(){i(o=>({...o,isUnfollowing:!0}));try{const{data:o,error:n}=await y(e);if(n)return r({description:n,status:"error"});a(t=>t?{...t,following:o}:null),r({description:"User un-followed",status:"success"})}catch{r({description:"Internal server error",status:"error"})}finally{i(o=>({...o,isUnfollowing:!1}))}}}export{h as F};
