/**
 *  Entrance of common service
 *
 *
 *  @author  llccing
 *  @date    Nov 29, 2016
 *
 */

import logical from './logical/main';
import ui from './ui/main';

export default [...logical, ...ui];
