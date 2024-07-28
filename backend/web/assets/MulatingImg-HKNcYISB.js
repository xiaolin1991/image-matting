import{u as C,E as B,r as u,y as I,o as M,k as P,a as n,c as a,b as e,t as l,g as d,F as $,l as j,C as F,m as L}from"./index-BAY8fm7G.js";import{a as p}from"./ai_matting-RRY7bcgN.js";import{m as f}from"./message-IIU_pmva.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const A={class:"flex justify-center w-full h-full items-center"},z={class:"w-3/4 max-w-2xl rounded-lg p-6"},D={class:"flex justify-between items-center mb-4"},E={class:"text-lg font-bold"},N={class:"badge badge-info"},V={class:"space-y-2 max-h-96 w-full overflow-y-auto"},R=["src"],S={class:"grow ml-4 flex flex-col truncate"},U=["title"],q=["title"],G={class:"flex-none btn btn-circle btn-ghost ml-4"},H=["onClick"],J=e("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4",class:"opacity-25"},null,-1),K=e("path",{fill:"currentColor",d:"M4 12a8 8 0 017.5-7.98A4 4 0 104 12h4z",class:"opacity-75"},null,-1),O=[J,K],Q=["onClick"],T=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),W=[T],X=["onClick"],Y=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),Z=[Y],tt={key:0,class:"mt-6 text-center"},et={key:1,class:"mt-6 text-center"},it={__name:"MulatingImg",setup(st){const{t:c}=C(),w=B(),r=u(""),i=u([]);u(!0);const _=u(!0),v=I(()=>i.value.filter(s=>s.status==="processed").length),k=async()=>{console.log("start deal image");for(let s=0;s<i.value.length;s++){const o=i.value[s];if(_.value===!0){if(o.status==="waiting"){console.log("deal image",o.image_path,r.value);const t=await p("predict_from_folder_img",{image_path:o.image_path,folder_path:r.value});t.code===200?(o.status="processed",o.no_bg_image=t.data.no_bg_image):(o.status="error",f.error(t.error_msg))}}else return}_.value=!1},m=()=>{_.value=!1},x=async()=>{const s=await p("get_folder_images",r.value);s.code===200?i.value=s.data.image_list:f.error(s.error_msg)},y=()=>{window.history.back()},g=async s=>{await L("open_and_select_file",s)};return M(async()=>{r.value=w.params.folderPath,console.log(r.value,"foldersPath"),await x(),await k()}),P(()=>{console.log("unmounted"),m()}),(s,o)=>(n(),a("div",A,[e("div",z,[e("div",D,[e("h2",E,l(d(c)("ai_matting.mult_matting.title")),1),e("span",N,l(d(c)("ai_matting.mult_matting.processing"))+" "+l(v.value)+" / "+l(i.value.length),1)]),e("ul",V,[(n(!0),a($,null,j(i.value,(t,b)=>(n(),a("li",{key:b,class:"flex p-2 rounded-lg"},[e("img",{src:t.base64_image,alt:"image",class:"w-16 h-16 rounded flex-none"},null,8,R),e("div",S,[e("p",{class:"truncate",title:t.image_name},l(t.image_name),9,U),e("p",{class:"text-xs text-gray-400 truncate",title:t.image_path},l(t.image_path),9,q)]),e("span",G,[t.status==="waiting"?(n(),a("svg",{key:0,onClick:h=>g(t.image_path),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"w-6 h-6 animate-spin"},O,8,H)):t.status==="processed"?(n(),a("svg",{key:1,onClick:h=>g(t.no_bg_image),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"w-6 h-6 text-green-500"},W,8,Q)):t.status==="error"?(n(),a("svg",{key:2,onClick:h=>g(t.image_path),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"w-6 h-6 text-red-500"},Z,8,X)):F("",!0)])]))),128))]),_.value?(n(),a("div",tt,[e("button",{onClick:o[0]||(o[0]=t=>m()),class:"bg-green-500 text-white px-4 py-2 rounded-full"},l(d(c)("ai_matting.mult_matting.finish")),1)])):(n(),a("div",et,[e("button",{onClick:o[1]||(o[1]=t=>y()),class:"bg-green-500 text-white px-4 py-2 rounded-full"},l(d(c)("common.btn_back")),1)]))])]))}};export{it as default};
