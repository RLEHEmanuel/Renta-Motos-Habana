--
-- PostgreSQL database dump
--

\restrict pcMNp66QtVNXxtMTUZZxxesRwnF7CRGWOcgZyehVF8jWBUFrtNq2ON1dH2so9cT

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

-- Started on 2026-04-30 17:18:53

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 236 (class 1259 OID 16496)
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    id_cliente integer NOT NULL,
    nombre character varying(50),
    apellido character varying(50),
    apellido2 character varying(50),
    ci character varying(11),
    edad integer,
    contacto character varying(14),
    municipio integer,
    sexo integer
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 16495)
-- Name: cliente_id_cliente_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cliente_id_cliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cliente_id_cliente_seq OWNER TO postgres;

--
-- TOC entry 4972 (class 0 OID 0)
-- Dependencies: 235
-- Name: cliente_id_cliente_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cliente_id_cliente_seq OWNED BY public.cliente.id_cliente;


--
-- TOC entry 224 (class 1259 OID 16419)
-- Name: color; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.color (
    id_color integer NOT NULL,
    color character varying(50) NOT NULL
);


ALTER TABLE public.color OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16418)
-- Name: color_id_color_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.color_id_color_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.color_id_color_seq OWNER TO postgres;

--
-- TOC entry 4973 (class 0 OID 0)
-- Dependencies: 223
-- Name: color_id_color_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.color_id_color_seq OWNED BY public.color.id_color;


--
-- TOC entry 238 (class 1259 OID 16514)
-- Name: contrato; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contrato (
    id_contrato integer NOT NULL,
    fk_id_cliente integer,
    fk_id_moto integer,
    fk_id_forma_p integer,
    fecha_inicio date,
    fecha_fin date,
    fecha_devol_real date,
    dias_pro integer,
    dias_contratados integer,
    precio_est numeric(7,2),
    precio_pro numeric(7,2)
);


ALTER TABLE public.contrato OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 16513)
-- Name: contrato_id_contrato_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contrato_id_contrato_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.contrato_id_contrato_seq OWNER TO postgres;

--
-- TOC entry 4974 (class 0 OID 0)
-- Dependencies: 237
-- Name: contrato_id_contrato_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contrato_id_contrato_seq OWNED BY public.contrato.id_contrato;


--
-- TOC entry 226 (class 1259 OID 16430)
-- Name: forma_p; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.forma_p (
    id_forma_p integer NOT NULL,
    forma_p character varying(40) NOT NULL
);


ALTER TABLE public.forma_p OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16429)
-- Name: forma_p_id_forma_p_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.forma_p_id_forma_p_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.forma_p_id_forma_p_seq OWNER TO postgres;

--
-- TOC entry 4975 (class 0 OID 0)
-- Dependencies: 225
-- Name: forma_p_id_forma_p_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.forma_p_id_forma_p_seq OWNED BY public.forma_p.id_forma_p;


--
-- TOC entry 230 (class 1259 OID 16452)
-- Name: marca; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.marca (
    id_marca integer NOT NULL,
    nombre character varying(50)
);


ALTER TABLE public.marca OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16451)
-- Name: marca_id_marca_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.marca_id_marca_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.marca_id_marca_seq OWNER TO postgres;

--
-- TOC entry 4976 (class 0 OID 0)
-- Dependencies: 229
-- Name: marca_id_marca_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.marca_id_marca_seq OWNED BY public.marca.id_marca;


--
-- TOC entry 232 (class 1259 OID 16460)
-- Name: modelo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modelo (
    id_modelo integer NOT NULL,
    nombre character varying(50),
    fk_marca integer
);


ALTER TABLE public.modelo OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16459)
-- Name: modelo_id_modelo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modelo_id_modelo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.modelo_id_modelo_seq OWNER TO postgres;

--
-- TOC entry 4977 (class 0 OID 0)
-- Dependencies: 231
-- Name: modelo_id_modelo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modelo_id_modelo_seq OWNED BY public.modelo.id_modelo;


--
-- TOC entry 234 (class 1259 OID 16473)
-- Name: moto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.moto (
    id_moto integer NOT NULL,
    matricula character varying(50),
    kilometraje integer,
    precio_est numeric(7,2),
    precio_pro numeric(7,2),
    fk_modelo integer,
    fk_color integer,
    fk_situacion integer
);


ALTER TABLE public.moto OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16472)
-- Name: moto_id_moto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.moto_id_moto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.moto_id_moto_seq OWNER TO postgres;

