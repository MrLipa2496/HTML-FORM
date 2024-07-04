document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const form = e.target;
  const name = form["user-name"].value + " " + form["user-surname"].value;
  const email = form["user-email"].value;
  const phone =
    form["user-phone1"].value +
    form["user-phone2"].value +
    form["user-phone3"].value;

  const subject = form["products"].value;

  let message = form["message"].value;
  message = message.trim().replace(/\s+/g, " ");

  const formData = {
    name,
    email,
    phone,
    subject,
    message,
  };

  console.log(formData);
});
