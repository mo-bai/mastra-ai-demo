import { Mastra } from '@mastra/core/mastra'
import { createLogger } from '@mastra/core/logger'
import { CloudflareDeployer } from '@mastra/deployer-cloudflare'

import { codeReviewAgent } from './agents'

export const mastra = new Mastra({
  agents: { codeReviewAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info'
  }),
  deployer: new CloudflareDeployer({
    scope: process.env.CLOUDFLARE_ACCOUNT_ID || '',
    projectName: 'mastra-ai-demo',
    auth: {
      apiToken: process.env.CLOUDFLARE_API_TOKEN || ''
    }
  })
})
