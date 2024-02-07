-- SCHEMA: main
DROP SCHEMA IF EXISTS main ;
CREATE SCHEMA main
    AUTHORIZATION postgres;

-- SCHEMA: security
DROP SCHEMA IF EXISTS security ;
CREATE SCHEMA IF NOT EXISTS security
    AUTHORIZATION postgres;


-- Table: main.users
DROP TABLE IF EXISTS main.users;
CREATE TABLE IF NOT EXISTS main.users
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(100) COLLATE pg_catalog."default",
    address character varying(255) COLLATE pg_catalog."default",
    avatar character varying(255) COLLATE pg_catalog."default",
    status boolean NOT NULL DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_uq UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS main.users
    OWNER to postgres;

-- Table: security.credentials
DROP TABLE IF EXISTS security.credentials;
CREATE TABLE IF NOT EXISTS security.credentials
(
    user_id uuid NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    temporary_password character varying(255) COLLATE pg_catalog."default",
    created_at time with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at time with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at time with time zone,
    CONSTRAINT "credentials_pKey" PRIMARY KEY (user_id),
    CONSTRAINT credentials_user FOREIGN KEY (user_id)
        REFERENCES main.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS security.credentials
    OWNER to postgres;