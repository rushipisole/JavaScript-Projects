function createCard(title, cName, views, monthsOld, duration, thumbnil) {

    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K"
    }

    let html = `<div class="card">
    <div class="image">
        <img src=${thumbnil}
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1> ${title} </h1>
        <p> ${cName} . ${viewStr} views . ${monthsOld} days ago</p>
    </div>
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Hello Rushi Here | I am a learner", "codeWithRushi", 400000, 7, "22.67", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Hello Rushi Here | I am a learner", "codeWithRushi", 40000000, 7, "22.67", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Hello Rushi Here | I am a learner", "codeWithRushi", 50700000, 7, "22.67", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")