--
-- TOC entry 4978 (class 0 OID 0)
-- Dependencies: 233
-- Name: moto_id_moto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.moto_id_moto_seq OWNED BY public.moto.id_moto;


--
-- TOC entry 220 (class 1259 OID 16397)
-- Name: munic; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.munic (
    id_munic integer NOT NULL,
    nombre character varying(100) NOT NULL
);


ALTER TABLE public.munic OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16396)
-- Name: munic_id_munic_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.munic_id_munic_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.munic_id_munic_seq OWNER TO postgres;

--
-- TOC entry 4979 (class 0 OID 0)
-- Dependencies: 219
-- Name: munic_id_munic_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.munic_id_munic_seq OWNED BY public.munic.id_munic;


--
-- TOC entry 222 (class 1259 OID 16408)
-- Name: sexo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sexo (
    id_sexo integer NOT NULL,
    sexo character varying(20) NOT NULL
);


ALTER TABLE public.sexo OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16407)
-- Name: sexo_id_sexo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sexo_id_sexo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sexo_id_sexo_seq OWNER TO postgres;

--
-- TOC entry 4980 (class 0 OID 0)
-- Dependencies: 221
-- Name: sexo_id_sexo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sexo_id_sexo_seq OWNED BY public.sexo.id_sexo;


--
-- TOC entry 228 (class 1259 OID 16441)
-- Name: situacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.situacion (
    id_situacion integer NOT NULL,
    situacion character varying(40) NOT NULL
);


ALTER TABLE public.situacion OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16440)
-- Name: situacion_id_situacion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.situacion_id_situacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.situacion_id_situacion_seq OWNER TO postgres;

--
-- TOC entry 4981 (class 0 OID 0)
-- Dependencies: 227
-- Name: situacion_id_situacion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.situacion_id_situacion_seq OWNED BY public.situacion.id_situacion;


--
-- TOC entry 4757 (class 2604 OID 16499)
-- Name: cliente id_cliente; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente ALTER COLUMN id_cliente SET DEFAULT nextval('public.cliente_id_cliente_seq'::regclass);


--
-- TOC entry 4751 (class 2604 OID 16422)
-- Name: color id_color; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.color ALTER COLUMN id_color SET DEFAULT nextval('public.color_id_color_seq'::regclass);


--
-- TOC entry 4758 (class 2604 OID 16517)
-- Name: contrato id_contrato; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contrato ALTER COLUMN id_contrato SET DEFAULT nextval('public.contrato_id_contrato_seq'::regclass);


--
-- TOC entry 4752 (class 2604 OID 16433)
-- Name: forma_p id_forma_p; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forma_p ALTER COLUMN id_forma_p SET DEFAULT nextval('public.forma_p_id_forma_p_seq'::regclass);


--
-- TOC entry 4754 (class 2604 OID 16455)
-- Name: marca id_marca; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marca ALTER COLUMN id_marca SET DEFAULT nextval('public.marca_id_marca_seq'::regclass);


--
-- TOC entry 4755 (class 2604 OID 16463)
-- Name: modelo id_modelo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modelo ALTER COLUMN id_modelo SET DEFAULT nextval('public.modelo_id_modelo_seq'::regclass);


--
-- TOC entry 4756 (class 2604 OID 16476)
-- Name: moto id_moto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moto ALTER COLUMN id_moto SET DEFAULT nextval('public.moto_id_moto_seq'::regclass);


--
-- TOC entry 4749 (class 2604 OID 16400)
-- Name: munic id_munic; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.munic ALTER COLUMN id_munic SET DEFAULT nextval('public.munic_id_munic_seq'::regclass);


--
-- TOC entry 4750 (class 2604 OID 16411)
-- Name: sexo id_sexo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sexo ALTER COLUMN id_sexo SET DEFAULT nextval('public.sexo_id_sexo_seq'::regclass);


--
-- TOC entry 4753 (class 2604 OID 16444)
-- Name: situacion id_situacion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.situacion ALTER COLUMN id_situacion SET DEFAULT nextval('public.situacion_id_situacion_seq'::regclass);


--
-- TOC entry 4964 (class 0 OID 16496)
-- Dependencies: 236
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cliente (id_cliente, nombre, apellido, apellido2, ci, edad, contacto, municipio, sexo) FROM stdin;
\.


--
-- TOC entry 4952 (class 0 OID 16419)
-- Dependencies: 224
-- Data for Name: color; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.color (id_color, color) FROM stdin;
\.


