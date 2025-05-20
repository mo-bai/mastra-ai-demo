## 遇到的问题

1. cloudflare 打包是， api token 错误（更新也不行，貌似是一个bug）
   解决：使用 wrangler cli 进行打包部署

2. 使用 wrangler cli 进行打包部署，由于 tree shaking，忽略了动态引用的 tools.mjs 文件，只上传了 index.mjs 和 mastra.mjs 文件，导致worker 执行时报错
   暂时解决：打包完成后，硬编码到 index.mjs 中
