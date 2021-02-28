export function formatDate(dateString, type = "short") {
  const date = new Date(dateString);

  let res = "";
  if (type === "short") {
    res += date.toLocaleString("default", { weekday: "short" });
    res += " " + date.toLocaleString("default", { day: "numeric" });
    res += " " + date.toLocaleString("default", { month: "long" }).slice(0, 3);
    res = res.charAt(0).toUpperCase() + res.slice(1);
  }

  return res;
}
