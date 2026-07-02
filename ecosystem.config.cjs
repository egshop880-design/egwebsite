module.exports = {
  apps: [
    {
      name: "egshopaz",
      script: ".output/server/index.mjs",
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOST: "0.0.0.0",
      },
      max_memory_restart: "512M",
      time: true,
    },
  ],
};