import type { AppProps } from 'next/app'

import { test, anotherOne } from '@example/utils'
import oneMore from '@example/utils/anotherUtil'
import logger from '@example/logger'

test('front-end')
anotherOne()
oneMore()

logger.info('Hello from the front-end!')

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
