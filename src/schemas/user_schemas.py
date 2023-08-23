from __future__ import annotations

from datetime import datetime

from pydantic import BaseModel, EmailStr, constr, Field
from pydantic.schema import Optional


class UserBaseSchema(BaseModel):
    name: str
    email: EmailStr
    address: Optional[str]
    phone_number: Optional[str]

    class Config:
        orm_mode = True


class CreateUserSchema(UserBaseSchema):
    password: constr(min_length=8)
    passwordConfirm: str
    role: str = 'user'
    verified: bool = False


class UpdateUserSchema(BaseModel):
    name: str
    email: EmailStr
    address: str
    phone_number: str = Field(regex=r"^\+38[ -]?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$")

    class Config:
        orm_mode = True


class UpdateUserPasswordSchema(BaseModel):
    user_id: int
    password: constr(min_length=8)
    passwordConfirm: str


class LoginUserSchema(BaseModel):
    email: EmailStr
    password: constr(min_length=8)


class UserEmailSchema(BaseModel):
    email: EmailStr


class UserResponse(UserBaseSchema):
    id: int
    created_at: datetime
    updated_at: datetime
