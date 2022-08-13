var app = {
    clickOnMenuBurger: function () {
        var menuBurger = document.querySelector('.view__header__menu');
        var fshfjk = document.querySelectorAll('.view__header__menu__burger');
        var menu = document.querySelector('.view__home__main__right--burger--is--open');
        menuBurger.addEventListener('click', function handleClick() {
            if (menu.style.transform === "translateX(0px)") {
                menu.style.transform = "translateX(300px)";
                menu.style.transition = "transform ease-in .5s";
                for (var i = 0; i < fshfjk.length; i++) {
                    fshfjk[1].style.width = '2em';
                    fshfjk[1].style.opacity = '1';
                    fshfjk[0].style.transform = 'rotate(0deg)';
                    fshfjk[0].style.transformOrigin = 'center';
                    fshfjk[2].style.transform = 'rotate(0deg)';
                    fshfjk[2].style.marginTop = '0px';
                    fshfjk[i].style.transition = "opacity ease-in .6s, width ease-in .5s, transform ease-in .5s, margin-top ease-in .5s";
                }
            }
            else {
                menu.style.transform = "translateX(0px)";
                menu.style.transition = "transform ease-in .5s";
                for (var i = 0; i < fshfjk.length; i++) {
                    fshfjk[1].style.width = '0%';
                    fshfjk[1].style.opacity = '0';
                    fshfjk[0].style.transform = 'rotate(-45deg)';
                    fshfjk[0].style.transformOrigin = 'center';
                    fshfjk[2].style.transform = 'rotate(45deg)';
                    fshfjk[2].style.marginTop = '-12px';
                    fshfjk[i].style.transition = "opacity ease-in .01s, width ease-in .2s, transform ease-in .5s";
                }
            }
            ;
        });
    },
    clickOnProject: function () {
        var articleDetail = document.querySelectorAll('.view__detail');
        var article1 = document.querySelectorAll('.view__time__side__item__1');
        var article2 = document.querySelectorAll('.view__time__side__item__2');
        var article3 = document.querySelectorAll('.view__time__side__item__3');
        var article4 = document.querySelectorAll('.view__time__side__item__4');
        var article5 = document.querySelectorAll('.view__time__side__item__5');
        // if (article1 != null && article2 != null && article3 != null && article4 != null && article5 != null){
        articleDetail === null || articleDetail === void 0 ? void 0 : articleDetail.forEach(function (article) {
            article.classList.forEach(function (number) {
                article1 === null || article1 === void 0 ? void 0 : article1.forEach(function (element) {
                    element.addEventListener('click', function handleClick() {
                        if (parseInt(number) === parseInt(element === null || element === void 0 ? void 0 : element.id) || parseInt(element === null || element === void 0 ? void 0 : element.id) === 6) {
                            app.openDetails("1");
                        }
                        ;
                    });
                });
                article2 === null || article2 === void 0 ? void 0 : article2.forEach(function (element) {
                    element.addEventListener('click', function handleClick() {
                        if (parseInt(number) === parseInt(element === null || element === void 0 ? void 0 : element.id) || parseInt(element === null || element === void 0 ? void 0 : element.id) === 7) {
                            app.openDetails("2");
                        }
                        ;
                    });
                });
                article3 === null || article3 === void 0 ? void 0 : article3.forEach(function (element) {
                    element.addEventListener('click', function handleClick() {
                        if (parseInt(number) === parseInt(element === null || element === void 0 ? void 0 : element.id) || parseInt(element === null || element === void 0 ? void 0 : element.id) === 8) {
                            app.openDetails("3");
                        }
                        ;
                    });
                });
                article4 === null || article4 === void 0 ? void 0 : article4.forEach(function (element) {
                    element.addEventListener('click', function handleClick() {
                        if (parseInt(number) === parseInt(element === null || element === void 0 ? void 0 : element.id) || parseInt(element === null || element === void 0 ? void 0 : element.id) === 9) {
                            app.openDetails("4");
                        }
                        ;
                    });
                });
                article5 === null || article5 === void 0 ? void 0 : article5.forEach(function (element) {
                    element.addEventListener('click', function handleClick() {
                        if (parseInt(number) === parseInt(element === null || element === void 0 ? void 0 : element.id) || parseInt(element === null || element === void 0 ? void 0 : element.id) === 10) {
                            app.openDetails("5");
                        }
                        ;
                    });
                });
            });
        });
        // };
    },
    openDetails: function (detailArticle) {
        var details = document.querySelector(".view__detail__".concat(detailArticle));
        var container = document.querySelector('.container');
        var btnClose = document.querySelectorAll('.close');
        if (details.style.display === 'block') {
            details.style.display = 'none';
            container.style.display = 'block';
        }
        else {
            details.style.display = 'block';
            container.style.display = 'none';
        }
        ;
        btnClose.forEach(function (btn) {
            btn.addEventListener('click', function handleClick() {
                if (details.style.display === 'block') {
                    details.style.display = 'none';
                    container.style.display = 'block';
                }
                ;
            });
        });
    },
    chooseLanguage: function () {
        var language = document.querySelector(".language");
        var container = document.querySelector('.container');
        var english = document.querySelector(".en");
        var french = document.querySelector(".fr");
        if (language != null && container != null && english != null && french != null) {
            english.addEventListener('click', function handleClick() {
                language.style.display = "none";
                app.englishLanguage();
                container.style.display = "block";
            });
            french.addEventListener('click', function handleClick() {
                language.style.display = "none";
                container.style.display = "block";
            });
        }
        ;
    },
    englishLanguage: function () {
        var menuWho = document.querySelector(".menu__burger__item--who");
        var menuWhat = document.querySelector(".menu__burger__item--what");
        var menuHow = document.querySelector(".menu__burger__item--how");
        var work = document.querySelector(".dev--web");
        var title = document.querySelector(".desc__english__title");
        var text = document.querySelector(".desc__english__text");
        var detailEnglish1 = document.querySelector(".detail__english__text_1");
        var detailEnglish2 = document.querySelector(".detail__english__text_2");
        var detailEnglish3 = document.querySelector(".detail__english__text_3");
        var detailEnglish4 = document.querySelector(".detail__english__text_4");
        var detailEnglish5 = document.querySelector(".detail__english__text_5");
        if (menuWho != null && menuWhat != null && menuHow != null && work != null && title != null && text != null && detailEnglish1 != null && detailEnglish2 != null && detailEnglish3 != null && detailEnglish4 != null && detailEnglish5 != null) {
            menuWho.innerText = "Who am I ?";
            menuWhat.innerText = "What I do ?";
            menuHow.innerText = "How to contact me ?";
            work.innerText = "Web developer";
            title.innerText = "Who am I ?";
            text.innerText = "My name is Benjamin. I'm 30 and I live in south of France. After a year of self-directed learning then O'clock's formation, finally I can say that I'm a junior web developer. When I was young I always had a passion for softwares and video games, it's with determination that I am coming on the job market. Joyful, I'm exciting of joining a new team.";
            detailEnglish1.innerText = "Jan Ken Pon is actually Rock Paper Scissors in Japanese that is the reference of <hunter X hunter> manga. It's my first project, there I put into practice my knowledge at this time about html, css and javascript.";
            detailEnglish2.innerText = "After my work on <Jan Ken Pon> I looked for a hardest project with algorithms. So I began to code this project without a lot of styles but more javascript.";
            detailEnglish3.innerText = "I was really proud when I made it because I worked on my all brand new knowledge. I began to learn back-end development, that is my first project with data base. I used postgres, node, express, ejs and bcrypt. Only admin can change data.";
            detailEnglish4.innerHTML = "My sport bag is the end of studying project with O'clock, four weeks to create web application. We worked on team of four people, two back-end/two front-end. I was front-end lead dev. My sport bag is community sport application, you can find on it a map to look for gym around of you and create account to speak with other people about training or nutrition.";
            detailEnglish5.innerHTML = "Actually I'm really proud of this one: On va où ? is web application, that idea come over us with my wife when we were looking for a place to go for the week-end. It's always difficult to find a good beautiful place. So I created On va où ? where you can find all beautifullest places in France. Right now only admin can add places but I'm working on the v2, user will be able to create profile, add places and have list of next place to go. I used bcrypt and jwt for user's security";
        }
        ;
    },
    init: function () {
        app.clickOnMenuBurger();
        app.clickOnProject();
        app.chooseLanguage();
    }
};
window.addEventListener("DOMContentLoaded", app.init);
