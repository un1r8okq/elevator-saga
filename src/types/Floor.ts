interface Floor {
  /**
   * Gets the floor number of the floor object.
   */
  floorNum(): number;
   /**
    * Gets the floor number of the floor object.
    */
  floorNum(floorNum: number): number;
  /**
   * Triggered when someone has pressed the up button at a floor.
   * Note that passengers will press the button again if they fail to enter an elevator.
   */
  on(eventName: 'up_button_pressed', callback: () => void): void;
  /**
   * Triggered when someone has pressed the up button at a floor.
   * Note that passengers will press the button again if they fail to enter an elevator.
   */
  on(eventName: 'down_button_pressed', callback: () => void): void;
}

export default Floor;