--
-- TOC entry 4966 (class 0 OID 16514)
-- Dependencies: 238
-- Data for Name: contrato; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contrato (id_contrato, fk_id_cliente, fk_id_moto, fk_id_forma_p, fecha_inicio, fecha_fin, fecha_devol_real, dias_pro, dias_contratados, precio_est, precio_pro) FROM stdin;
\.


--
-- TOC entry 4954 (class 0 OID 16430)
-- Dependencies: 226
-- Data for Name: forma_p; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.forma_p (id_forma_p, forma_p) FROM stdin;
\.


--
-- TOC entry 4958 (class 0 OID 16452)
-- Dependencies: 230
-- Data for Name: marca; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.marca (id_marca, nombre) FROM stdin;
\.


--
-- TOC entry 4960 (class 0 OID 16460)
-- Dependencies: 232
-- Data for Name: modelo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modelo (id_modelo, nombre, fk_marca) FROM stdin;
\.


--
-- TOC entry 4962 (class 0 OID 16473)
-- Dependencies: 234
-- Data for Name: moto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.moto (id_moto, matricula, kilometraje, precio_est, precio_pro, fk_modelo, fk_color, fk_situacion) FROM stdin;
\.


--
-- TOC entry 4948 (class 0 OID 16397)
-- Dependencies: 220
-- Data for Name: munic; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.munic (id_munic, nombre) FROM stdin;
\.


--
-- TOC entry 4950 (class 0 OID 16408)
-- Dependencies: 222
-- Data for Name: sexo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sexo (id_sexo, sexo) FROM stdin;
\.


--
-- TOC entry 4956 (class 0 OID 16441)
-- Dependencies: 228
-- Data for Name: situacion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.situacion (id_situacion, situacion) FROM stdin;
\.


--
-- TOC entry 4982 (class 0 OID 0)
-- Dependencies: 235
-- Name: cliente_id_cliente_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cliente_id_cliente_seq', 1, false);


--
-- TOC entry 4983 (class 0 OID 0)
-- Dependencies: 223
-- Name: color_id_color_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.color_id_color_seq', 1, false);


--
-- TOC entry 4984 (class 0 OID 0)
-- Dependencies: 237
-- Name: contrato_id_contrato_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contrato_id_contrato_seq', 1, false);


--
-- TOC entry 4985 (class 0 OID 0)
-- Dependencies: 225
-- Name: forma_p_id_forma_p_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.forma_p_id_forma_p_seq', 1, false);


--
-- TOC entry 4986 (class 0 OID 0)
-- Dependencies: 229
-- Name: marca_id_marca_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.marca_id_marca_seq', 1, false);


--
-- TOC entry 4987 (class 0 OID 0)
-- Dependencies: 231
-- Name: modelo_id_modelo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modelo_id_modelo_seq', 1, false);


--
-- TOC entry 4988 (class 0 OID 0)
-- Dependencies: 233
-- Name: moto_id_moto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.moto_id_moto_seq', 1, false);


--
-- TOC entry 4989 (class 0 OID 0)
-- Dependencies: 219
-- Name: munic_id_munic_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.munic_id_munic_seq', 1, false);


--
-- TOC entry 4990 (class 0 OID 0)
-- Dependencies: 221
-- Name: sexo_id_sexo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sexo_id_sexo_seq', 1, false);


--
-- TOC entry 4991 (class 0 OID 0)
-- Dependencies: 227
-- Name: situacion_id_situacion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.situacion_id_situacion_seq', 1, false);


--
-- TOC entry 4786 (class 2606 OID 16549)
-- Name: cliente ci; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT ci UNIQUE (ci);


--
-- TOC entry 4788 (class 2606 OID 16502)
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_cliente);


--
-- TOC entry 4768 (class 2606 OID 16428)
-- Name: color color_color_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.color
    ADD CONSTRAINT color_color_key UNIQUE (color);


--
-- TOC entry 4770 (class 2606 OID 16426)
-- Name: color color_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.color
    ADD CONSTRAINT color_pkey PRIMARY KEY (id_color);


--
-- TOC entry 4790 (class 2606 OID 16520)
-- Name: contrato contrato_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contrato
    ADD CONSTRAINT contrato_pkey PRIMARY KEY (id_contrato);


--
-- TOC entry 4772 (class 2606 OID 16439)
-- Name: forma_p forma_p_forma_p_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forma_p
    ADD CONSTRAINT forma_p_forma_p_key UNIQUE (forma_p);


