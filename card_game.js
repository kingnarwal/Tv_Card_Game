document.querySelector("#clickbtn").addEventListener("click", function(ev) {
   var el = document.querySelector(".flip-card:nth-child(1):not(.flipped), .flip-card.flipped + .flip-card:not(.flipped)");
   console.log(el);
   el.classList.add("flipped");
   
   
});
var random_number = Math.floor(Math.random() * 50) + 1;



 var imageArray =[("<img src='http://s20.postimg.org/ideyyn00p/image01.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/qk6yq7q3d/image02.png' width='154px' height='231px';>"), 
                  ("<img src='http://s20.postimg.org/6e8252jtl/image03.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/4np13l2ah/image04.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/ad59nw8gp/image05.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/530awlo7t/image06.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/4ergdnpi1/image07.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/dntmnrye1/image08.png' width='154px' height='231px';>"),  
                  ("<img src='http://s20.postimg.org/4hbc0ht5l/image09.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/jrb77oont/image10.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/3ucfayw9l/image11.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/gn0jaw7vd/image12.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/tu47z0ont/image13.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/hgrds3yzd/image14.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/l1n9bc3ix/image15.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/l2x74r5cp/image16.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/5ipte7v89/image17.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/xy56rikm1/image18.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/yrmdxvg0p/image19.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/5hkgyjis9/image20.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/47mnjhp09/image21.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/6evhl5jo9/image22.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/r1k76h32x/image23.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/x51rqdtcp/image24.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/avnujtxw9/image25.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/makboga8p/image26.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/60u5ljzkp/image27.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/apf7duv2x/image28.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/4e9zxftuh/image29.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/ucdm3gzbt/image30.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/iojk8xa6x/image31.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/qvbk0i09l/image32.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/w9exlsfdl/image33.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/8kzfqiiu1/image34.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/uzh46qlll/image35.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/zb5pvqsih/image36.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/pf4mw3mqh/image37.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/w6v1yybq1/image38.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/xzxyn9wwp/image39.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/49fff91ax/image40.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/4ngreuleh/image41.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/7vl8rw7o9/image42.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/qp71ow5w9/image43.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/tkk4vr9w9/image44.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/9r8131wih/image45.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/8q7sdxfix/image46.png' width='154px' height='231px';>"),
                  ("<img src='http://s20.postimg.org/o07nl4b15/image47.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/vu896iiu1/image48.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/7rrfbn26x/image49.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/src4gvt95/image50.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/ygsd16zfd/image51.png' width='154px' height='231px';>"),
				  ("<img src='http://s20.postimg.org/jyv5t7849/image52.png' width='154px' height='231px';>")
				  
				  ];
				  
				  
				  
				 
		document.getElementById("random_card_return").innerHTML = (imageArray[random_number]);		 