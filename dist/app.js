const EMAIL="Kaleb@WillisPropertyServices.com";
const PHONE="9043124930";
document.querySelectorAll(".menu-btn").forEach((btn)=>{
  btn.addEventListener("click",()=>{
    const nav=btn.closest("header").querySelector(".nav-mobile");
    const open=nav.hasAttribute("hidden");
    if(open) nav.removeAttribute("hidden"); else nav.setAttribute("hidden","");
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
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
