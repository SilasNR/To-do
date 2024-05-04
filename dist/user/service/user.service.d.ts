import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<void>;
    delete(id: number): Promise<void>;
}
