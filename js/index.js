const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"// check
  },
  "cta": {
    "h1": "DOM Is Awesome", //check
    "button": "Get Started",// check
    "img-src": "img/header-img.png"// check
  },
  "main-content": {
    "features-h4":"Features",//check

    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",//check
    
    "about-h4":"About",//check
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",//check

    "middle-img-src": "img/mid-page-accent.jpg",//check

    "services-h4":"Services",//check

    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",//check

    "product-h4":"Product",//check

    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",//check

    "vision-h4":"Vision",//check

    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",//check
  },
  "contact": {
    "contact-h4" : "Contact",//check
    "address" : "123 Way 456 Street Somewhere, USA",//check
    "phone" : "1 (888) 888-8888",//check
    "email" : "sales@greatidea.io",//check
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"//check
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let mainImg = document.querySelector("#cta-img");
mainImg.setAttribute("src", siteContent["cta"]["img-src"]);

let a1 = document.querySelector("nav a");
a1.textContent = siteContent["nav"]["nav-item-1"]

let a2 = document.querySelector("nav a:nth-child(2)");
a2.textContent = siteContent["nav"]["nav-item-2"]

let a3 = document.querySelector("nav a:nth-child(3)");
a3.textContent = siteContent["nav"]["nav-item-3"]

let a4 = document.querySelector("nav a:nth-child(4)");
a4.textContent = siteContent["nav"]["nav-item-4"]

let a5 = document.querySelector("nav a:nth-child(5)");
a5.textContent = siteContent["nav"]["nav-item-5"]

let a6 = document.querySelector("nav a:nth-child(6)");
a6.textContent = siteContent["nav"]["nav-item-6"]





let hh1 = document.querySelector("h1")

hh1.textContent = siteContent["cta"]["h1"];
hh1.innerHTML = "DOM<br>Is<br>Awesome";
// console.log(hh1)





let button = document.querySelector('button')
button.textContent = siteContent["cta"]['button']

let feat = document.querySelector(".text-content  h4")
// console.log(feat)
feat.textContent = siteContent['main-content']["features-h4"] 


let p1 = document.querySelector(".text-content p" );
p1.textContent = siteContent["main-content"]["features-content"]

let about = document.querySelector(".text-content:nth-child(2) h4");
about.textContent = siteContent["main-content"]["about-h4"]

let p2  = document.querySelector(".text-content:nth-child(2) p")
p2. textContent = siteContent["main-content"]["about-content"]

let longImg = document.getElementById("middle-img");
longImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

let service = document.querySelector(".bottom-content .text-content h4");
service.textContent = siteContent["main-content"]["services-h4"]

let p3 = document.querySelector(".bottom-content .text-content p")
p3.textContent =  siteContent["main-content"]["services-content"]

let product = document.querySelector(".bottom-content .text-content:nth-child(2) h4")
product.textContent = siteContent["main-content"]["product-h4"]

let p4 = document.querySelector(".bottom-content .text-content:nth-child(2) p");
p4.textContent = siteContent["main-content"]["product-content"]

let vision = document.querySelector(".bottom-content .text-content:nth-child(3) h4")
vision.textContent = siteContent["main-content"]["vision-h4"];

let p5 = document.querySelector(".bottom-content .text-content:nth-child(3) p");
p5.textContent = siteContent["main-content"]["vision-content"]

let cont = document.querySelector(".contact h4");
cont.textContent = siteContent["contact"]["contact-h4"]

let p6 = document.querySelector(".contact p");
p6.textContent = siteContent["contact"]["address"]
p6.innerHTML = "123 Way 456 Street <br>Somewhere, USA"

let p7 = document.querySelector("section.contact p:nth-child(3)");
p7.textContent = siteContent["contact"]["phone"]

let p8 = document.querySelector("section.contact p:nth-child(4)");
p8.textContent = siteContent["contact"]["email"]

let foot = document.querySelector("footer p")
foot.textContent = siteContent["footer"]["copyright"]


foot.className= "footing"

