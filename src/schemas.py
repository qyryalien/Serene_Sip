from __future__ import annotations

from datetime import datetime

from pydantic import BaseModel, EmailStr, constr


class UserBaseSchema(BaseModel):
    name: str
    email: EmailStr
    photo: str

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
    photo: str

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



