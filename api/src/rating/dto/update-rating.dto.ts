import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateRatingDto } from './create-rating.dto';

export class UpdateRatingDto extends PartialType(
  OmitType(CreateRatingDto, ['Rating_userId', 'Rating_bookId'] as const),
) {}
