"""update user

Revision ID: 8f32a2451385
Revises: d9c7f755a07c
Create Date: 2023-08-23 09:12:31.656839

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '8f32a2451385'
down_revision: Union[str, None] = 'd9c7f755a07c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
