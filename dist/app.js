const EMAIL="Kaleb@WillisPropertyServices.com";
const PHONE="9043124930";
const ICON_MENU='<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
const ICON_CLOSE='<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
document.querySelectorAll("header").forEach((header)=>{
  const btn=header.querySelector(".menu-btn");
  const nav=header.querySelector(".nav-mobile");
  if(!btn||!nav) return;
  const setOpen=(open)=>{
    nav.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.innerHTML = open ? ICON_CLOSE : ICON_MENU;
  };
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    setOpen(!nav.classList.contains("is-open"));
  });
  nav.querySelectorAll("a").forEach((a)=>a.addEventListener("click",()=>setOpen(false)));
  document.addEventListener("click",(e)=>{
    if(!header.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape") setOpen(false);
  });
});
document.querySelectorAll(".quote-form").forEach((form)=>{
  const success=form.parentElement.querySelector(".quote-success");
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    const err=form.querySelector("[data-error]");
    let msg="";
    if(!data.name || data.name.trim().length<2) msg="Please enter your name.";
    else if((data.phone||"").replace(/\D/g,"").length<10) msg="Enter a 10-digit phone number.";
    else if(data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) msg="Enter a valid email, or leave it blank.";
    else if(!data.propertyType) msg="Select a property type.";
    else if(!data.service) msg="Select a service.";
    else if(!data.message || data.message.trim().length<8) msg="Tell us a little about the work.";
    if(msg){ err.hidden=false; err.textContent=msg; return; }
    err.hidden=true;
    const body=["New service request from "+data.name,"","Phone: "+data.phone,data.email?"Email: "+data.email:null,"Property: "+data.propertyType,"Service: "+data.service,data.address?"Address: "+data.address:null,"",data.message].filter(Boolean).join("\n");
    const first=data.name.trim().split(" ")[0];
    success.querySelector(".success-copy").textContent="Thanks, "+first+". Send this to Kaleb by text or email, or call now — he will take it from there.";
    success.querySelector("#success-sms").href="sms:+1"+PHONE+"?body="+encodeURIComponent(body);
    success.querySelector("#success-mail").href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Service request — "+data.service)+"&body="+encodeURIComponent(body);
    form.hidden=true; success.hidden=false;
  });
  success.querySelector("#quote-reset").addEventListener("click",()=>{
    form.reset(); form.hidden=false; success.hidden=true;
  });
});
