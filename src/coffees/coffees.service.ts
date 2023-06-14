import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  create(createCoffeeDto: CreateCoffeeDto) {
    return 'This action adds a new coffee';
  }

  findAll() {
    return { coffees: `This action returns all coffees` };
  }

  findOne(id: number) {
    return { coffees: `This action returns a #${id} coffee` };
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return { coffees: `This action updates a #${id} coffee` };
  }

  remove(id: number) {
    return { coffees: `This action removes a #${id} coffee` };
  }
}
