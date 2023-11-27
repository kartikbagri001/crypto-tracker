import '@/styles/globals.css'
import { Layout } from '@/src/components/'
import { store } from '@/src/redux/store'
import { Provider } from 'react-redux'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}

export default MyApp