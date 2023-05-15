export default function registerGlobalComponents(app) {
  // @ts-ignore
  const requireComponent = import.meta.globEager("./*.vue");

  Object.keys(requireComponent).forEach((fileName) => {
    const componentConfig = requireComponent[fileName];

    // @ts-ignore
    const componentName = fileName
      .split("/")
      .pop()
      .replace(/\.\w+$/, "");

    app.component(componentName, componentConfig.default || componentConfig);
  });
}
