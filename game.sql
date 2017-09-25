-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2017 at 04:12 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game`
--

-- --------------------------------------------------------

--
-- Table structure for table `leaderboard`
--

CREATE TABLE `leaderboard` (
  `id` int(2) NOT NULL,
  `name` varchar(15) NOT NULL,
  `score` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leaderboard`
--

INSERT INTO `leaderboard` (`id`, `name`, `score`) VALUES
(7, 'Unavailable', 0),
(2, 'Unavailable', 0),
(4, 'Unavailable', 0),
(10, 'Unavailable', 0),
(3, 'Unavailable', 0),
(9, 'Unavailable', 0),
(6, 'Unavailable', 0),
(5, 'Unavailable', 0),
(1, 'Unavailable', 0),
(8, 'Unavailable', 0);

-- --------------------------------------------------------

--
-- Table structure for table `temp`
--

CREATE TABLE `temp` (
  `id` int(2) NOT NULL,
  `name` varchar(15) NOT NULL,
  `score` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `temp`
--

INSERT INTO `temp` (`id`, `name`, `score`) VALUES
(7, 'Unavailable', 0),
(2, 'Unavailable', 0),
(4, 'Unavailable', 0),
(10, 'Unavailable', 0),
(3, 'Unavailable', 0),
(9, 'Unavailable', 0),
(6, 'Unavailable', 0),
(5, 'Unavailable', 0),
(1, 'Unavailable', 0),
(8, 'Unavailable', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
