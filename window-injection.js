window.Microsoft || (window.Microsoft = {});

function injectParams(params) {
  console.log("Injected params:", params);
  window.Microsoft.appParams = params;
  console.log("Window event dispatched: appParamsInjected")
  const appParamsInjectedEvent = new Event("appParamsInjected");
  window.dispatchEvent(appParamsInjectedEvent);
}

window.injectParams = injectParams;
