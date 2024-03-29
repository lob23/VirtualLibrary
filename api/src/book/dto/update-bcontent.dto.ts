import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateBContentDto } from './create-bcontent.dto';

export class UpdateBContentDto extends PartialType(
  OmitType(CreateBContentDto, [] as const),
) {}
