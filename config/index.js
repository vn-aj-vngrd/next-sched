const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://next-sched-n647gj3d2-vn-aj-vngrd.vercel.app/";
