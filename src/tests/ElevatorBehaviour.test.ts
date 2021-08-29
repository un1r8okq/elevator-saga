import ElevatorBehaviour from '../ElevatorBehaviour';

describe('ElevatorBehaviour', () => {
  it('goes "ding!"', () => {
    const elevatorBehaviour = new ElevatorBehaviour();

    expect(elevatorBehaviour.getSound()).toBe('Ding!');
  });
});
