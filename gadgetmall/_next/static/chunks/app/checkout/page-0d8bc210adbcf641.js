(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{2606:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r={src:"/_next/static/media/easypaisa.0618bad5.png",height:154,width:154,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEX+///CwsXPz9J/fIXV19jf7OX////+/v7+/v7x8PHr+/HV19jKx8y3ubzGw8jU89+Ni5N0wpKOzqepqK0E/Q0aAAAADHRSTlP9////5ub/9OT5//7BFuFqAAAACXBIWXMAACE4AAAhOAFFljFgAAAAO0lEQVR4nB3GSRLAMAgDMENam5Cl2///2hl0EkJSl4Rgv9sgEBytWSXf56owkySOveZeNnG6febuCKL8QnUBqhFF/lIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},4469:(e,t,a)=>{"use strict";a.d(t,{CartProvider:()=>l,_:()=>n});var r=a(5155),s=a(2115);let i=(0,s.createContext)(void 0);function l(e){let{children:t}=e,[a,l]=(0,s.useState)([]),[n,d]=(0,s.useState)(!1);(0,s.useEffect)(()=>{d(!0);let e=localStorage.getItem("cart");if(e)try{l(JSON.parse(e))}catch(e){console.error("Failed to parse cart from localStorage",e)}},[]),(0,s.useEffect)(()=>{n&&localStorage.setItem("cart",JSON.stringify(a))},[a,n]);let o=e=>{l(t=>t.filter(t=>t.id!==e))},c=a.reduce((e,t)=>e+t.quantity,0),u=a.reduce((e,t)=>e+t.price*t.quantity,0);return(0,r.jsx)(i.Provider,{value:{items:a,addItem:e=>{l(t=>t.find(t=>t.id===e.id)?t.map(t=>t.id===e.id?{...t,quantity:t.quantity+e.quantity}:t):[...t,e])},removeItem:o,updateQuantity:(e,t)=>{if(t<=0){o(e);return}l(a=>a.map(a=>a.id===e?{...a,quantity:t}:a))},clearCart:()=>{l([])},itemCount:c,subtotal:u},children:t})}function n(){let e=(0,s.useContext)(i);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}},6091:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,6874,23)),Promise.resolve().then(a.bind(a,9366))},6901:()=>{},7905:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r={src:"/_next/static/media/Frame.3dfd8226.png",height:153,width:153,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEX/////8sbySU/3o7CAgIH96Oj68/P//fzx8fLu6uj/0kX1W1n99uCQkpLv7u70WQz/ywD+6q3xUgv+yQC0tLPY1tj/116mp6auq1ptAAAACXBIWXMAACE4AAAhOAFFljFgAAAAPklEQVR4nB3JWw6AIAxFwaNWeouAb93/To38TTKAuycHZ8jLOHds64Tj7Ofxg5KfXoqiO1pwmdlbrSKF1JQ+O4kB8f3KBXUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},9366:(e,t,a)=>{"use strict";a.d(t,{default:()=>u});var r=a(5155),s=a(2115),i=a(6874),l=a.n(i),n=a(7905),d=a(2606),o=a(6766);a(6901);var c=a(4469);let u=()=>{let{subtotal:e,clearCart:t}=(0,c._)(),a=1500*(e>0),i=e+a,[u,h]=(0,s.useState)({firstName:"",lastName:"",company:"",street:"",city:"",state:"",zip:"",phone:"",email:"",notes:""}),[m,p]=(0,s.useState)("cod"),A=[{id:1,title:"Product 1",quantity:2,price:500},{id:2,title:"Product 2",quantity:1,price:300}];return(0,r.jsx)("div",{className:"checkout-page",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"checkout-content",children:[(0,r.jsxs)("div",{className:"checkout-form",children:[(0,r.jsx)("h2",{children:"Billing Details"}),(0,r.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[(0,r.jsxs)("div",{className:"form-row",children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"first-name",children:"First name *"}),(0,r.jsx)("input",{type:"text",id:"first-name",value:u.firstName,onChange:e=>h({...u,firstName:e.target.value}),required:!0})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"last-name",children:"Last name *"}),(0,r.jsx)("input",{type:"text",id:"last-name",value:u.lastName,onChange:e=>h({...u,lastName:e.target.value}),required:!0})]})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"company",children:"Company name (optional)"}),(0,r.jsx)("input",{type:"text",id:"company",value:u.company,onChange:e=>h({...u,company:e.target.value})})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"street",children:"Street address *"}),(0,r.jsx)("input",{type:"text",id:"street",placeholder:"House number and street name",value:u.street,onChange:e=>h({...u,street:e.target.value}),required:!0})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"city",children:"Town / City *"}),(0,r.jsx)("input",{type:"text",id:"city",value:u.city,onChange:e=>h({...u,city:e.target.value}),required:!0})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"state",children:"State *"}),(0,r.jsx)("input",{type:"text",id:"state",value:u.state,onChange:e=>h({...u,state:e.target.value}),required:!0})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"zip",children:"ZIP / Postal code *"}),(0,r.jsx)("input",{type:"text",id:"zip",value:u.zip,onChange:e=>h({...u,zip:e.target.value}),required:!0})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"phone",children:"Phone *"}),(0,r.jsx)("input",{type:"tel",id:"phone",value:u.phone,onChange:e=>h({...u,phone:e.target.value}),required:!0})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"email",children:"Email address *"}),(0,r.jsx)("input",{type:"email",id:"email",value:u.email,onChange:e=>h({...u,email:e.target.value}),required:!0})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"notes",children:"Order notes (optional)"}),(0,r.jsx)("textarea",{id:"notes",value:u.notes,onChange:e=>h({...u,notes:e.target.value}),placeholder:"Notes about your order, e.g. special delivery instructions",rows:4})]})]})]}),(0,r.jsxs)("div",{className:"order-summary",children:[(0,r.jsx)("h2",{children:"Your Order"}),(0,r.jsxs)("div",{className:"order-details",children:[(0,r.jsxs)("div",{className:"order-subtotal",children:[(0,r.jsx)("span",{children:"Subtotal"}),(0,r.jsxs)("span",{children:["Rs.",e.toLocaleString()]})]}),(0,r.jsxs)("div",{className:"order-shipping",children:[(0,r.jsx)("span",{children:"Shipping"}),(0,r.jsxs)("span",{children:["Rs.",a.toLocaleString()]})]}),(0,r.jsxs)("div",{className:"order-total",children:[(0,r.jsx)("span",{children:"Total"}),(0,r.jsxs)("span",{children:["Rs.",i.toLocaleString()]})]})]}),(0,r.jsxs)("div",{className:"payment-methods",children:[(0,r.jsx)("h3",{children:"Payment Methods"}),(0,r.jsxs)("div",{className:"payment-options",children:[(0,r.jsxs)("div",{className:"payment-option",children:[(0,r.jsx)("input",{type:"radio",id:"cod",value:"cod",checked:"cod"===m,onChange:()=>p("cod")}),(0,r.jsx)("label",{htmlFor:"cod",children:(0,r.jsx)(o.default,{src:n.default,alt:"Payment Methods",width:120,height:50})})]}),(0,r.jsxs)("div",{className:"payment-option",children:[(0,r.jsx)("input",{type:"radio",id:"bank-transfer",value:"bank-transfer",checked:"bank-transfer"===m,onChange:()=>p("bank-transfer")}),(0,r.jsx)("label",{htmlFor:"bank-transfer",children:(0,r.jsx)(o.default,{src:d.default,alt:"Payment Methods",width:120,height:50})})]})]})]}),(0,r.jsx)("button",{onClick:()=>{if(["firstName","lastName","street","city","state","zip","phone","email"].filter(e=>!u[e]).length>0){alert("Please fill in all required fields marked with *");return}if(!m){alert("Please select a payment method.");return}if(0===A.length){alert("Your cart is empty. Please add some products before placing an order.");return}t()},className:"btn place-order-btn",disabled:!m||!u.firstName||!u.lastName||!u.street||!u.city||!u.state||!u.zip||!u.phone||!u.email,children:(0,r.jsx)(l(),{href:"/loading",children:"Place Order"})})]})]})})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[204,63,259,441,684,358],()=>t(6091)),_N_E=e.O()}]);