import manifest from "../packages/webawesome/dist/custom-elements.json";

export function getOptions(attributeName: any, componentManifest: any) {
  if (componentManifest && "attributes" in componentManifest) {
    const attribute = componentManifest.attributes.find(
      (a: any) => a.name === attributeName
    );
    if (attribute?.type?.text) {
      return attribute?.type?.text?.split("|").map((o: any) => o.split("'")[1]);
    }
  }
  return [];
}

export function getManifest(componentName: string) {
  return manifest.modules.find(
    (m) => m.path === `components/${componentName}/${componentName.toLowerCase()}.js`
  )?.declarations.find(
    (d) => d.name === `Wa${componentName}`
  );
}


