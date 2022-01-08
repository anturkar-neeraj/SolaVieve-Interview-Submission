CREATE TABLE
IF NOT EXISTS "feedbackManagement".users
(
    id uuid NOT NULL DEFAULT uuid_generate_v4
(),
    first_name character varying
(1000) COLLATE pg_catalog."default",
    last_name character varying
(1000) COLLATE pg_catalog."default",
    email character varying
(1000) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY
(id)
)


CREATE TABLE
IF NOT EXISTS "feedbackManagement".feedback
(
    id uuid NOT NULL DEFAULT uuid_generate_v4
(),
    user_id uuid,
    experience_rating numeric,
    payment_process_rating numeric,
    customer_service_rating numeric,
    feedback_comment character varying
(50000) COLLATE pg_catalog."default",
    created_on timestamp
with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT feedback_pkey PRIMARY KEY
(id),
    CONSTRAINT userid_unique UNIQUE
(user_id),
    CONSTRAINT userid_fk FOREIGN KEY
(user_id)
        REFERENCES "feedbackManagement".users
(id) MATCH SIMPLE
        ON
UPDATE NO ACTION
        ON
DELETE NO ACTION
)

TABLESPACE
pg_default;

ALTER TABLE
IF EXISTS "feedbackManagement".feedback
    OWNER to neerajanturkar;

ALTER TABLE
IF EXISTS "feedbackManagement".users
    OWNER to neerajanturkar;