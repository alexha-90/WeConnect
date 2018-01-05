--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.0

-- Started on 2018-01-03 02:07:24 PST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3155 (class 1262 OID 16386)
-- Dependencies: 3154
-- Name: weconnect; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE weconnect IS 'Local database for weconnect application by Alex Ha.';


--
-- TOC entry 1 (class 3079 OID 13253)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 3157 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16480)
-- Name: content_posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE content_posts (
    username character varying NOT NULL,
    poster_id integer NOT NULL,
    content_post_id integer NOT NULL,
    poster_location character varying NOT NULL,
    content_summary character varying(100) NOT NULL,
    content_description character varying(1500) NOT NULL,
    content_ideal_match character varying(1500) NOT NULL,
    content_tags character varying(150),
    content_categories character varying(500)[],
    submitted_timestamp character varying(50) NOT NULL,
    last_edited character varying(50),
    images_arr character varying[],
    yt_upload_frequency character varying(50),
    yt_video_length character varying(50),
    yt_sub_count character varying(50),
    yt_view_count character varying,
    ig_post_frequency character varying(75),
    ig_followers character varying,
    ig_likes character varying,
    ig_comments character varying,
    tw_post_frequency character varying,
    tw_followers character varying(50),
    tw_post_likes character varying(50),
    tw_comments character varying(50),
    sc_post_frequency character varying(50),
    sc_followers character varying(50),
    sc_story_opens character varying(50)
);


ALTER TABLE content_posts OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16478)
-- Name: content_posts_content_post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE content_posts_content_post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE content_posts_content_post_id_seq OWNER TO postgres;

--
-- TOC entry 3158 (class 0 OID 0)
-- Dependencies: 196
-- Name: content_posts_content_post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE content_posts_content_post_id_seq OWNED BY content_posts.content_post_id;


--
-- TOC entry 202 (class 1259 OID 16557)
-- Name: private_messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE private_messages (
    message_id integer NOT NULL,
    poster_id integer NOT NULL,
    user_id integer NOT NULL,
    poster_message character varying,
    user_message character varying,
    "timestamp" character varying NOT NULL,
    post_id integer NOT NULL,
    post_summary character varying,
    poster_username character varying,
    username character varying
);


--ALTER TABLE private_messages OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16555)
-- Name: private_messages_conversation_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE private_messages_conversation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE private_messages_conversation_id_seq OWNER TO postgres;

--
-- TOC entry 3159 (class 0 OID 0)
-- Dependencies: 201
-- Name: private_messages_conversation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE private_messages_conversation_id_seq OWNED BY private_messages.message_id;


--
-- TOC entry 200 (class 1259 OID 16546)
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


--ALTER TABLE session OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 16491)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    user_id integer NOT NULL,
    email character varying(100) NOT NULL,
    password character varying NOT NULL,
    "timestamp" character varying NOT NULL,
    account_type character varying NOT NULL,
    username character varying(50) NOT NULL
);


--ALTER TABLE users OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16489)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE users_user_id_seq OWNER TO postgres;

--
-- TOC entry 3160 (class 0 OID 0)
-- Dependencies: 198
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE users_user_id_seq OWNED BY users.user_id;


--
-- TOC entry 3018 (class 2604 OID 16483)
-- Name: content_posts content_post_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY content_posts ALTER COLUMN content_post_id SET DEFAULT nextval('content_posts_content_post_id_seq'::regclass);


--
-- TOC entry 3020 (class 2604 OID 16566)
-- Name: private_messages message_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY private_messages ALTER COLUMN message_id SET DEFAULT nextval('private_messages_conversation_id_seq'::regclass);


--
-- TOC entry 3019 (class 2604 OID 16494)
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN user_id SET DEFAULT nextval('users_user_id_seq'::regclass);


--
-- TOC entry 3022 (class 2606 OID 16488)
-- Name: content_posts content_posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY content_posts
    ADD CONSTRAINT content_posts_pkey PRIMARY KEY (content_post_id);


--
-- TOC entry 3028 (class 2606 OID 16568)
-- Name: private_messages private_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY private_messages
    ADD CONSTRAINT private_messages_pkey PRIMARY KEY (message_id);


--
-- TOC entry 3026 (class 2606 OID 16553)
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- TOC entry 3024 (class 2606 OID 16499)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


-- Completed on 2018-01-03 02:07:24 PST

--
-- PostgreSQL database dump complete
--

