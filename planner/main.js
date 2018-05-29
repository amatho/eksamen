const form = document.getElementById("form");
const addButton = document.getElementById('add');
const shadow = document.getElementById('shadow');

const eventArray = [
  {
    title: "The Awesome Event",
    time: "09:30",
    image: "cheddar.jpg",
    description: "This event is simply awesome, nothing more to say."
  },
  {
    title: "Event Number Two",
    time: "12:15",
    image: "",
    description: "This event is simply another event, not to be confused with the first one."
  }
];

const compose = (a, b) => (...args) => a(b(...args));

const createEvent = ({
  title,
  time,
  image,
  description
} = {}) => `
<div class="event">
  <h1>${title}</h1>
  <div class="content">
    <p>${description}</p>
    <div class="image">
      <img src="assets/${image}">
    </div>
  </div>
  <p>The event takes place at <b>${time}</b>.</p>
</div>
`;

const displayHTML = html => {
  const parent = document.getElementById("events");
  parent.innerHTML += html;
};

const displayAndCreate = compose(displayHTML, createEvent);

const createAllEvents = () => {
  eventArray.forEach(event => displayAndCreate(event));
};

createAllEvents();

addButton.addEventListener("click", evt => {
  shadow.classList.add("active");
  form.classList.add("active");
});

form.addEventListener("submit", evt => {
  evt.preventDefault();
  const elements = evt.target.elements;
  const {title, time, image, description} = elements;
  displayAndCreate({
    title: title.value,
    time: time.value,
    image: image.value,
    description: description.value
  });
  shadow.classList.remove("active");
  form.classList.remove("active");
  form.reset();
});
