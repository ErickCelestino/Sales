import { StateEntity } from '../entities/state.entity';

export class ReturStateDto {
  name: string;

  constructor(state: StateEntity) {
    this.name = state.name;
  }
}
