const packages = getPackages();

export default {
  title: "Pids Design System",
  description: "A dope design system",
  typescript: true,
  host: "0.0.0.0",
  port: 8888,
  files: [
    "./docs/README.md",
    ...packages.map((pack) => `./packages/${pack}/src/**/*.{md,mdx}`),
    ...packages.map((pack) => `./packages/${pack}/CHANGELOG.md`),
  ],
};

function getPackages() {
  return ["components", "design"];
}
