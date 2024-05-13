const app: {
  init: any;
  clickOnProject: any;
  clickOnMenuBurger: any;
  openDetails: any;
  chooseLanguage: any;
  englishLanguage: any;
} = {
  clickOnMenuBurger: function () {
    const menuBurger = document.querySelector<HTMLInputElement>(
      ".view__header__menu"
    )!;
    const burger = document.querySelectorAll(
      ".view__header__menu__burger"
    ) as NodeListOf<HTMLInputElement>;
    const menu = document.querySelector<HTMLInputElement>(
      ".view__home__main__right--burger--is--open"
    )!;
    menuBurger.addEventListener("click", function handleClick() {
      if (menu.style.transform === "translateX(0px)") {
        menu.style.transform = "translateX(300px)";
        menu.style.transition = "transform ease-in .5s";
        for (let i = 0; i < burger.length; i++) {
          burger[1].style.width = "2em";
          burger[1].style.opacity = "1";
          burger[0].style.transform = "rotate(0deg)";
          burger[0].style.transformOrigin = "center";
          burger[2].style.transform = "rotate(0deg)";
          burger[2].style.marginTop = "0px";
          burger[i].style.transition =
            "opacity ease-in .6s, width ease-in .5s, transform ease-in .5s, margin-top ease-in .5s";
        }
      } else {
        menu.style.transform = "translateX(0px)";
        menu.style.transition = "transform ease-in .5s";
        for (let i = 0; i < burger.length; i++) {
          burger[1].style.width = "0%";
          burger[1].style.opacity = "0";
          burger[0].style.transform = "rotate(-45deg)";
          burger[0].style.transformOrigin = "center";
          burger[2].style.transform = "rotate(45deg)";
          burger[2].style.marginTop = "-12px";
          burger[i].style.transition =
            "opacity ease-in .01s, width ease-in .2s, transform ease-in .5s";
        }
      }
    });
  },
  clickOnProject: function () {
    const articleDetail =
      document.querySelectorAll<HTMLInputElement>(".view__detail");
    const article1 = document.querySelectorAll<HTMLInputElement>(
      ".view__time__side__item__1"
    )!;
    const article2 = document.querySelectorAll<HTMLInputElement>(
      ".view__time__side__item__2"
    )!;
    const article3 = document.querySelectorAll<HTMLInputElement>(
      ".view__time__side__item__3"
    )!;
    const article4 = document.querySelectorAll<HTMLInputElement>(
      ".view__time__side__item__4"
    )!;
    const article5 = document.querySelectorAll<HTMLInputElement>(
      ".view__time__side__item__5"
    )!;
    articleDetail?.forEach((article) => {
      article.classList.forEach((number) => {
        article1?.forEach((element) => {
          element.addEventListener("click", function handleClick() {
            if (
              parseInt(number) === parseInt(element?.id) ||
              parseInt(element?.id) === 6
            ) {
              app.openDetails("1");
            }
          });
        });
        article2?.forEach((element) => {
          element.addEventListener("click", function handleClick() {
            if (
              parseInt(number) === parseInt(element?.id) ||
              parseInt(element?.id) === 7
            ) {
              app.openDetails("2");
            }
          });
        });
        article3?.forEach((element) => {
          element.addEventListener("click", function handleClick() {
            if (
              parseInt(number) === parseInt(element?.id) ||
              parseInt(element?.id) === 8
            ) {
              app.openDetails("3");
            }
          });
        });
        article4?.forEach((element) => {
          element.addEventListener("click", function handleClick() {
            if (
              parseInt(number) === parseInt(element?.id) ||
              parseInt(element?.id) === 9
            ) {
              app.openDetails("4");
            }
          });
        });
        article5?.forEach((element) => {
          element.addEventListener("click", function handleClick() {
            if (
              parseInt(number) === parseInt(element?.id) ||
              parseInt(element?.id) === 10
            ) {
              app.openDetails("5");
            }
          });
        });
      });
    });
  },
  openDetails: function (detailArticle: String) {
    const details = document.querySelector<HTMLInputElement>(
      `.view__detail__${detailArticle}`
    )!;
    const container = document.querySelector<HTMLInputElement>(".container")!;
    const btnClose = document.querySelectorAll<HTMLInputElement>(".close")!;
    if (details.style.display === "block") {
      details.style.display = "none";
      container.style.display = "block";
    } else {
      details.style.display = "block";
      container.style.display = "none";
    }
    btnClose.forEach((btn) => {
      btn.addEventListener("click", function handleClick() {
        if (details.style.display === "block") {
          details.style.display = "none";
          container.style.display = "block";
        }
      });
    });
  },
  chooseLanguage: function () {
    const language = document.querySelector<HTMLInputElement>(".language");
    const container = document.querySelector<HTMLInputElement>(".container");
    const english = document.querySelector<HTMLInputElement>(".en");
    const french = document.querySelector<HTMLInputElement>(".fr");
    if (
      language != null &&
      container != null &&
      english != null &&
      french != null
    ) {
      english.addEventListener("click", function handleClick() {
        language.style.display = "none";
        app.englishLanguage();
        container.style.display = "block";
      });
      french.addEventListener("click", function handleClick() {
        language.style.display = "none";
        container.style.display = "block";
      });
    }
  },
  englishLanguage: function () {
    const menuWho = document.querySelector<HTMLInputElement>(
      ".menu__burger__item--who"
    );
    const menuWhat = document.querySelector<HTMLInputElement>(
      ".menu__burger__item--what"
    );
    const menuHow = document.querySelector<HTMLInputElement>(
      ".menu__burger__item--how"
    );
    const work = document.querySelector<HTMLInputElement>(".dev--web");
    const title = document.querySelector<HTMLInputElement>(
      ".desc__english__title"
    );
    const text = document.querySelector<HTMLInputElement>(
      ".desc__english__text"
    );
    const detailEnglish1 = document.querySelector<HTMLInputElement>(
      ".detail__english__text_1"
    );
    const detailEnglish2 = document.querySelector<HTMLInputElement>(
      ".detail__english__text_2"
    );
    const detailEnglish3 = document.querySelector<HTMLInputElement>(
      ".detail__english__text_3"
    );
    const detailEnglish4 = document.querySelector<HTMLInputElement>(
      ".detail__english__text_4"
    );
    const detailEnglish5 = document.querySelector<HTMLInputElement>(
      ".detail__english__text_5"
    );
    if (
      menuWho != null &&
      menuWhat != null &&
      menuHow != null &&
      work != null &&
      title != null &&
      text != null &&
      detailEnglish1 != null &&
      detailEnglish2 != null &&
      detailEnglish3 != null &&
      detailEnglish4 != null &&
      detailEnglish5 != null
    ) {
      menuWho.innerText = "Who am I ?";
      menuWhat.innerText = "What I do ?";
      menuHow.innerText = "How to contact me ?";
      work.innerText = "Web developer";
      title.innerText = "Who am I ?";
      text.innerText =
        "My name is Benjamin. I'm 30 and I live in south of France. After a year of self-directed learning then O'clock's formation, finally I can say that I'm a junior web developer. When I was young I always had a passion for softwares and video games, it's with determination that I am coming on the job market. Joyful, I'm exciting of joining a new team.";
      detailEnglish1.innerText =
        "Jan Ken Pon is actually Rock Paper Scissors in Japanese that is the reference of <hunter X hunter> manga. It's my first project, there I put into practice my knowledge at this time about html, css and javascript.";
      detailEnglish2.innerText =
        "After my work on <Jan Ken Pon> I looked for a hardest project with algorithms. So I began to code this project without a lot of styles but more javascript.";
      detailEnglish3.innerText =
        "I was really proud when I made it because I worked on my all brand new knowledge. I began to learn back-end development, that is my first project with data base. I used postgres, node, express, ejs and bcrypt. Only admin can change data.";
      detailEnglish4.innerHTML =
        "My sport bag is the end of studying project with O'clock, four weeks to create web application. We worked on team of four people, two back-end/two front-end. I was front-end lead dev. My sport bag is community sport application, you can find on it a map to look for gym around of you and create account to speak with other people about training or nutrition.";
      detailEnglish5.innerHTML =
        "Actually I'm really proud of this one: On va où ? is web application, that idea come over us with my wife when we were looking for a place to go for the week-end. It's always difficult to find a good beautiful place. So I created On va où ? where you can find all beautifullest places in France. Right now only admin can add places but I'm working on the v2, user will be able to create profile, add places and have list of next place to go. I used bcrypt and jwt for user's security";
    }
  },
  init: function () {
    app.clickOnMenuBurger();
    app.clickOnProject();
    app.chooseLanguage();
  },
};
window.addEventListener("DOMContentLoaded", app.init);