--
-- TOC entry 4774 (class 2606 OID 16437)
-- Name: forma_p forma_p_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forma_p
    ADD CONSTRAINT forma_p_pkey PRIMARY KEY (id_forma_p);


--
-- TOC entry 4780 (class 2606 OID 16458)
-- Name: marca marca_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marca
    ADD CONSTRAINT marca_pkey PRIMARY KEY (id_marca);


--
-- TOC entry 4782 (class 2606 OID 16466)
-- Name: modelo modelo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modelo
    ADD CONSTRAINT modelo_pkey PRIMARY KEY (id_modelo);


--
-- TOC entry 4784 (class 2606 OID 16479)
-- Name: moto moto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moto
    ADD CONSTRAINT moto_pkey PRIMARY KEY (id_moto);


--
-- TOC entry 4760 (class 2606 OID 16406)
-- Name: munic munic_nombre_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.munic
    ADD CONSTRAINT munic_nombre_key UNIQUE (nombre);


--
-- TOC entry 4762 (class 2606 OID 16404)
-- Name: munic munic_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.munic
    ADD CONSTRAINT munic_pkey PRIMARY KEY (id_munic);


--
-- TOC entry 4764 (class 2606 OID 16415)
-- Name: sexo sexo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sexo
    ADD CONSTRAINT sexo_pkey PRIMARY KEY (id_sexo);


--
-- TOC entry 4766 (class 2606 OID 16417)
-- Name: sexo sexo_sexo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sexo
    ADD CONSTRAINT sexo_sexo_key UNIQUE (sexo);


--
-- TOC entry 4776 (class 2606 OID 16448)
-- Name: situacion situacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.situacion
    ADD CONSTRAINT situacion_pkey PRIMARY KEY (id_situacion);


--
-- TOC entry 4778 (class 2606 OID 16450)
-- Name: situacion situacion_situacion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.situacion
    ADD CONSTRAINT situacion_situacion_key UNIQUE (situacion);


--
-- TOC entry 4795 (class 2606 OID 16503)
-- Name: cliente cliente_municipio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_municipio_fkey FOREIGN KEY (municipio) REFERENCES public.munic(id_munic);


--
-- TOC entry 4796 (class 2606 OID 16508)
-- Name: cliente cliente_sexo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_sexo_fkey FOREIGN KEY (sexo) REFERENCES public.sexo(id_sexo);


--
-- TOC entry 4797 (class 2606 OID 16521)
-- Name: contrato contrato_fk_id_cliente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contrato
    ADD CONSTRAINT contrato_fk_id_cliente_fkey FOREIGN KEY (fk_id_cliente) REFERENCES public.cliente(id_cliente);


--
-- TOC entry 4798 (class 2606 OID 16531)
-- Name: contrato contrato_fk_id_forma_p_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contrato
    ADD CONSTRAINT contrato_fk_id_forma_p_fkey FOREIGN KEY (fk_id_forma_p) REFERENCES public.forma_p(id_forma_p);


--
-- TOC entry 4799 (class 2606 OID 16526)
-- Name: contrato contrato_fk_id_moto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contrato
    ADD CONSTRAINT contrato_fk_id_moto_fkey FOREIGN KEY (fk_id_moto) REFERENCES public.moto(id_moto);


--
-- TOC entry 4791 (class 2606 OID 16467)
-- Name: modelo modelo_fk_marca_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modelo
    ADD CONSTRAINT modelo_fk_marca_fkey FOREIGN KEY (fk_marca) REFERENCES public.marca(id_marca);


--
-- TOC entry 4792 (class 2606 OID 16485)
-- Name: moto moto_fk_color_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moto
    ADD CONSTRAINT moto_fk_color_fkey FOREIGN KEY (fk_color) REFERENCES public.color(id_color);


--
-- TOC entry 4793 (class 2606 OID 16480)
-- Name: moto moto_fk_modelo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moto
    ADD CONSTRAINT moto_fk_modelo_fkey FOREIGN KEY (fk_modelo) REFERENCES public.modelo(id_modelo);


--
-- TOC entry 4794 (class 2606 OID 16490)
-- Name: moto moto_fk_situacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moto
    ADD CONSTRAINT moto_fk_situacion_fkey FOREIGN KEY (fk_situacion) REFERENCES public.situacion(id_situacion);


-- Completed on 2026-04-30 17:18:55

--
-- PostgreSQL database dump complete
--

\unrestrict pcMNp66QtVNXxtMTUZZxxesRwnF7CRGWOcgZyehVF8jWBUFrtNq2ON1dH2so9cT

