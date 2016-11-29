/**
 *  Entrance of features
 *
 *  @author  llccing
 *  @date    Nov 28, 2016
 *
 */

import common from './common/main';
import home from './home/main';
import about from './about/main';
import login from './login/main';

export default [about, ...common, home, login];
