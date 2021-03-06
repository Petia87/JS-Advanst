async function solution() {
 
    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
 
    manageData(data);
}
 
solution();
 
async function manageData(data) {
 
    const mainElement = document.getElementById('main');
 
    for (const element in data) {
 
        // console.log(element);
        let el = data[element];
        let elementId = el._id;
        let elementTitle = el.title;
        let contentUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${elementId}`;
 
        let elementResponse = await fetch(contentUrl);
        let elementData = await elementResponse.json();
        // console.log(elementData);
        let content = elementData.content;
 
        let mainDiv = e('div', '', 'accordion');
        let headDiv = e('div', '', 'head');
        let titleSpan = e('span', elementTitle);
        let button = e('button', 'More', 'button', elementId);
        let extraTextDiv = e('div', '', 'extra');
 
        extraTextDiv.style.display = 'none'
 
        let textParagraph = e('p', content);
 
        headDiv.appendChild(titleSpan);
        headDiv.appendChild(button);
        extraTextDiv.appendChild(textParagraph);
        mainDiv.appendChild(headDiv);
        mainDiv.appendChild(extraTextDiv);
 
        mainElement.appendChild(mainDiv);
    };
 
    let buttons = document.querySelectorAll('button');
    // console.log(buttons);
 
    buttons.forEach(buton => {
 
        buton.addEventListener('click', showExtra);
 
        function showExtra(event) {
 
            // let extraSection = event.currentTarget.parentElement.parentElement[1];
            let extraSection = event.currentTarget.parentElement.parentElement.children[1];
 
            if (extraSection.style.display == 'none') {
 
                extraSection.style.display = 'block';
                buton.textContent = 'Less';
 
            }else if (extraSection.style.display == 'block') {
 
                extraSection.style.display = 'none';
                buton.textContent = 'More';
            }
        }
    });
}
 
//     <!-- <div class="accordion">
//     <div class="head">
//         <span>Scalable Vector Graphics</span>
//         <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
//     </div>
//     <div class="extra">
//         <p>Scalable Vector Graphics .....</p>
//     </div>
// </div> -->
 
function e(type, text, style, id) {
 
    let element = document.createElement(type);
 
    if (text) {
        element.textContent = text;
    }
    if (style) {
        element.classList.add(style);
    }
    if (id) {
        element.id = id;
    }
 
    return element;
}
 
 
 
// ???????????? ???????????? ?????? ?????????????? ???? ???? ???? ???????????????? ???????????? ???? "title"
// ???? ???????????????? ?????????????? ?????????? ???? ?????????????????? ?????????????? ???? ?????????? ???????????????? ?? data - ????, ???? ?????????? ?????????????????????? DOM ???????????????? 
// ???? ?????????? ???????????????? ?????????????? ???????????????? id ?? title 
// ???????????? ???????????? ?????? ?????????????? ???? ???? ???? ???????????? ???????????? ???? ?????????????????????? id 
// ?????????????????? ???????????????????? ???? DOM - ?? , ?? ???????????? ???? ?????????????????????? ??????????????
// ???????????? ?????? ??????????????(????????????????) ???????? ?????????????????? ???? ?????????????????? ???? ???????????????? ?? ???????????????? ???????????????????????? ???????? ??????????
// ?????????????????? ?????????? ?????????????? ?????? ?????????????????????? parent ???? ?????????????? ???????????? ???? ?????????????? ???????????? ???? main ????????????????
 
// ???????????????? eventListener ???? ???????????????? ???? ?????????? ?????????????? 
// ?????? ???????? ???? ?????????? ???????????? ?????????????????? ?????? ???????????????? info - ???? (togle button logic) ?? ?????????????? ???????????? ???? ????????????

/*
function attachEvents() {
  document.querySelector("#btnLoadPosts").addEventListener("click", () => {
    fetch("http://localhost:3030/jsonstore/blog/posts")
      .then((r) => r.json())
      .then((infoObj) => {
        Object.keys(infoObj).forEach((key) => {
          document
            .querySelector("select#posts")
            .appendChild(
              e("option", { attributes: { value: infoObj[key].id } }, infoObj[key].title)
            );
        });
      });
  });
 
  document.querySelector("#btnViewPost").addEventListener("click", () => {
    let postIdNeeded = document.querySelector("select#posts").value;
    if (postIdNeeded === "") {
      return;
    }
    Promise.all([
      fetch("http://localhost:3030/jsonstore/blog/comments").then((r) => r.json()),
      fetch(`http://localhost:3030/jsonstore/blog/posts/${postIdNeeded}`).then((r) => r.json()),
    ])
      .then(([comments, postInfo]) => {
        let relevant = Object.values(comments).filter((x) => x.postId === postIdNeeded);
        document.querySelector("#post-comments").innerHTML = "";
        relevant.forEach((com) => {
          document
            .querySelector("#post-comments")
            .appendChild(e("li", { attributes: { id: com.id } }, com.text));
        });
        document.querySelector("#post-body").innerText = postInfo.body;
        document.querySelector("#post-title").innerText = postInfo.title;
      })
      .catch((err) => {
        document.querySelector("#post-comments").innerText = "Error";
      });
  });
 
  function e(tag, obj, ...content) {
    let result = document.createElement(tag);
 
    if (obj.hasOwnProperty("listener")) {
      Object.entries(obj.listener).forEach(([ev, han]) => {
        result.addEventListener(ev, han);
      });
    }
 
    if (obj.hasOwnProperty("attributes")) {
      Object.entries(obj.attributes).forEach(([attr, val]) => {
        result[attr] = val;
      });
    }
 
    if (obj.hasOwnProperty("classes")) {
      obj.classes.forEach((c) => {
        result.classList.add(c);
      });
    }
 
    content.forEach((c) => {
      if (typeof c === "number" || typeof c === "string") {
        result.innerText = c;
      } else {
        result.appendChild(c);
      }
    });
 
    return result;
  }
}
 
attachEvents();
 */