if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
      () => {
        console.info("DotNetFriday Service Worker Registered");
      },
      (err) =>
        console.error("DotNetFriday Service Worker registration failed: ", err)
    );
  
    navigator.serviceWorker.ready.then(() => {
      console.info("DotNetFriday Service Worker Ready");
    });
  }
  