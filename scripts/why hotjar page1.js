import {navbar,footer,productFun,whyhotrajFun,LearnFun,companyho} from "../components/navbar.js"







document.querySelector('#navbar').innerHTML=navbar();
document.querySelector('#learning').addEventListener("click",LearnFun);
document.querySelector('#product').addEventListener("click",productFun);
document.querySelector('#whyhotraj').addEventListener("click",whyhotrajFun);
document.querySelector('#company').addEventListener("click",companyho);
document.querySelector('#footer').innerHTML=footer();



let divsOfEtra=document.querySelectorAll("#videoDiv>div>.showextra");

let videoarr=[`https://videos.ctfassets.net/lh3zuq09vnm2/2q1Ma50UnBKlnPbbRReO2j/f50946203d4a6bb26285a80a7275e571/heatmap-scrolling.mp4`,
`https://videos.ctfassets.net/lh3zuq09vnm2/01KfU1nkCO5x9FErLB3rpB/6d3466ae9ab7df29b778595d02a5274a/Recordings_1.mov`,
`https://videos.ctfassets.net/lh3zuq09vnm2/4qQy2K5TTJA4TvrqtAvptj/826fa8d309ce2368ea14756a727706a3/incoming_feedback_1.mp4`,
`https://videos.ctfassets.net/lh3zuq09vnm2/36VzBCqGyWUrbzTHz03Al8/5e3ef017e35949609e09c3ed73e76d08/survey-add_question.mp4`]

let video=document.querySelector("#videoDiv>video");
video.src=videoarr[0];

divsOfEtra.forEach((el,i)=>{
    el.addEventListener("click",function(){
        changeContent(event,i);
    })
})

document.querySelector("#videoDiv>div>.showextra>p").style.display="block";

let changeContent=(event,i)=>{
    let x=document.querySelectorAll("#videoDiv>div>.showextra>p");
    x.forEach(el=>{
        el.style.display="none"
    });
    console.log(event)
    event.target.lastElementChild.style.display="block";
    video.src=null;
    video.src=videoarr[i];
};





$(function() {
    // vars for clients list carousel
    // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
    var $clientcarousel = $('#clients-list');
    var clients = $clientcarousel.children().length;
    var clientwidth = (clients * 220); // 140px width for each client item 
    $clientcarousel.css('width', clientwidth);
  
    var rotating = true;
    var clientspeed = 0;
    var seeclients = setInterval(rotateClients, clientspeed);
  
    $(document).on({
      mouseenter: function() {
        rotating = true; // turn off rotation when hovering
      },
      mouseleave: function() {
        rotating = true;
      }
    }, '#clients');
  
    function rotateClients() {
      if (rotating != false) {
        var $first = $('#clients-list li:first');
        $first.animate({
          'margin-left': '-220px'
        }, 2000, function() {
          $first.remove().css({
            'margin-left': '0px'
          });
          $('#clients-list li:last').after($first);
        });
      }
    }
  });



  let array=[ `
<div>
<div>
<p>SPOT UX ISSUES FAST AND PRIORITIZE FIXES</p>
<h2>Discover every issue users encounter</h2>
<p>Don???t rely on support tickets alone. Watch users getting stuck and collect feedback when they encounter an issue.</p>
</div>
<div>
<img src="https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2F4qBqomJP2NZLTEfh3cvFzo%2F6aa62dc8d32e43c4220fc35ecb292c03%2FStudentcrowd_testimonial.png&w=1920&q=75" alt="">
</div>
<div>
<p>???We wouldn't have been able to identify the problem without Hotjar.???</p>
<h4>Paul Humphreys</h4>
<p>COO & Founder, StudentCrowd</p>
</div>
</div>`,`
<div>
<div>
<p>DISCOVER USER INSIGHTS</p>
<h2>Spot endless opportunities to improve your product</h2>
<p>Get inspired with endless new ideas to improve your product and grow your business with reliable user insights.</p>
</div>
<div>
<img src="https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2F6AkEKlXMYkLNZa47j9HjEj%2F8ba30721907b5a10190e82a7f449ae35%2FZenprint.jpg&w=1920&q=75" alt="">
</div>
<div>
<p>"Hotjar reveals where in the customer journey people leave, helping us reduce drop-offs and increase conversions."</p>
<h4>Piriya Kantong</h4>
<p>Senior Analyst, Zenprint</p>
</div>
</div>`,`
<div>
<div>
<p>VALIDATE YOUR IDEAS WITH RELIABLE DATA</p>
<h2>Feel confident you???re meeting user needs</h2>
<p>Stop guessing and understand exactly what your users want. Reduce assumptions and validate your ideas with real, unbiased insights.</p>
</div>
<div>
<img src="https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2F6WkVeKtpbLSpwez6ty7YrK%2F1a1721e50973dc77e5b29a2795882497%2FHubspot_testimonial.png&w=1920&q=75" alt="">
</div>
<div>
<p>???Hotjar gave us the confidence to begin designing a new page template, which we A/B tested to get a final version.???</p>
<h4>Eric Peters</h4>
<p>Growth Product Manager at Hubspot</p>
</div>
</div>`,`
<div>
<div>
<p>INCREASE TEAM ALIGNMENT</p>
<h2>Get buy-in for your ideas with head-turning insights</h2>
<p>Build a compelling case for your ideas with real user insights and feedback. Get everyone in your team on the same page.</p>
</div>
<div>
<img src="https://images.ctfassets.net/lh3zuq09vnm2/727P57YyhcH0chwEdFUL48/519f7f5d4987dcb33175edc579893595/unbounce-Testimonials.svg" alt="">
</div>
<div>
<p>???For most projects, you???re going to have a lot of stakeholders to convince. Showing real user data from Hotjar really helps get their attention.???</p>
<h4>Michael Aagaard</h4>
<p>Senior Conversion Optimizer, Unbounce</p>
</div>
</div>`]

var i=0;
document.querySelector("#divSliderFor").innerHTML=array[i];

function chanGeIndexplus(){
  
  i++;
  if(i>3){
    i=0;
  }
  document.querySelector("#divSliderFor").innerHTML=array[i];
}
function chanGeIndexminus(){
  console.log("bhushan")
  i--;
  if(i<0){
    i=3;
  }
  document.querySelector("#divSliderFor").innerHTML=array[i];
}

let ChangingTheDivFun=(i)=>{
  document.getElementById("divSliderFor").innerHTML=null;
  if(i>array.length-1){
    i=0;
  }
  if(i<0){
    i=array.length-1;
  }
  document.getElementById("divSliderFor").innerHTML=array[i];
};

  let btnForSliders=document.getElementById("arrwImg1");
  btnForSliders.addEventListener("click",chanGeIndexplus);
  let btnForSliderstwo=document.getElementById("arrwImg2");
  btnForSliderstwo.addEventListener("click",chanGeIndexminus);
  