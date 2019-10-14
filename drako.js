(function() {
    var specs_data = {
        gte: {
            right: [{ title: "AC Charging", text: "15 kW with onboard charger" },
                { title: "DC Fast Charging", text: "150 kW" },
                { title: "Charging Protocols", text: "Compatible with current widely available EV charging infrastructure: J1772, CCS, Chademo" },
                { title: "Suspension", text: "Öhlins TTX 36" },
                { title: "Brakes", text: "Brembo Carbon Ceramic, Front: 6 piston caliper, 395 mm x 36 mm carbon ceramic rotor, Rear: 4 piston caliper, 395 mm x 32 mm carbon ceramic rotor" },
                { title: "Wheels", text: "21 inch monoblock forged one piece wheels" },
                { title: "Tires", text: "Michelin Pilot Sport 4S tires (Front: 295/30/21; Rear: 315/30/21)" }
            ],
            left: [{ title: "Powertrain", text: "Four permanent magnet hybrid synchronous motors (225 kW each)" },
                { title: "Transmission", text: "Four direct drive gearboxes" },
                { title: "Reduction Ratio", text: "5.56:1" },
                { title: "Horsepower", text: "1,200 hp" },
                { title: "Wheel Torque", text: "6,500 ft-lbs / 8,880 nM" },
                { title: "Top Speed", text: "206 mph" },
                { title: "Battery", text: "Standard high power battery with massively parallel cooling architecture" },
                { title: "Battery Energy", text: "90 kWh" },
                { title: "Battery Voltage", text: "450V " },
                { title: "Battery Amperage", text: "2200A peak / 1800A continuous" }
            ]
        },
        track: {
            left: [{ title: "Track Package", text: "Includes track tuned battery, fully adjustable track suspension, two sets of wheels and tires (road + track)" },
                { title: "Powertrain", text: "Four permanent magnet hybrid synchronous motors (225 kW each)" },
                { title: "Transmission", text: "Four direct drive gearboxes" },
                { title: "Reduction Ratio", text: "5.56:1" },
                { title: "Horsepower", text: "1,200 hp" },
                { title: "Wheel Torque", text: "6,500 ft-lbs / 8,880 nM" },
                { title: "Top Speed", text: "206 mph" },
                { title: "Battery", text: "Track high power battery with massively parallel cooling architecture" },
                { title: "Battery Energy", text: "90 kWh" },
                { title: "Battery Voltage", text: "450V" }
            ],
            right: [{ title: "AC Charging", text: "15 kW with onboard charger" },
                { title: "DC Fast Charging", text: "150 kW" },
                { title: "Charging Protocols", text: "Compatible with current widely available EV charging infrastructure: J1772, CCS, Chademo" },
                { title: "Suspension", text: "Track tuned Four-Way Adjustable Öhlins TTX 36" },
                { title: "Brakes", text: "Brembo Carbon Ceramic , Front: 6 piston caliper, 395 mm x 36 mm carbon ceramic rotor, Rear: 4 piston caliper, 395 mm x 32 mm carbon ceramic rotor" },
                { title: "Wheels", text: "Road Package: 21 inch monoblock forged one piece wheels Track Package: 20 inch lightweight three piece forged wheels" },
                { title: "Tires", text: "Road Package: Michelin Pilot Sport 4S tires (Front: 295/30/21; Rear: 315/30/21) Track Package: Michelin Pilot Sport Cup 2 tires (Front: 285/35/20; Rear: 305/30/20)" },
                { title: "Battery Amperage", text: "2200A peak / 1800A continuous" },
                { title: "Battery Cooling", text: "Massively parallel cooling architecture" }
            ]
        }
    }

    function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
        return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed;
    }

    function isInViewport(el) {

        var rect = el.getBoundingClientRect()
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight)
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth)
        var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
        var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)
        if (vertInView && horInView) {
            return rect
        } else {
            return false
        }
    }

    function preload(callback) {
        var elm = document.getElementById("hometop")
        if (!elm) { return true }
        var style = elm.currentStyle || window.getComputedStyle(elm, false)
        var src = style.backgroundImage.slice(4, -1).replace(/"/g, "")
        if (!src.length) {
            callback()
        } else {
            var img = new Image()
            img.onload = function() {
                elm.classList.add('animated', 'fadeIn')
                callback()
            }
            img.src = src
        }
    }

    function setupSplashPage() {
        var elms = document.querySelectorAll('.div-block-specs, .div-block-gte, .home_tagline')
        var tagline = document.querySelector(".home_tagline")
        var getE = document.querySelector(".div-block-gte")
        var specsE = document.querySelector('.div-block-specs')
        var arrowE = document.querySelector('.div-block-arrow')
        var margin = null
        var top = null
        if (!tagline || !getE) { return false }
        preload(function() {
            getE.style.display = 'flex'
            getE.addEventListener('animationend', function(event) {
                var elemRect = getE.getBoundingClientRect()
                var bottomPx = arrowE.getBoundingClientRect().top ? arrowE.getBoundingClientRect().top : window.innerHeight
                var midPx = bottomPx - (elemRect.top)
                if (window.innerWidth > 800) {
                    margin = (midPx / 2)
                    top = (elemRect.top) + margin

                }
                if (window.innerWidth < 800) {
                    margin = (midPx / 2) + (elemRect.height / 2)
                    top = (elemRect.top) + margin

                }
                tagline.style.setProperty("top", top + 'px', "important")
                tagline.style.display = 'flex'
                specsE.style.display = 'flex'
                setTimeout(function() {
                    tagline.style.WebkitAnimationName = "fadeOut"
                    tagline.style.animationName = "fadeOut"
                    setTimeout(function() {
                        tagline.style.display = "none"
                    }, 4100)
                }, 3000)
            })
        })
    }

    function setupZoho() {

        var form = document.getElementById("email-form")
        var url = "https://crm.zoho.com/crm/WebToLeadForm"
        form.setAttribute("action", "https://crm.zoho.com/crm/WebToLeadForm")
        form.setAttribute("name", "WebToLeads4073420000000551017")
        var hiddenIns = [{ "name": "xnQsjsdp", "value": "149494450f4c32240cd1c1f191b4fb6d817616f1acfaab890be8c2969b769b3c" }, { "name": "zc_gad", "value": "" }, { "name": "xmIwtLD", "value": "a4d52e14b1f0981a40731c01d7f7865fd19da0b82d700dce37c525a7a6e8962b" }, { "name": "actionType", "value": "TGVhZHM=" }, { "name": "returnURL", "value": window.location.href }, { "name": "Lead Source", "value": "https://drakomotors.com" }, { "name": "LEADCF2", "value": "Not Set" }]
        var fname = document.getElementById("Name")
        var lname = document.getElementById("Last-Name")
        var email = document.getElementById("email")
        var field = document.getElementById("field")
        var phone = document.getElementById("Phone")
        var zip = document.getElementById("zip")
        var country = document.getElementById("Country")

        country.setAttribute("name", "Country")
        zip.setAttribute("name", "Zip Code")
        phone.setAttribute("name", "Phone")
        fname.setAttribute("name", "First Name")
        lname.setAttribute("name", "Last Name")
        email.setAttribute("name", "Email")
        field.setAttribute("name", "Description")

        for (var i = 0; i < hiddenIns.length; i += 1) {
            var input = document.createElement("input")
            input.setAttribute("name", hiddenIns[i].name)
            input.setAttribute("value", hiddenIns[i].value)
            input.setAttribute("type", "hidden")
            form.appendChild(input)
        }
    }

    function attachAjax(form) {
        form.on("submit", function(e) {
            e.preventDefault()
            var container = form.parent();
            var doneBlock = $(".w-form-done", container);
            var failBlock = $(".w-form-fail", container);
            var action = form.attr("action");
            var method = form.attr("method");
            var data = form.serialize();
            $.ajax({
                type: method,
                url: action,
                data: data,
                success: function(resultData) {
                    form.hide();
                    doneBlock.show();
                    failBlock.hide();
                },

                error: function(e) {
                    form.show();
                    doneBlock.hide();
                    failBlock.show();
                }
            });
            return false;
        });
    }

    function setupWebForm() {
        var form = document.getElementById("email-form")
        if (!form) { return false }
        setupZoho()
        var formContainer = document.querySelector(".div-block-28")
        var closeBtn = document.createElement("div")
        var innerForm = document.querySelector(".div-block-27")
        var btns = document.querySelectorAll("div.custom-container.contact.selector h3")
        var links = document.querySelector(".div-block-31")
        closeBtn.classList.add("close-btn")
        formContainer.appendChild(closeBtn)
        innerForm.classList.add("hidden")
        formContainer.classList.add("hidden")
        formContainer.classList.add("animated")
        links.classList.add("animated")

        function showForm(e) {
            form.scrollTop = 0
            var type = e.target.getAttribute("data-type")
            if (type === "media") {
                form.querySelector("input[name=LEADCF2]").setAttribute("VALUE", "Stay Informed")
            } else {
                form.querySelector("input[name=LEADCF2]").setAttribute("VALUE", "Reservation Inquiry")

            }
            innerForm.classList.remove("hidden")

            if (formContainer.classList.contains("hidden")) {
                formContainer.classList.remove("hidden")
                formContainer.classList.remove("fadeOut")
                formContainer.classList.add("fadeInUp")
            }
            links.classList.add("hidden")
            links.classList.remove("fadeInUp")
        }

        function closeForm() {
            formContainer.classList.remove("fadeInUp")
            formContainer.classList.add("fadeOut")
            setTimeout(function() {
                formContainer.classList.add("hidden")
                links.classList.add("fadeInUp")
                links.classList.remove("hidden")

            }, 900)

        }

        attachAjax($(form))
        closeBtn.onclick = closeForm
        for (var i = 0, length1 = btns.length; i < length1; i += 1) {
            btns[i].onclick = showForm
        }

    }


    function setupFader() {
        var imgElms = document.querySelectorAll(".fader-image")
        var imgFadeDownElms = document.querySelectorAll(".fade-down")
        var im = null
        var el = null
        var h = null
        var maskCheck = null
        var maskElm = null

        function fadeElm(rect, elm) {

            if (rect && elm.querySelector(".mask")) {
                var opacity_val = Math.max(scaleBetween(window.innerHeight - rect.y, 100, 0, rect.height / 3, rect.height * 0.8) / 100, 0)
                elm.querySelector(".mask").style.opacity = opacity_val
            }
        }

        function attachFade(elm) {
            var rect = isInViewport(elm)
            fadeElm(rect, elm)

            function runOnScroll() {
                rect = isInViewport(elm)
                fadeElm(rect, elm)
            }
            window.addEventListener("scroll", runOnScroll);

        }
        for (var i = 0, length1 = imgElms.length; i < length1; i += 1) {
            maskCheck = imgElms[i].querySelector(".mask")
            if (!maskCheck) {
                maskElm = document.createElement("div")
                maskElm.classList.add("mask")
                imgElms[i].appendChild(maskElm)
            } else {
                maskElm = maskCheck
            }
            if (imgElms[i].querySelector("img")) {
                h = $(imgElms[i].querySelector("img")).innerHeight()
            } else {
                h = $(imgElms[i]).height()
            }
            maskElm.style.height = h + "px"
            attachFade(imgElms[i])
        }
    }

    function setupModal() {
        var mcont = document.createElement("div")
        mcont.classList.add("modal-container")
        var modal = document.createElement("div")
        modal.classList.add("custom-modal", "animated", "hidden")
        var h3 = document.createElement("h3")
        h3.innerHTML = "We respect your privacy and will only use your email to provide requested information."
        var p = document.createElement("p")
        p.innerHTML = "This website uses cookies. By continuing to use this website, you consent to the use of cookies."
        var btn = document.createElement("btn")
        btn.innerHTML = "Got it!"
        btn.classList.add("submit-button", "w-button", "close-modal")
        var cBtn = document.createElement("div")
        cBtn.classList.add("close-btn", "close-modal")
        modal.appendChild(cBtn)
        modal.appendChild(h3)
        modal.appendChild(p)
        mcont.appendChild(modal)
        document.body.appendChild(mcont)

        var openLink = document.querySelector(".privacy-link")
        var closeLinks = document.querySelectorAll(".close-modal")
        var cModal = document.querySelector(".custom-modal")

        function openModal(e) {
            e.preventDefault()
            cModal.classList.remove("hidden")
            cModal.classList.remove("fadeOut")
            cModal.classList.add("fadeInUp")
        }

        function closeModal() {
            cModal.classList.remove("fadeInUp")
            cModal.classList.add("fadeOut")
            cModal.classList.add("hidden")

        }
        openLink.onclick = openModal
        for (var i = 0, length1 = closeLinks.length; i < length1; i += 1) {
            closeLinks[i].onclick = closeModal
        }


    }

    function resizeImg(img, wrapper) {
        var imgSrc = img.src
        var newImg = new Image()
        newImg.onload = function() {
            var ratio = newImg.width / newImg.height;
            var nh = img.width / ratio
            wrapper.style.height = nh + "px"
        }
        newImg.src = imgSrc;
    }

    function setupDesignPage() {
        var rowElms = document.querySelectorAll(".row")
        var row = null
        var wrapper = null
        var img = null
        for (var i = 0, length1 = rowElms.length; i < length1; i += 1) {
            row = rowElms[i]
            wrapper = row.querySelector('.fader-image')
            img = row.querySelector("img")
            if ($(window).width() > 991) {
                resizeImg(img, row)
            } else {
                resizeImg(img, wrapper)
            }
        }
        var design1Elm = document.querySelector("#design")
        var style = design1Elm.currentStyle || window.getComputedStyle(design1Elm, false)
        var src = style.backgroundImage.slice(4, -1).replace(/"/g, "")

    }

    function setupSpecifications() {
        var gteLink = document.querySelector(".specs-link-gte")
        var trackLink = document.querySelector(".specs-link-track")
        var specs = document.querySelector("#specs")
        var specsText = specs.querySelector(".specstext")
        var leftText = specsText.querySelectorAll(".spectextblock")[0]
        var rightText = specsText.querySelectorAll(".spectextblock")[1]

        function loadText(key) {
            leftText.innerHTML = ""
            rightText.innerHTML = ""
            for (var i = 0, length1 = specs_data[key].left.length; i < length1; i += 1) {
                var div1 = document.createElement("div")
                div1.innerHTML = "<strong>" + specs_data[key].left[i].title + "</strong><br/>" + specs_data[key].left[i].text + "<br /><br />"
                leftText.appendChild(div1)
            }
            for (var ic = 0, length12 = specs_data[key].right.length; ic < length12; ic += 1) {
                var div2 = document.createElement("div")
                div2.innerHTML = "<strong>" + specs_data[key].right[ic].title + "</strong><br/>" + specs_data[key].right[ic].text + "<br /><br />"
                rightText.appendChild(div2)
            }
        }

        function handleClick(e) {
            e.preventDefault()
            var key = this.classList.contains("specs-link-gte") ? "gte" : "track"
            gteLink.classList.remove("active")
            trackLink.classList.remove("active")
            this.classList.add("active")
            loadText(key)
        }
        loadText("gte")
        gteLink.classList.add("active")
        gteLink.onclick = handleClick
        trackLink.onclick = handleClick

    }
    function updateTechSection(){
         var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
         var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
         if(w/h > 1.65 && h < 850 && w > 991 ){
            var secs = document.querySelectorAll('.technology_section')
            for(var i = 0, length1 = secs.length; i < length1; i++){
                secs[i].classList.add('wide_tech_section')
            }
         } 
    }


    function isStaging() {
        return window.location.hostname.indexOf('drako-new-staging.webflow.io') > -1 || window.location.hostname.indexOf('drako-staging-three.webflow.io') > -1 || window.location.hostname.indexOf('drako-live-production.webflow.io/') > -1
    }

    function afterRender() {
        setupWebForm()
        //setupNav()
        if (location.pathname === '/') {
            updateTechSection()
            addEventListener('resize', updateTechSection)
            setupSpecifications()
            setupModal()
            setupSplashPage()
            setupDesignPage()
            setupFader()
            AOS.init({
                easing: 'linear',
                offset: 0
            })
        }

    }

    function getFullPageVars() {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        var vars = {
            fixedElements: '.navbar, .footer',
            setAllowScrolling: true,
            autoScrolling: true,
            sectionSelector: ".page-snap",
            scrollBar: true,
            navigation: false,
            hybrid: true,
            fitToSection: false,
            slidesNavigation: false,
            controlArrows: true,
            lockAnchors: true,
            scrollOverflowReset: true,
            scrollingSpeed: 1000,
            showActiveTooltip: true,
                css3: true,
            bigSectionsDestination: "top",
            onSlideLeave: function(section, origin, destination, direction) {
                if (destination.index === 3) {
                    document.querySelector('.fp-next').classList.add('animated', 'fadeOut')
                } else {
                    document.querySelector('.fp-next').classList.remove('animated', 'fadeOut')

                }
                if (destination.index === 0) {
                    document.querySelector('.fp-prev').classList.add('animated', 'fadeOut')
                } else {
                    document.querySelector('.fp-prev').classList.remove('animated', 'fadeOut')

                }
            },
            licenseKey: "09AF1CAC-5DF84B75-9A1F7925-8B133F00"
        }
        vars.afterResize = function() {
            AOS.refresh()
            if (location.pathname === '/') {
                setupDesignPage()
                setupFader()
            }
        }
        vars.afterRender = afterRender
        vars.offsetSections = true
        vars.offsetSectionsKey = 'ZHJha29tb3RvcnMuY29tX2o5NGIyWm1jMlYwVTJWamRHbHZibk09S1dD'
        //COMPANY PAGE
        if (location.pathname === '/company') {
            document.querySelector('#letter').classList.add('fp-auto-height')
            document.querySelector('#leadership').classList.add('fp-auto-height')
            vars.normalScrollElements = "#leadership, #letter, #news, #contact, .footer, #email-form, .div-block-28"
        }
        //STAGING
        if (isStaging()) {
            vars.navigation = false
            vars.scrollHorizontally = false
            vars.controlArrows = false

        }
        //HOME DESKTOP
        if (w > 990 && !isStaging() && location.pathname === '/') {
            var rows = document.querySelectorAll('.row')
            var row = document.querySelector('.row')
            for (var i = rows.length - 1; i >= 0; i--) {
                var row = rows[i]
                row.classList.add('page-snap')
                row.setAttribute('data-percentage', 80)
            };
            $('.row').unwrap()


            vars.lazyLoading = true
            vars.controlArrows = true
            vars.loopHorizontal = false
            vars.scrollHorizontally = true
            vars.scrollHorizontallyKey = 'ZHJha29tb3RvcnMuY29tX0U1UWMyTnliMnhzU0c5eWFYcHZiblJoYkd4NXBiMQ=='
            document.querySelector('.w-slider-arrow-right').classList.add('hidden')
            document.querySelector('.w-slider-arrow-left').classList.add('hidden')
        }
        if (w > 990 && location.pathname !== '/company') {
            vars.normalScrollElements = "#contact, .footer"
        }
        //MOBILE
        if (w < 991 && location.pathname === '/') {
                document.querySelector('#design').setAttribute('data-percentage', 80)
            vars.scrollingSpeed = 400
            vars.normalScrollElements = ".design2, #specs, #technology, .footer, #email-form, .div-block-28"
            vars.lazyLoading = false
            vars.scrollHorizontally = false
            vars.controlArrows = false
        }
        //MOBILE2
        if(w < 600 && location.pathname === '/') {
        }
        return vars
    }

    function setupNav() {
        var btnOn = true
        var nav = document.querySelector('.nav-menu')
        var btn = document.querySelector('.menu-button')

        function hideBtn() {
            if (btnOn) {
                btn.style.opacity = 0
                btnOn = false
            }
        }

        function showBtn(e) {
            if (!btnOn && e.target !== btn && !e.target.classList.contains('image-24')) {
                btn.style.opacity = 1
                btnOn = true
            }
        }

        btn.addEventListener('click', hideBtn)
        document.addEventListener('click', showBtn)
    }

    function setupPageSnap() {
        $(".page-snap").wrapAll("<div id='wrapper' />")
        $("#wrapper").fullpage(getFullPageVars())
        $("video").each(function() {
            $(this).attr("data-keepplaying", true)
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        $(document).ready(setupPageSnap)

    });



})()