import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  user: {
    id: string;
    name: string;
    email: string;
    is_active: boolean;
    role_id: string;
    company_id: string | null;
  };
}
