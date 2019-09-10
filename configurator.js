
    AOS.init();
    var viewID = 0
    var viewsObj = Object.keys(getConfig())
    var configObj = getConfig()[viewsObj[viewID]]
    var stage = document.querySelector('.config_image')
    var txtElm = document.querySelector('.text_config')
    stage.setAttribute('data-view-id', 0)
    stage.setAttribute('data-aos', 'fade-in')
    stage.setAttribute('data-color-id', 0)
    launchControl()
    loadCar(0)
    setText(0)
    attachListeners()

    function loadCar(colorId) {
        stage.setAttribute('data-color-id', colorId)
        var curCar = stage.querySelector('img')
        var item = configObj[colorId]
        var img = item.img
        img.src = item.url
        if(curCar){
            curCar.style.zIndex = 0
                curCar.classList.add('animated', 'fadeOut')
        }
        img.style.zIndex = 1
        //img.setAttribute('data-aos', 'fade-in')
        stage.appendChild(img)
        img.classList.add('animated', 'fadeIn')

        if(curCar){
        setTimeout(function() {
                curCar.parentNode.removeChild(curCar)
        }, 2500)
    }

    }

    function rightClick() {
        var viewid = parseInt(stage.getAttribute('data-view-id')) + 1 < viewsObj.length ? parseInt(stage.getAttribute('data-view-id')) + 1 : 0
        stage.setAttribute('data-view-id', viewid)
        configObj = getConfig()[viewsObj[viewid]]
        var colorid = parseInt(stage.getAttribute('data-color-id'))
        loadCar(colorid)
    }

    function leftClick() {
        var viewid = parseInt(stage.getAttribute('data-view-id')) > 0 ? parseInt(stage.getAttribute('data-view-id')) - 1 : viewsObj.length - 1
        stage.setAttribute('data-view-id', viewid)
        configObj = getConfig()[viewsObj[viewid]]
        var colorid = parseInt(stage.getAttribute('data-color-id'))
        loadCar(colorid)
    }

    function launchControl() {
        var barElm = document.querySelector('.config_selector')
        barElm.innerHTML = ''
        var views = []
        var div = null
        var timer = 1
        for (var i = 0, length1 = configObj.length; i < length1; i++) {
            div = document.createElement('div')
            div.classList.add('chip')
            div.setAttribute('data-aos', 'fade-right')
            div.setAttribute('data-aos-offset', '-300px')
            div.style.backgroundColor = '#' + configObj[i].hex
            div.setAttribute('data-color-id', i)
            if (configObj[i].hex === 'ffffff') {
                div.classList.add('border-1')
            }
            barElm.appendChild(div)
        }
    }

    function addChip(index, div, barElm) {
        setTimeout(function() {
            barElm.appendChild(div)

        }, 100 * index)

    }


    function attachListeners() {
        var rArrow = document.querySelector('.arrow_right')
        var lArrow = document.querySelector('.arrow_left')
        var chipElms = document.querySelectorAll('.chip')
        var chip = null
        for (var i = 0, length1 = chipElms.length; i < length1; i++) {
            chip = chipElms[i]
            chip.onclick = handleClick
            chip.addEventListener('mouseover', handleMouseOver)
            chip.addEventListener('mouseout', handleMouseOut)
        }

        rArrow.onclick = rightClick
        lArrow.onclick = leftClick
    }

    function handleClick() {
        var id = this.getAttribute('data-color-id')
        loadCar(id)
        setText(id)
        this.classList.add('active')
    }

    function handleMouseOut() {
        var txt = txtElm.getAttribute('data-text')
        //txtElm.innerHTML = txt
        animateText(txt)
        var chips = this.parentElement.querySelectorAll('.chip')
        for (var i = 0, length1 = chips.length; i < length1; i++) {
            chips[i].classList.remove('faded')
        }

    }

    function handleMouseOver() {
        var id = this.getAttribute('data-color-id')
        showText(id)
        var chips = this.parentElement.querySelectorAll('.chip')
        for (var i = 0, length1 = chips.length; i < length1; i++) {
            if (chips[i] !== this) {
                chips[i].classList.add('faded')
            }
        }

    }

    function animateText(txt) {

        txtElm.innerHTML = txt
        //txtElm.setAttribute('data-aos', 'fade-right')

    }

    function showText(id) {
        var item = configObj[id]
        txtElm.classList.remove('fadeInUpMini')
        setTimeout(function() {
            //txtElm.innerHTML = item.color
            animateText(item.color)
            txtElm.classList.add('fadeInUpMini')
        }, 500)
    }

    function setText(id) {
        var item = configObj[id]
        txtElm.setAttribute('data-text', item.color)
        //txtElm.innerHTML = item.color
        animateText(item.color)

    }

    function getConfig() {
        var obj = {
            'FRONT': [{ url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5212c92df046eb416f7543_FRONT_0.jpg', view: 'front', color: 'Liquid Mercury', hex: 'd1c5c5' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5212c9d4a63082c637c127_FRONT_1.jpg', view: 'front', color: 'Ebony', hex: '000000' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5240222d295f79dc8ffc94_FRONT_7.jpg', view: 'front', color: 'Deep Black Pearl', hex: '000000' },
                /*{ url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5240232df0462d337003f5_FRONT_3.jpg', view: 'front', color: '', hex: '' },*/
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5240232ca59a6b0c93c81a_FRONT_4.jpg', view: 'front', color: 'Steel Gray Metallic', hex: '878b8e' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5240247d6b7b7f78e99bc4_FRONT_6.jpg', view: 'front', color: 'Forest Green', hex: '006442' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d524025d4a630d79238c78d_FRONT_9.jpg', view: 'front', color: 'Granite Metallic', hex: '717d7d' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5240282ca59a19eb93c81c_FRONT_10.jpg', view: 'front', color: 'Earth Metallic', hex: '51504c' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5240282df046437a70041a_FRONT_2.jpg', view: 'front', color: 'Arctic White', hex: 'ffffff' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5240292df046eb3a70041c_FRONT_5.jpg', view: 'front', color: 'Midnight Blue Metallic', hex: '004c97' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5240292ca59a3c4493c81e_FRONT_8.jpg', view: 'front', color: 'Electric Candy Red', hex: 'ba0c2f' }
            ],
            'TQA': [{ url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5212c66f0ecb81a3c25d7e_TQA_0.jpg', view: 'TQA', color: 'Liquid Mercury', hex: 'd1c5c5' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5212c52ca59a6aa9932a88_TQA_1.jpg', view: 'TQA', color: 'Ebony', hex: '000000' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5243b82df0460b11700c35_TQA_7.jpg', view: 'front', color: 'Deep Black Pearl', hex: '000000' },
                /*{ url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5243b72ca59acae493cea5_TQA_3.jpg', view: 'front', color: '', hex: '' },*/
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5243b82d295f845090078a_TQA_4.jpg', view: 'front', color: 'Steel Gray Metallic', hex: '878b8e' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5243b97d6b7b0c08e9b2ae_TQA_6.jpg', view: 'front', color: 'Forest Green', hex: '006442' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5243bcd4a630538838cd73_TQA_9.jpg', view: 'front', color: 'Granite Metallic', hex: '717d7d' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5243bb6f0ecbbe0cc32e5c_TQA_10.jpg', view: 'front', color: 'Earth Metallic', hex: '51504c' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5243b72d295fdb57900788_TQA_2.jpg', view: 'front', color: 'Arctic White', hex: 'ffffff' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5243b97d6b7b24cde9b2ad_TQA_5.jpg', view: 'front', color: 'Midnight Blue Metallic', hex: '004c97' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5243ba7d6b7b5677e9b2af_TQA_8.jpg', view: 'front', color: 'Electric Candy Red', hex: 'ba0c2f' }
            ],
            'TQP': [{ url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5212ca6f0ecb28b6c25d86_TQP_0_vertical_logo.jpg', view: 'TQP', color: 'Liquid Mercury', hex: 'd1c5c5' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5212cb2df04624746f754d_TQP_1_vertical_logo.jpg', view: 'TQP', color: 'Ebony', hex: '000000' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5244f62ca59a550293d101_TQP_7_vertical_logo.jpg', view: 'front', color: 'Deep Black Pearl', hex: '000000' },
                /*{ url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5244f67d6b7b32c9e9b5ef_TQP_3_vertical_logo.jpg', view: 'front', color: '', hex: '' },*/
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5244f42d295fe5ad900e6f_TQP_4_vertical_logo.jpg', view: 'front', color: 'Steel Gray Metallic', hex: '878b8e' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5244f47d6b7b66c0e9b5ed_TQP_6_vertical_logo.jpg', view: 'front', color: 'Forest Green', hex: '006442' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5244f82df04672a5700dd8_TQP_9_vertical_logo.jpg', view: 'front', color: 'Granite Metallic', hex: '717d7d' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5244f8d4a630eccf38cf0c_TQP_10_vertical_logo.jpg', view: 'front', color: 'Earth Metallic', hex: '51504c' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5244f67d6b7b0a5ce9b602_TQP_2_vertical_logo.jpg', view: 'front', color: 'Arctic White', hex: 'ffffff' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5244f6d4a630b38838cf0a_TQP_5_vertical_logo.jpg', view: 'front', color: 'Midnight Blue Metallic', hex: '004c97' },
                { url: 'https://uploads-ssl.webflow.com/5d03c03e30118383cf62f0d5/5d5244f86f0ecb93c4c3333d_TQP_8_vertical_logo.jpg', view: 'front', color: 'Electric Candy Red', hex: 'ba0c2f' }
            ]
        }
        for (var k in obj) {
            for (var i = 0, length1 = obj[k].length; i < length1; i++) {
                obj[k][i].img = new Image()
                obj[k][i].src = obj[k].url
            }
        }
        return obj
    }
