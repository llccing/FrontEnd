import Error from './Error';
import Loading from './Loading';

const factory = (path, delay, timeout) => ({
  component: import(`@/${path}`),
  loading: Loading,
  error: Error,
  delay,
  timeout,
});


export default factory;