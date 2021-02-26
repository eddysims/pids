const packages = getPackages();

export default {
  title: "Pids Design System",
  description: "A dope design system",
  menu: ["Introduction", "Components", "Styles"],
  typescript: true,
  host: "0.0.0.0",
  port: 8080,
  files: [
    "./docs/README.md",
    ...packages.map((pack) => `./packages/${pack}/src/**/*.{md,mdx}`),
    ...packages.map((pack) => `./packages/${pack}/CHANGELOG.md`),
  ],
  docgenConfig: {
    searchPatterns: ["./packages/components/**/*.{ts,tsx}"],
  },
};

function getPackages() {
  return ["components", "styles"];
}
