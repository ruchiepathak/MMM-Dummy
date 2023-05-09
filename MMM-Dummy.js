Module.register("MMM-Dummy", {
  // Default module config.
  defaults: {
    text: "Hello World!"
  },

  // Override dom generator.
  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.className = "dummydiv";
    wrapper.innerHTML = this.config.text;
    return wrapper;
  },

  getStyles: function() {
    return ["MMM-Dummy.css"];
  },

  // Override notification handler.
  notificationReceived: function(notification, payload, sender) {
    if (notification === "MY_NOTIFICATION") {
      // Do something when notification is received.
    }
  },

  // Override socket notification handler.
  socketNotificationReceived: function(notification, payload) {
    if (notification === "MY_SOCKET_NOTIFICATION") {
      // Do something when socket notification is received.
    }
  }
});

