-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 27, 2024 at 12:01 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wt_cp`
--

-- --------------------------------------------------------

--
-- Table structure for table `form_bedroom_room`
--

CREATE TABLE `form_bedroom_room` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `width` int(11) NOT NULL,
  `length` int(11) NOT NULL,
  `bed_type` varchar(255) NOT NULL,
  `furniture` varchar(255) NOT NULL,
  `flooring` varchar(255) NOT NULL,
  `paint` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `form_bedroom_room`
--

INSERT INTO `form_bedroom_room` (`id`, `user_id`, `width`, `length`, `bed_type`, `furniture`, `flooring`, `paint`) VALUES
(1, 1, 29, 28, '', 'side-table', 'floor-lamp', 'apcolite-advance'),
(2, 1, 29, 28, '', 'side-table', 'floor-lamp', 'apcolite-advance'),
(3, 1, 37, 36, '', 'side-table', 'floor-lamp', 'apcolite-advance'),
(4, 1, 37, 36, '', 'side-table', 'floor-lamp', 'apcolite-advance'),
(5, 1, 31, 33, '', 'shoe-rack,side-table', 'pendant-lighting', 'apcolite-advance'),
(6, 1, 30, 31, '', 'side-table', 'floor-lamp', 'apcolite-advance'),
(7, 1, 31, 30, '', 'side-table', 'floor-lamp', 'apcolite-advance'),
(8, 1, 28, 29, 'Queen Size Bed (60\"x72\")', 'Chest of Drawers', 'Wooden Flooring (Laminated)', 'apcolite-advance');

-- --------------------------------------------------------

--
-- Table structure for table `form_kitchen_room`
--

CREATE TABLE `form_kitchen_room` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `width` int(11) NOT NULL,
  `length` int(11) NOT NULL,
  `kitchen_type` varchar(255) NOT NULL,
  `platform_tops` varchar(255) NOT NULL,
  `units` varchar(255) NOT NULL,
  `paint` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `form_kitchen_room`
--

INSERT INTO `form_kitchen_room` (`id`, `user_id`, `width`, `length`, `kitchen_type`, `platform_tops`, `units`, `paint`) VALUES
(57, 1, 27, 27, 'Parallel Kitchen', 'Quartz Stone Top', 'Loft Units', 'apcolite-advance'),
(58, 1, 27, 27, 'Parallel Kitchen', 'Quartz Stone Top', 'Loft Units', 'apcolite-advance'),
(59, 1, 25, 25, '', '', '', ''),
(60, 1, 25, 25, '', 'Quartz Stone Top', 'Loft Units', 'apcolite-advance'),
(61, 1, 28, 30, 'Straight Kitchen', 'Quartz Stone Top,Marble', 'Loft Units,Corner Base', 'apcolite-advance');

-- --------------------------------------------------------

--
-- Table structure for table `form_living_room`
--

CREATE TABLE `form_living_room` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `width` int(11) NOT NULL,
  `length` int(11) NOT NULL,
  `sofa_type` varchar(255) NOT NULL,
  `furniture` varchar(255) NOT NULL,
  `lighting` varchar(255) NOT NULL,
  `paint` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `form_living_room`
--

INSERT INTO `form_living_room` (`id`, `user_id`, `width`, `length`, `sofa_type`, `furniture`, `lighting`, `paint`) VALUES
(87, 1, 27, 27, '3-1-1-sofa', 'center-table,tv-unit', 'floor-lamp,pendant-lighting', 'apcolite-advance'),
(88, 1, 26, 22, 'corner-sofa', 'shoe-rack,center-table,tv-unit', 'floor-lamp,pendant-lighting', 'apcolite-advance'),
(89, 1, 28, 29, '3-2-1-sofa', 'center-table', 'ceiling-lighting', 'tractor-emulsion');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `date_of_birth` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `phone_number`, `address`, `gender`, `age`, `date_of_birth`) VALUES
(1, 'abc@123', 'abc@123', 'abc@gmail.com', '123456789', '', '', 0, '0000-00-00'),
(2, 'admin1', '$2y$10$YzgxY/IsHtAk/9LoYdZT/OfIfFWCcSsnOZtZ5pG6aWPG8ctT1HUJq', 'admin@123.com', '7620543187', 'qwe', 'female', 23, '2024-04-24'),
(3, 'Isha', '$2y$10$/pbJSRULAPJELu8zjf/KWOFSpd/KJeGJ8tC24m.zs7V.PWfISGd4a', 'admin@123.com', '7620543187', 'qwe', 'female', 23, '2024-04-24'),
(4, 'saurabh', '$2y$10$8rBXhQfkSCwe36uSLwoRuuqwG1725kGdLtiIWKYh4obPw4eBAWgo.', 'admin@123.com', '7620543187', 'qwe', 'male', 19, '2024-04-15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `form_bedroom_room`
--
ALTER TABLE `form_bedroom_room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `form_kitchen_room`
--
ALTER TABLE `form_kitchen_room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `form_living_room`
--
ALTER TABLE `form_living_room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `form_bedroom_room`
--
ALTER TABLE `form_bedroom_room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `form_kitchen_room`
--
ALTER TABLE `form_kitchen_room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `form_living_room`
--
ALTER TABLE `form_living_room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `form_living_room`
--
ALTER TABLE `form_living_room`
  ADD CONSTRAINT `form_living_room_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
