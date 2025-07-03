import manifest from "../dist-cdn/custom-elements.json";

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

export const buttonManifest = manifest.modules.find(
  (m) => m.path === "components/button/button.js"
)?.declarations.find(
  (d) => d.name === "WaButton"
);

export const badgeManifest = manifest.modules.find(
  (m) => m.path === "components/badge/badge.js"
)?.declarations.find(
  (d) => d.name === "WaBadge"
);