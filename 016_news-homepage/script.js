const wrapper = document.querySelector(".mobile-menu-wrapper");
const mobileMenu = document.querySelector(".mobile-menu");
const button = document.querySelector(".menu-button");
const buttonImage = document.querySelector(".menu-button img");

button.addEventListener("click", () => {
  if (mobileMenu.classList.contains("menu-open")) {
    mobileMenu.classList.remove("menu-open");
    mobileMenu.classList.add("menu-closed");
    wrapper.classList.remove("wrapper-menu-open");
    wrapper.classList.add("wrapper-menu-closed");
    button.innerHTML =
      '<svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>';
  } else {
    mobileMenu.classList.add("menu-open");
    mobileMenu.classList.remove("menu-closed");
    wrapper.classList.add("wrapper-menu-open");
    wrapper.classList.remove("wrapper-menu-closed");
    button.innerHTML =
      '<svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>';
  }
});
