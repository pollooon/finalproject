const timelineData = [

    {
        date: "2012",
        title: "Discovering Motorsport",
        image: "images/childhood.jpg",
        text: "I started watching Formula 1 with my family and became fascinated by racing."
    },

    {
        date: "2018",
        title: "Becoming a Formula 1 Fan",
        image: "images/first-f1.jpg",
        text: "I began following Formula 1 more seriously and learning about teams and drivers."
    },

    {
        date: "2025",
        title: "Austria and Motorsport Culture",
        image: "images/austria.jpg",
        text: "Living in Austria inspired me to become even closer to motorsport culture."
    },

    {
        date: "Future",
        title: "Ferrari Dream",
        image: "images/ferrari-goal.jpg",
        text: "My dream is to work in motorsport marketing for Ferrari Formula 1."
    }

];

const slider = document.getElementById("slider");

const date = document.getElementById("date");
const title = document.getElementById("title");
const image = document.getElementById("image");
const text = document.getElementById("text");

function updateScene(index) {

    date.textContent = timelineData[index].date;
    title.textContent = timelineData[index].title;
    image.src = timelineData[index].image;
    text.textContent = timelineData[index].text;

}

updateScene(0);

slider.addEventListener("input", function () {

    updateScene(slider.value);

});