const elForm = document.querySelector("form");
const elList = document.querySelector("ul");
const elInp = document.querySelector(".form-inp");
const elselectLanguage = document.querySelector(".selector");
const elselectsort = document.querySelector(".selector-sort");
const elBtnFind = document.querySelector(".add-wrapper");
rendom(books);

elBtnFind.addEventListener("click", (evt) => {
  if (evt.target.matches(".btn-find")) {
    let filterBooks = books.filter(
      (item) => item.language == elselectLanguage.value
    );
    rendom(filterBooks);
  }
  if (evt.target.matches(".btn-sort")) {
    if (elselectsort.value == "a-z") {
      let sortBooks = books.sort(
        (a, b) =>
          a.title.toLowerCase().charCodeAt() -
          b.title.toLowerCase().charCodeAt()
      );

      rendom(sortBooks);
    } else {
      if (elselectsort.value == "z-a") {
        console.log(elselectsort.value, "fff");
        let sortBookss = books.sort(
          (a, b) =>
            b.title.toLowerCase().charCodeAt() -
            a.title.toLowerCase().charCodeAt()
        );

        rendom(sortBookss);
      }
    }
  }
});

function rendom(array, sorchinp) {
  elList.innerHTML = "";
  console.log(sorchinp);
  array.forEach((item) => {
    let li = document.createElement("li");
    let wrapper = document.createElement("div");
    let topWrapper = document.createElement("div");
    let centerWrapper = document.createElement("div");
    let bottomWrapper = document.createElement("div");

    let strongYear = document.createElement("strong");
    let strongPages = document.createElement("strong");
    let strongOuthor = document.createElement("strong");
    let strongCountry = document.createElement("strong");
    let strongLanguage = document.createElement("strong");

    let spanLanguage = document.createElement("span");
    let spanYear = document.createElement("span");
    let spanCountry = document.createElement("span");
    let spanPages = document.createElement("span");
    let spanOuthor = document.createElement("span");

    let strongText = document.createElement("p");
    let link = document.createElement("a");
    let img = document.createElement("img");
    let title = document.createElement("h3");

    li.setAttribute("class", "list-item  border rounded-2 list-group-item");
    wrapper.setAttribute("class", "wrapper p-3 d-flex flex-column gap-3");
    topWrapper.setAttribute(
      "class",
      "top-min-wrapper d-flex justify-content-between"
    );
    centerWrapper.setAttribute(
      "class",
      "center-min-wrapper d-flex justify-content-between"
    );
    bottomWrapper.setAttribute(
      "class",
      "bottom-min-wrapper d-flex justify-content-between"
    );

    spanOuthor.setAttribute("class", " fw-normal fs-6");
    spanYear.setAttribute("class", " fw-normal fs-6");
    spanPages.setAttribute("class", "fw-normal fs-6");
    spanCountry.setAttribute("class", "fw-normal fs-6 ");
    spanLanguage.setAttribute("class", "fw-normal fs-6");

    strongOuthor.setAttribute("class", "strong-outhor fs-6 ");
    strongYear.setAttribute("class", "strong-year  fs-6");
    strongPages.setAttribute("class", "strong-pages fs-6 ");
    strongCountry.setAttribute("class", "strong-country fs-6 ");
    strongLanguage.setAttribute("class", "strong-language  fs-6");
    strongText.setAttribute("class", "text");
    link.setAttribute("href", item.link);
    img.setAttribute("class", "img w-100");
    title.setAttribute("class", "title mt-3 ps-3");
    img.src = item.imageLink;

    strongOuthor.textContent = "Author: ";
    strongLanguage.textContent = "Language: ";
    strongCountry.textContent = "Country: ";
    strongPages.textContent = "Pages: ";
    strongYear.textContent = "Year: ";

    spanOuthor.textContent = item.author;
    spanCountry.textContent = item.country;
    spanPages.textContent = item.pages;
    spanLanguage.textContent = item.language;
    spanYear.textContent = item.year;
    strongText.textContent = "Read latter";
    link.textContent = "Wikipedia";
    if (sorchinp) {
      let regex = new RegExp(sorchinp, "gi");
      const mark = item.title.replace(regex, `<mark>$&</mark>`);

      title.innerHTML = mark;
      console.log(mark);
    } else {
      title.innerHTML = `${item.title}`;
    }

    strongYear.appendChild(spanYear);
    strongCountry.appendChild(spanCountry);
    strongLanguage.appendChild(spanLanguage);
    strongPages.appendChild(spanPages);
    strongOuthor.appendChild(spanOuthor);

    topWrapper.append(strongYear, strongPages);
    centerWrapper.append(strongCountry, strongLanguage);
    bottomWrapper.append(link, strongText);

    wrapper.append(topWrapper, strongOuthor, centerWrapper, bottomWrapper);
    li.append(img, title, wrapper);
    elList.appendChild(li);
  });
}
elInp.addEventListener("keyup", () => {
  let inpValue = elInp.value.trim().toLowerCase();
  let rezalt = books.filter((item) => {
    let booksTitle = item.title.toLowerCase();
    console.log(booksTitle);

    return booksTitle.includes(inpValue);
  });
  console.log(rezalt);
  rendom(rezalt, inpValue);
});
