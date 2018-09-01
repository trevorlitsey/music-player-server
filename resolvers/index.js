import merge from 'lodash/merge';

import album from './album';
import artist from './artist';
import playlist from './playlist';
import song from './song';

export default merge(album, artist, playlist, song);
