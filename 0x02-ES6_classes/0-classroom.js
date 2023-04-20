/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  set maxStudentsSize(newMaxStudentsSize) {
    if (typeof newMaxStudentsSize === 'number') {
      this._maxStudentsSize = newMaxStudentsSize;
    }
  }

  get maxStudentsSize() {
    return this._maxStudentsSize;
  }
}
