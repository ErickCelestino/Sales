import { ReturStateDto } from 'src/state/dtos/returnState.dto';
import { CityEntity } from '../entities/city.entity';

export class ReturnCityDto {
  name: string;
  state?: ReturStateDto;

  constructor(city: CityEntity) {
    this.name = city.name;
    this.state = city.state ? new ReturStateDto(city.state) : undefined;
  }
}
