import { Buffer } from "buffer"
export const environment = {
  production: true,
  token: Buffer.from("dG9rZW4gZ2hwX3RocTNxeWc1Rzh2aXhRelZkejU5R3BIY1NvNURoMTBvWmZNRA==", 'base64').toString(),
};
