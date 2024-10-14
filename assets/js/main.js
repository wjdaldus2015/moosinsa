$('.btn-search').click(function(){
    $('html').addClass('hidden');
    $('.side-menu').addClass('show');
})
$('.btn-back').click(function(){
    $('.side-menu').removeClass('show');
    $('html').removeClass('hidden');
})



$(function(){
    fetch('./assets/data/product.json')
    .then(res=>res.json())
    .then(json=>{
        prdList1Arr = json.prdList1;
        prdList2Arr = json.prdList2;
        prdList3Arr = json.prdList3;
    
        let list1List = ``;
        let list2List = ``;
        let list3List = ``;
    
        prdList1Arr.forEach(element => {
            percentEl = `<p class="percent">${element.price.percent}%</p>`;
    
            isPercent = (element.price.percent)?percentEl:'';
          

         
    
    
            list1List += `<li class="prd-item">
                            <div class="img-area">
                                <a href="">
                                    <img src="${element.thumb}" alt="">
                                </a>
                            </div>
                            <div class="desc-area">
                                <a href="">
                                <strong class="title">${element.brand}</strong>
                              
                                <div class="bottom">
                                    ${isPercent}
                                    <p class="won">${element.price.curr.toLocaleString()}원</p>
                                </div>

                               
                            </a>
                        </div>
                        </li>`
        });
        prdList2Arr.forEach(element => {
            precentEl = `<p class="percent">${element.price.percent}%</p>`;
    
            isPercent = (element.price.percent)?precentEl:'';
    
    
            list2List += `<li class="prd-item">
                            <div class="img-area">
                                <a href="">
                                    <img src="${element.thumb}" alt="">
                                </a>
                            </div>
                            <div class="desc-area">
                                <a href="">
                                <strong class="title">${element.brand}</strong>
                                <p class="top">N${element.title}</p>
                                <div class="bottom">
                                    ${isPercent}
                                    <p class="won">${element.price.curr.toLocaleString()}원</p>
                                </div>
                            </a>
                        </div>
                        </li>`
        });
        prdList3Arr.forEach(element => {
            precentEl = `<p class="percent">${element.price.percent}%</p>`;
    
            isPercent = (element.price.percent)?precentEl:'';
    
    
            list3List += `<li class="prd-item">
                            <div class="img-area">
                                <a href="">
                                    <img src="${element.thumb}" alt="">
                                </a>
                            </div>
                            <div class="desc-area">
                                <a href="">
                                <strong class="title">${element.brand}</strong>
                                <p class="top">N${element.title}</p>
                                <div class="bottom">
                                    ${isPercent}
                                    <p class="won">${element.price.curr.toLocaleString()}원</p>
                                </div>
                            </a>
                        </div>
                        </li>`
        });
    
        $('#list1').html(list1List);
        $('#list2').html(list2List);
        $('#list3').html(list3List);
    
    
        draggList();
    })
    

   



    // 드래그
    function draggList(){
        $('.promo-group').each(function(i,el){
            let w = $(this).find('.prd-item').width();
            let cnt = $(this).find('.prd-item').length;
            let gap = 0;
            if (cnt % 2 === 0) {
                cnt -= 1;
            }
            let oddIndexes = []; 
            for (let i = 0; i < cnt; i += 2) {
                oddIndexes.push(i);
            }
            oddIndexes.forEach((value, index) => {
                gap = index;
            });
            total = gap+1;
            Draggable.create($(this).find('.prd-list'), {
                type: "x",
                bounds: {
                    minX: 0,
                    maxX: -(total*w)+$('.wrapper').width()-(gap*5)-32,
                }
            });
    })
    }
   
    $('#footer .title').click(function(e){
        e.preventDefault();
    
    
        const children = $(this).children('.title svg')
    
    
        if($(this).hasClass('on')){
            $(this).removeClass('on').siblings('.sub').slideUp();
            
        }else{
            $('.title').removeClass('on').siblings('.sub').slideUp();
            $(this).addClass('on').siblings('.sub').slideDown();
           
        }
        children.toggleClass('on');
    
    })
    
    














})

// 드래그

//     $('.promo-group').each(function(i,el){
//         let w = $(this).find('.prd-item').width();
//         let cnt = $(this).find('.prd-item').length;
//         let gap = 0;
//         if (cnt % 2 === 0) {
//             cnt -= 1;
//         }
//         let oddIndexes = [];
//         for (let i = 0; i < cnt; i += 2) {
//             oddIndexes.push(i);
//         }
//         oddIndexes.forEach((value, index) => {
//             gap = index;
//         });
//         total = gap+1;
//         Draggable.create($(this).find('.prd-list'), {
//             type: "x",
//             bounds: {
//                 minX: 0,
//                 maxX: -(total*w)+$('.wrapper').width()-(gap*5)-16,
//             }
//         });
      
// })






  



// $('.footer-item .group-header').click(function(){
   
//     if($(this).hasClass('on')){
//         $(this).removeClass('on').siblings('.sub').slideUp();
//     }else{
//         $('.footer-item .group-header').removeClass('on').siblings('.sub').slideUp();
//         $(this).addClass('on').siblings('.sub').slideDown();

//     }
// })


   
    
  
   















