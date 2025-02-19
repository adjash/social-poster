export default function registrationHandler(formData: FormData) {
  // console.log(formData.get("email"));
  return fetch(
    `api/register?email=${formData.get("email")}&password=${formData.get(
      "password"
    )}&username=${formData.get("username")}`,
    {
      method: "POST",
      redirect: "follow",
    }
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
