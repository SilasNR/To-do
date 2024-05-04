import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    create(createUserDto: CreateUserDto): Promise<any>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<any>;
    delete(id: number): Promise<void>;
}
