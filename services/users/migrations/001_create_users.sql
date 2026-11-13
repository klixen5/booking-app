BEGIN;

CREATE SCHEMA IF NOT EXISTS auth;

CREATE TABLE IF NOT EXISTS auth.users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email varchar(254) NOT NULL UNIQUE,
    display_name varchar(100) NOT NULL,
    password_hash text NOT NULL,
    role varchar(16) NOT NULL DEFAULT 'user',
    created_at timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT users_display_name_not_blank
        CHECK (length(trim(display_name)) > 0),
    CONSTRAINT users_role_allowed
        CHECK (role IN ('user', 'admin'))
);

COMMIT;
