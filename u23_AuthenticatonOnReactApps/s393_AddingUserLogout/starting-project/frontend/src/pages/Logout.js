import { redirect } from "react-router-dom";

export function action() {
  console.log("Action");
  localStorage.removeItem("token");
  return redirect("/");
}
