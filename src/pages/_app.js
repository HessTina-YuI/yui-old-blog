import { Provider } from 'react-redux';
import store from '../redux/store';
import packageJson from '../../package.json';

console.info(`%cYuI HessTina v${packageJson.version}%c https://yui-blog.vercel.app/ `,
    'background: #40a9ff; color: #fff; padding: 5px; margin: 10px 0;',
    'color: #40a9ff; padding: 4px; border: 1px solid #40a9ff; margin: 10px 0;');

const YuIApp = ({Component, pageProps}) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default YuIApp;