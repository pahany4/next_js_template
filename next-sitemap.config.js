let policy = {
  userAgent: "*",
};

if (process.env.NEXT_PUBLIC_STAGE_DEPlOY !== "production") {
  policy.disallow = "/";
}

if (process.env.NEXT_PUBLIC_STAGE_DEPlOY === "production") {
  policy.disallow = "/gthyjukik";
}

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_HOST_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      policy
    ],
  },
  outDir: "./out",
};
