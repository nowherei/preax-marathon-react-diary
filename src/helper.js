export const moods = ["😌", "😊", "😄", "🤣", "😰", "🥰", "🙃", "😔", "😇", "🤔", "😩", "😭", "😤", "😵", "🤒", "🤤"];


export const posts = [
  {
    title: "Мое первое событие",
    description: "Вот решил потестить мое веб-приложение",
    date: new Date("2021.02.15"), /* Объект Date */
    mood: "😊",
    img: {
      "id": 2014422,
      "width": 3024,
      "height": 3024,
      "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
      "photographer": "Joey Farina",
      "photographer_url": "https://www.pexels.com/@joey",
      "photographer_id": 680589,
      "avg_color": "#978E82",
      "src": {
        "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
        "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
      }
    }
  },
  {
    title: "Мое первое событие",
    description: "Вот решил потестить мое веб-приложение",
    date: new Date("2021.02.15"), /* Объект Date */
    mood: "😊",
    img: {
      "id": 2014422,
      "width": 3024,
      "height": 3024,
      "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
      "photographer": "Joey Farina",
      "photographer_url": "https://www.pexels.com/@joey",
      "photographer_id": 680589,
      "avg_color": "#978E82",
      "src": {
        "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
        "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
      }
    }
  },
  {
    title: "Мое первое событие",
    description: "Вот решил потестить мое веб-приложение",
    date: new Date("2021.02.15"), /* Объект Date */
    mood: "😊",
    img: {
      "id": 2014422,
      "width": 3024,
      "height": 3024,
      "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
      "photographer": "Joey Farina",
      "photographer_url": "https://www.pexels.com/@joey",
      "photographer_id": 680589,
      "avg_color": "#978E82",
      "src": {
        "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
        "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
      }
    }
  },
];


export function formatDate(date, type = "short") {

  let res = "";
  if (type === "short") {
    res += date.toLocaleString("default", { weekday: "short" });
    res += " " + date.toLocaleString("default", { day: "numeric" });
    res += " " + date.toLocaleString("default", { month: "long" }).slice(0, 3);
    res = res.charAt(0).toUpperCase() + res.slice(1);
  }

  return res;
}