import { PartialType } from '@nestjs/mapped-types';

export class CreateTaggedDto {}

export class UpdateTaggedDto extends PartialType(CreateTaggedDto) {}
