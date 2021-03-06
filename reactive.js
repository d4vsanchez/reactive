function Reactive({ data, mounted } = {}) {
  const userData = data && Object.keys(data).length > 0 ? data : {};

  this.dynamicData = document.querySelectorAll("*[r-data]");
  this.dynamicModels = document.querySelectorAll("*[r-model]");
  this.dynamicAttrs = [...document.querySelectorAll("*")].filter((el) =>
    [...el.attributes].some((attr) => attr.nodeName.startsWith("r-bind"))
  );
  this.dynamicDisplay = document.querySelectorAll("*[r-if]");

  this.data = new Proxy(userData, {
    get: (target, attr) => {
      return attr in target ? target[attr] : "";
    },
    set: (target, attr, value) => {
      target[attr] = value;
      this._render();
    },
  });

  this.dynamicModels.forEach((input) => {
    input.addEventListener("input", () => {
      this.data[input.getAttribute("r-model")] = input.value;
    });

    input.addEventListener("change", () => {
      if (input.getAttribute("type") === "checkbox") {
        this.data[input.getAttribute("r-model")] = input.checked;
      }
    });
  });

  this._render();

  if (typeof mounted === "function") mounted.apply(this.data, []);
}

Reactive.prototype._render = function _render() {
  this.dynamicData.forEach((dataElement) => {
    const data = this.data[dataElement.getAttribute("r-data")];
    dataElement.innerText = data;
  });

  this.dynamicModels.forEach((modelElement) => {
    const data = this.data[modelElement.getAttribute("r-model")];
    modelElement.value = data;
  });

  this.dynamicDisplay.forEach((element) => {
    const shouldShow = !!this.data[element.getAttribute("r-if")];
    element.style.display = shouldShow ? "" : "none";
  });

  this.dynamicAttrs.forEach((element) => {
    const bindings = [...element.attributes].filter(
      (attr) =>
        attr.nodeName.startsWith("r-bind") && !attr.nodeName.endsWith("r-bind:")
    );

    bindings.forEach((binding) => {
      const bindingAttr = binding.name.split(":")[1];
      if (bindingAttr) {
        element.setAttribute(bindingAttr, this.data[binding.value]);
      }
    });
  });
};
