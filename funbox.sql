-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 16 Agu 2022 pada 05.39
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `funbox`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id_admin` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id_admin`, `username`, `password`, `email`) VALUES
('ce5ac5b6-1aee-49a3-933a-15be2936ac37', 'fawwaz', '$2a$10$KITNZhseivxHBnKIHqOSrONhIORzenHBMMErDksfU.RGhSHsjLce.', 'fawwaz@gmail.com');

-- --------------------------------------------------------

--
-- Struktur dari tabel `feedback`
--

CREATE TABLE `feedback` (
  `id_feedback` int(11) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `id_lapangan` varchar(255) NOT NULL,
  `rating` int(11) NOT NULL,
  `ulasan` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `lapangan`
--

CREATE TABLE `lapangan` (
  `id_lapangan` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `jenis_lapangan` varchar(255) NOT NULL,
  `jumlah` varchar(255) NOT NULL,
  `harga_per_jam` int(11) NOT NULL,
  `jam_operasional` varchar(255) NOT NULL,
  `kontak` varchar(255) NOT NULL,
  `koordinat` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `lapangan`
--

INSERT INTO `lapangan` (`id_lapangan`, `nama`, `jenis_lapangan`, `jumlah`, `harga_per_jam`, `jam_operasional`, `kontak`, `koordinat`, `alamat`, `image`) VALUES
('08600842-2e89-4c15-b546-9a502bd3078c', 'Wijaya Putra', 'Futsal', '2', 77000, '10.00-22.00', '081357579944', '(-7.9449958, 112.6435455)', 'Jl. Tenaga Selatan No. 12, Blimbing, Malang', ''),
('2d1b4fa9-fd36-49b9-8618-9199b194aede', 'Buana Futsal', 'Futsal', '2', 52000, '09.00-20.00', '085107744778', '(-7.9388165, 112.6009853)', 'Jl. Tlogo Sari No. 36, Merjosari, Kec. Lowokwaru, Kota Malang 65144', ''),
('3260eec4-9932-492d-ba86-aa22e4bfb487', 'Human Basketball Court', 'Basket', '1', 102000, '09.00-22.00', '085230419377', '(-7.9447999, 112.6274337)', 'Jl. Papa Hijau No. 11, Tulusrejo, Malang', ''),
('493c0273-a577-45e9-86ef-6e81915f8534', 'Gor Baranaga', 'Badminton', '4', 32000, '08.00-22.00', '087859030404', '(-7.9503920, 112.6523914)', 'Jl. Batu bara No. 15, Pandanwangi, Kec. Blimbing, Kota Malang', ''),
('5118b812-6476-40f2-ab6e-db0e622c1992', 'Linda Futsal', 'Futsal', '1', 77000, '07.00-23.00', '081390197556', '(-7.9178445, 112.5816240)', 'Jl. Sidomakmur No. 82, Jetak Lor, Mulyoagung, Dau, Kab. Malang', ''),
('5488dc43-afee-4da5-898c-926bc4f239bf', 'Champions Futsal Tlogomas', 'Futsal', '4', 72000, '08.00-22.00', '081252092282', '(-7.9305095, 112.6048844)', 'Jl. Baiduri pandan 17, Tlogomas, Malang', ''),
('5aa417fe-383f-4503-941e-17067b45a258', 'Platinum Badminton N1', 'Badminton', '3', 42000, '06.00-21.00', '0811525259', '(-7.9404748, 112.6354790)', 'Jl. C Trowulan No. 32, Kec. Lowokwaru, Kota Malang', ''),
('6481ecc9-bdc0-4a54-82f1-e383c5537743', 'Niki Mirah Futsal', 'Futsal', '1', 92000, '06.00-00.00', '082335789202/081281367339', '(-7.9374902, 112.6244448)', 'Jl. Soekarno Hatta PTP 1 No. 17, Mojolangu, Malang', ''),
('651394ea-f988-48be-bcbd-92b0bda973d7', 'Futsal ABM', 'Futsal', '2', 62000, '06.00-23.00', '085649705976', '(-7.9414354, 112.6371481)', 'STIE ABM', ''),
('721d5188-2bdb-4b76-a571-cc8ebfc657ce', 'Angkasan Futsal', 'Futsal & Badminton', '2', 72000, '08.00-22.00', '0341-4345877', '(-7.9417343, 112.6256062)', 'Jl. Papa Kuning No. 40, Kec. Lowokwaru, Kota Malang', ''),
('73fb2676-d335-466a-8bd2-3dff8e65b4fa', 'Viva futsal', 'Futsal', '2', 52000, '06.00-02.00', '08113771772', '(-7.9480380, 112.6175950)', 'Jl. Bunga Andong, Jatimulyo, Malang', ''),
('78d71072-8e41-4950-9242-fd848ba1118e', 'Caesar Futsal', 'Futsal', '2', 72000, '07.00-22.00', '085856782029', '(-7.9400165, 112.6055570)', 'Jl. Joyo Raharjo No. 281, Merjosari, Kec. Lowokwaru, Kota Malang', ''),
('8142e5cd-28f9-4208-8bd9-5dbcdc470a56', 'Gor Kanaya', 'Badminton', '3', 27000, '08.00-22.00', '085100711060', '(-7.9853797, 112.6452289)', 'Jl. Werkudoro, Polehan, Kec. Blimbing, Kota Malang', ''),
('8a50ba7c-2521-42ce-b9e7-a71d56aab079', 'Gor Badminton Men Armed 1', 'Badminton', '1', 27000, '08.00-22.00', '081368618169', '(-7.9789984, 112.6404244)', 'Jl. Panglima Sudiarman No. 14, Kec. Blimbing, Malang Kota', ''),
('9232057c-2fec-46c3-b8b3-372b9fdd9373', 'Gedung Badminton Balai RW 17', 'Badminton', '3', 27000, '08.00-23.00', '081334031103/089625960088', '(-7.9319895, 112.6293267)', 'Sudimoro Utara, Mojolangu, Lowokwaru, Malang', ''),
('9f38162b-0af5-4787-89ab-335b98f10fe0', 'Gor Badminton Raja Basa', 'Badminton', '4', 42000, '08.00-22.00', '085607949699', '(-7.9683833, 112.6073812)', 'Jl. Terusan Raja Basa No.5, Sukun, Kota Malang', ''),
('a1fa9555-58d0-4263-8d3e-a603af9f0ee9', 'Basket L8', 'Basket', '1', 102000, '08.00-21.00', '082349942288', '(-7.9622792, 112.6389286)', 'Jl. Lematan No. 8, Rampal Claket, Klojen, Kota Malang', ''),
('a6f4ed9b-b311-4b2a-b423-ab547bd1dfdc', 'SM Futsal', 'Futsal', '10', 112000, '08.00-22.00', '0857080801', '(-7.9324179, 112.6299644)', 'Sudimoro Utara, Mojolangu, Lowokwaru, Malang', ''),
('bbf54f98-1203-4661-a28a-aa2d575c17fd', 'Champion Puncak Mandala', 'Futsal & basket', '6', 72000, '08.00-23.00', '0341-5834334/0341-613579', '(-7.9645495, 112.6042612)', 'Jl. Puncak Mandala No. 42-44, Malang', ''),
('e657670e-c5fb-4096-bfd8-63ae65e9329d', 'Basket Bima Sakti', 'Basket', '1', 202000, '09.00-22.00', '0341-323051', '(-7.9955461, 112.6199256)', '', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('create-admin.js'),
('create-feedback.js'),
('create-lapangan.js'),
('create-transaksi.js'),
('create-user.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi`
--

CREATE TABLE `transaksi` (
  `id_transaksi` varchar(255) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `id_lapangan` varchar(255) NOT NULL,
  `tgl_booking` datetime NOT NULL,
  `batas_bayar` datetime NOT NULL,
  `tgl_main` date NOT NULL,
  `jam_mulai` time NOT NULL,
  `jam_berakhir` time NOT NULL,
  `total_harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `email`, `phone`, `image`) VALUES
('2bf3eff5-eff9-4c7a-894a-33f0559e3ffe', 'fawwaz', '$2a$10$zmWl6i7OtoI/Zu5Ri3ZPROyc5LxKoikNaEsQIPluSdV0OXQgi4p7y', 'fawwaz@gmail.com', '082331045347', NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indeks untuk tabel `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id_feedback`,`id_user`,`id_lapangan`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_lapangan` (`id_lapangan`);

--
-- Indeks untuk tabel `lapangan`
--
ALTER TABLE `lapangan`
  ADD PRIMARY KEY (`id_lapangan`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id_transaksi`,`id_user`,`id_lapangan`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_lapangan` (`id_lapangan`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`id_lapangan`) REFERENCES `lapangan` (`id_lapangan`);

--
-- Ketidakleluasaan untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `transaksi_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `transaksi_ibfk_2` FOREIGN KEY (`id_lapangan`) REFERENCES `lapangan` (`id_lapangan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
