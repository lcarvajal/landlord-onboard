import { loadEnvConfig } from '@next/env'

export default async () => {
  const testEmail = process.env.TEST_EMAIL
  testEmail && loadEnvConfig(testEmail)

  const testPassword = process.env.TEST_PASSWORD
  testPassword && loadEnvConfig(testPassword)
}
