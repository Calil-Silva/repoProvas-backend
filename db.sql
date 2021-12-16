--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    category_name character varying(255) NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: names; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.names (
    id integer NOT NULL,
    test_name character varying(255) NOT NULL
);


ALTER TABLE public.names OWNER TO postgres;

--
-- Name: names_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.names_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.names_id_seq OWNER TO postgres;

--
-- Name: names_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.names_id_seq OWNED BY public.names.id;


--
-- Name: periods; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.periods (
    id integer NOT NULL,
    period_name character varying(255) NOT NULL
);


ALTER TABLE public.periods OWNER TO postgres;

--
-- Name: periods_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.periods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.periods_id_seq OWNER TO postgres;

--
-- Name: periods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.periods_id_seq OWNED BY public.periods.id;


--
-- Name: professors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.professors (
    id integer NOT NULL,
    professor_name character varying(255) NOT NULL
);


ALTER TABLE public.professors OWNER TO postgres;

--
-- Name: professors_by_subject; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.professors_by_subject (
    id integer NOT NULL,
    subject_id integer NOT NULL,
    professor_id integer NOT NULL
);


ALTER TABLE public.professors_by_subject OWNER TO postgres;

--
-- Name: professors_by_subject_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.professors_by_subject_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.professors_by_subject_id_seq OWNER TO postgres;

--
-- Name: professors_by_subject_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.professors_by_subject_id_seq OWNED BY public.professors_by_subject.id;


--
-- Name: professors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.professors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.professors_id_seq OWNER TO postgres;

--
-- Name: professors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.professors_id_seq OWNED BY public.professors.id;


--
-- Name: subjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subjects (
    id integer NOT NULL,
    subject_name character varying(255) NOT NULL
);


ALTER TABLE public.subjects OWNER TO postgres;

--
-- Name: subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subjects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subjects_id_seq OWNER TO postgres;

--
-- Name: subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subjects_id_seq OWNED BY public.subjects.id;


--
-- Name: tests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tests (
    id integer NOT NULL,
    test_name_id integer NOT NULL,
    category_id integer NOT NULL,
    sub_pro_id integer NOT NULL,
    link character varying(255) NOT NULL,
    period_id integer NOT NULL
);


ALTER TABLE public.tests OWNER TO postgres;

--
-- Name: tests_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tests_id_seq OWNER TO postgres;

--
-- Name: tests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tests_id_seq OWNED BY public.tests.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: names id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.names ALTER COLUMN id SET DEFAULT nextval('public.names_id_seq'::regclass);


--
-- Name: periods id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.periods ALTER COLUMN id SET DEFAULT nextval('public.periods_id_seq'::regclass);


--
-- Name: professors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors ALTER COLUMN id SET DEFAULT nextval('public.professors_id_seq'::regclass);


--
-- Name: professors_by_subject id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors_by_subject ALTER COLUMN id SET DEFAULT nextval('public.professors_by_subject_id_seq'::regclass);


--
-- Name: subjects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects ALTER COLUMN id SET DEFAULT nextval('public.subjects_id_seq'::regclass);


--
-- Name: tests id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests ALTER COLUMN id SET DEFAULT nextval('public.tests_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, category_name) FROM stdin;
1	P1
2	P2
3	2CH
\.


--
-- Data for Name: names; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.names (id, test_name) FROM stdin;
1	2020.1
2	2020.2
\.


--
-- Data for Name: periods; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.periods (id, period_name) FROM stdin;
1	1 sem
2	2 sem
3	1 trim
4	2 trim
5	3 trim
6	4 trim
\.


--
-- Data for Name: professors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.professors (id, professor_name) FROM stdin;
1	Lenadro
2	Bruna
3	Pedrao
4	Calil
5	Jhon
\.


--
-- Data for Name: professors_by_subject; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.professors_by_subject (id, subject_id, professor_id) FROM stdin;
5	1	1
6	1	2
7	2	3
8	3	4
9	3	5
\.


--
-- Data for Name: subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subjects (id, subject_name) FROM stdin;
1	javascript
2	java
3	python
\.


--
-- Data for Name: tests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tests (id, test_name_id, category_id, sub_pro_id, link, period_id) FROM stdin;
5	2	1	5	http://...	1
6	1	1	5	http://...	2
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 3, true);


--
-- Name: names_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.names_id_seq', 2, true);


--
-- Name: periods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.periods_id_seq', 6, true);


--
-- Name: professors_by_subject_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.professors_by_subject_id_seq', 9, true);


--
-- Name: professors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.professors_id_seq', 5, true);


--
-- Name: subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subjects_id_seq', 3, true);


--
-- Name: tests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tests_id_seq', 6, true);


--
-- Name: categories categories_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pk PRIMARY KEY (id);


--
-- Name: names names_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.names
    ADD CONSTRAINT names_pk PRIMARY KEY (id);


--
-- Name: periods periods_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.periods
    ADD CONSTRAINT periods_pk PRIMARY KEY (id);


--
-- Name: professors_by_subject professors_by_subject_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors_by_subject
    ADD CONSTRAINT professors_by_subject_pk PRIMARY KEY (id);


--
-- Name: professors professors_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_pk PRIMARY KEY (id);


--
-- Name: subjects subjects_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT subjects_pk PRIMARY KEY (id);


--
-- Name: tests tests_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_pk PRIMARY KEY (id);


--
-- Name: professors_by_subject professors_by_subject_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors_by_subject
    ADD CONSTRAINT professors_by_subject_fk0 FOREIGN KEY (subject_id) REFERENCES public.subjects(id);


--
-- Name: professors_by_subject professors_by_subject_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors_by_subject
    ADD CONSTRAINT professors_by_subject_fk1 FOREIGN KEY (professor_id) REFERENCES public.professors(id);


--
-- Name: tests tests_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_fk0 FOREIGN KEY (test_name_id) REFERENCES public.names(id);


--
-- Name: tests tests_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_fk1 FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: tests tests_fk2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_fk2 FOREIGN KEY (sub_pro_id) REFERENCES public.professors_by_subject(id);


--
-- Name: tests tests_fk3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_fk3 FOREIGN KEY (period_id) REFERENCES public.periods(id);


--
-- PostgreSQL database dump complete
--

