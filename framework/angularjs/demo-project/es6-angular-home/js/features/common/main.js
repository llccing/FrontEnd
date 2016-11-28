/**
 *  Entrance of common service
 *
 *
 *  @author  llccing
 *  @date    Nov 28, 2016
 *
 */

import logical from './logical/main';
import ui from './ui/main';

export default [...logical, ...ui];
