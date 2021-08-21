if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js")
        .then((reg) => console.log("Registered! ", reg))
        .catch((err) => console.log("Registeration Failed", err));
    });
  }
  
  let deferredPrompt;
  // window.addEventListener("beforeinstallprompt", (e) => {
  //   // Prevent old bowsers to trigger prompt before waiting for this event
  //   // here we are triggering installing prompt using button and preventing it from opening itself on some browsers
  //   // checkout here  - https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent
  //   e.preventDefault();
  //   deferredPrompt = e;
  //   // make the UI changes here --->
  //   const popup = document.getElementById("install-popup");
  //   // popup.style.display = "block";
  //   popup.open = true
  //   const cancelButton = document.querySelector(".cancel-button");
  //   cancelButton.addEventListener("click", () => {
  //     popup.removeAttribute("open");
  //   })
  //   const installButton = document.querySelector(".proceed-button")
  //   // Add event listener on UI element
  //   installButton.addEventListener("click", (e) => {
  //     // prompt the user with install prompt
  //     popup.removeAttribute("open");
  //     deferredPrompt.prompt();
  //     // wait for user choice
  //     deferredPrompt.userChoice.then((choiceResult) => {
  //       if (choiceResult.outcome === "accepted") {
  //         console.log("User Accepted the A2HS prompt");
  //       }
  //       // here set custom prompt to null as it is not accepted and this before install prompt will trigger next time page is reloaded
  //       deferredPrompt = null;
  //     });
  //   });
  // });
  
  // Analytics
  window.addEventListener("appinstalled", (e) =>
    app.logEvent("a2hs", "installed")
  );
