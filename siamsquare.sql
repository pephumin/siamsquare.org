-- phpMyAdmin SQL Dump
-- version 4.5.3.1
-- http://www.phpmyadmin.net
--
-- Host: magenta.thaiweb.net
-- Generation Time: Sep 02, 2016 at 06:05 AM
-- Server version: 5.5.46
-- PHP Version: 5.5.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `siamsquare`
--

-- --------------------------------------------------------

--
-- Table structure for table `x_access`
--

CREATE TABLE `x_access` (
  `id` bigint(10) NOT NULL,
  `survey_id` bigint(10) NOT NULL DEFAULT '0',
  `realm` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `maxlogin` bigint(10) DEFAULT '0',
  `resume` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `navigate` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_access`
--

INSERT INTO `x_access` (`id`, `survey_id`, `realm`, `maxlogin`, `resume`, `navigate`) VALUES
(9, 5, 'Tulip', 2000, 'Y', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `x_conditions`
--

CREATE TABLE `x_conditions` (
  `id` bigint(10) NOT NULL,
  `survey_id` bigint(10) NOT NULL DEFAULT '0',
  `q1_id` bigint(10) NOT NULL,
  `q2_id` bigint(10) NOT NULL,
  `cond` bigint(10) NOT NULL,
  `cond_value` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_conditions`
--

INSERT INTO `x_conditions` (`id`, `survey_id`, `q1_id`, `q2_id`, `cond`, `cond_value`) VALUES
(33, 3, 88, 182, 0, 'Yes'),
(29, 5, 154, 117, 0, 'Mobile phone'),
(30, 5, 161, 158, 0, 'Married with kids'),
(31, 13, 264, 258, 0, 'Yes'),
(32, 12, 235, 234, 0, 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `x_designer`
--

CREATE TABLE `x_designer` (
  `id` bigint(10) NOT NULL,
  `username` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `auth` varchar(16) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'BASIC',
  `realm` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `fname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pdesign` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `pstatus` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `pdata` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `pall` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `pgroup` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `puser` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `disabled` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `changed` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `expiration` datetime NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_designer`
--

INSERT INTO `x_designer` (`id`, `username`, `password`, `auth`, `realm`, `fname`, `lname`, `email`, `pdesign`, `pstatus`, `pdata`, `pall`, `pgroup`, `puser`, `disabled`, `changed`, `expiration`) VALUES
(1, 'root', '*30E5E95623E97DE31D94F1BA068F0121DB6A3DBB', 'BASIC', 'superuser', 'SSQ', 'Superuser', 'webmaster@siamsquare.org', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'N', '2016-03-19 10:44:26', '0000-00-00 00:00:00'),
(2, 'phumin', '*30E5E95623E97DE31D94F1BA068F0121DB6A3DBB', 'BASIC', 'Tulip', 'Phumin', 'Chesdmethee', 'phumin@sawasdee.org', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'N', '2016-03-27 06:43:20', '0000-00-00 00:00:00'),
(3, 'siamsquare', '*30E5E95623E97DE31D94F1BA068F0121DB6A3DBB', 'BASIC', 'Tulip', 'Siam', 'Square', 'webmaster@siamsquare.org', 'Y', 'Y', 'Y', 'N', 'N', 'Y', 'N', '2016-03-20 22:16:18', '0000-00-00 00:00:00'),
(4, 'pe', '*30E5E95623E97DE31D94F1BA068F0121DB6A3DBB', 'BASIC', 'Lily', '', '', 'sinbad@bad.st', 'Y', 'Y', 'Y', 'N', 'N', 'N', 'N', '2016-03-05 06:39:21', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `x_question`
--

CREATE TABLE `x_question` (
  `id` bigint(10) NOT NULL,
  `survey_id` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type_id` bigint(10) NOT NULL DEFAULT '0',
  `result_id` bigint(10) DEFAULT NULL,
  `length` bigint(10) NOT NULL DEFAULT '0',
  `precise` bigint(10) NOT NULL DEFAULT '0',
  `position` bigint(10) NOT NULL DEFAULT '0',
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `content_th` longtext COLLATE utf8_unicode_ci NOT NULL,
  `required` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `deleted` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `dependquestion` bigint(10) NOT NULL,
  `dependchoice` bigint(10) NOT NULL,
  `public` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `ans_uniq` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `extra` longtext COLLATE utf8_unicode_ci,
  `extra_th` longtext COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_question`
--

INSERT INTO `x_question` (`id`, `survey_id`, `name`, `type_id`, `result_id`, `length`, `precise`, `position`, `content`, `content_th`, `required`, `deleted`, `dependquestion`, `dependchoice`, `public`, `ans_uniq`, `extra`, `extra_th`) VALUES
(1, 1, 'GENDER', 1, NULL, 0, 10, 0, 'Please record your gender.', 'บันทึกเพศ', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(2, 1, 'AGE', 9, NULL, 10, 0, 1, 'How old are you?', 'คุณอายุเท่าไร', 'Y', 'Y', 0, 0, 'Y', 'Y', NULL, NULL),
(3, 1, 'HH_INCOME', 1, NULL, 0, 10, 2, 'Which of these range best fits with your monthly household income?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(4, 1, 'GENDER', 4, NULL, 60, 5, 0, 'Please record your gender.', 'บันทึกเพศ', 'Y', 'Y', 0, 0, 'Y', 'Y', NULL, NULL),
(5, 1, 'BIRTHDAY', 8, NULL, 0, 0, 2, 'Please enter your date of birthday.', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(6, 1, 'BIRTHDAY', 8, NULL, 0, 0, 1, 'Please enter your date of birth. ', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(7, 1, 'break', 99, NULL, 0, 0, 3, 'break', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(8, 1, 'break', 99, NULL, 0, 0, 4, 'break', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(9, 1, 'TEMP', 5, NULL, 5, 0, 5, 'temporary', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(10, 2, 'LICENSE', 1, NULL, 0, 10, 0, 'Do you have a driving license?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(11, 2, 'LENGTH', 9, NULL, 2, 5, 0, 'How long have you had your driving license? Record no. of years.', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(12, 3, 'GENDER', 4, NULL, 60, 5, 0, 'Record your gender.', 'บันทึกเพศ', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(13, 3, 'AGE', 9, NULL, 10, 0, 1, 'How old are you?', 'คุณอายุเท่าไร', 'Y', 'N', 0, 0, 'Y', 'N', 'Years', 'ปี'),
(14, 3, 'ASSET_OWNED', 1, NULL, 0, 10, 2, 'Do you personally own each of these devices?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(157, 5, 'ATTRIBUTES', 6, NULL, 5, 0, 8, 'How do you like this concept on each of these attributes?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(156, 5, 'OVERALL_LIKING', 1, NULL, 5, 10, 7, 'What is your overall liking to this concept?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(155, 5, 'OVERALL_LIKING', 4, NULL, 60, 5, 7, 'What is your overall liking to this concept?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(19, 3, 'DEVICES_OWNED', 2, NULL, 5, 0, 3, 'Which of these devices do you personally own?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(20, 3, 'MOBILE_BRAND', 4, NULL, 60, 5, 4, 'What is the brand of mobile phone do you currently use?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(21, 3, 'break', 99, NULL, 0, 0, 2, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(22, 3, 'break', 99, NULL, 0, 0, 5, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(23, 3, 'MARITAL_STATUS', 4, NULL, 60, 5, 10, 'What is your current marital status?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(24, 3, 'CONCEPT_1', 100, NULL, 0, 0, 6, 'Show a new product concept\n\nBelow is a picture of the brand new product which has never been introduced to Thai market before. Please take a carefully look to this below picture, and you will asked to answer some questions regarding to your opinions to this commercial.\n\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" />', 'แสดงแนวความคิดผลิตภัณฑ์ใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นแนวความคิดผลิตภัณฑ์ใหม่ที่ยังไม่เคยมีวางจำหน่ายในประเทศไทยมาก่อน กรุณาอ่านแนวความคิดนี้อย่างละเอียด เพื่อใช้สำหรับตอบคำถามในส่วนนี้ โดยแสดงความคิดเห็นที่คุณมีต่อผลิตภัณฑ์ใหม่ในแนวความคิดนี้\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(25, 3, 'break', 99, NULL, 0, 0, 9, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(26, 3, 'OVERALL_LIKING', 8, NULL, 0, 0, 7, 'After having seen this product concept, how would you rate your overall liking to this new concept?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(154, 5, 'BRAND', 2, NULL, 0, 0, 4, 'What is the brand of mobile phone do you currently use?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(153, 2, 'break', 99, NULL, 0, 0, 10, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(152, 2, 'DEVICES', 2, NULL, 0, 0, 9, 'Do you have any of these devices?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(151, 2, 'INTERNET', 1, NULL, 0, 10, 8, 'How often do you access internet?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(150, 2, 'MARITAL_STATUS', 1, NULL, 0, 10, 11, 'Which of these statements best describes your current marital status?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(34, 3, 'OVERALL_LIKING', 4, NULL, 60, 5, 7, 'What is your overall liking to this concept?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(35, 3, 'ATTRIBUTES', 8, NULL, 0, 0, 8, 'How do you like this concept on each of these attributes?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(148, 2, 'break', 99, NULL, 0, 0, 7, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(149, 2, 'ATTRIBUTES', 6, NULL, 5, 0, 6, 'How much do you agree this commercial can communicate to you in terms of ...?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(147, 2, 'break', 99, NULL, 0, 0, 1, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(146, 2, 'ATTRIBUTES', 1, NULL, 5, 10, 5, 'How would you rate your overall level of interest to this commercial?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(145, 2, 'SOURCE_SEEN', 2, NULL, 0, 0, 4, 'Which media have you seen this commercial being advertised?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(144, 2, 'SEEN', 1, NULL, 0, 10, 3, 'Have you seen this commercial?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(143, 2, 'TVC', 100, NULL, 0, 0, 2, 'Show the new TVC\r\n\r\nBelow is the new commercial which has never been on-aired before. Please click the VDO itself in order to view its content. After you have viewed it, you will asked to answer some questions regarding to your opinions to this commercial.\r\n\r\n<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K2cYWfq--Nw" frameborder="0" allowfullscreen></iframe></div>\r\n\r\nPlease make sure your audio is enable.', 'แสดงโฆษณาชิ้นใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นโฆษณาชิ้นใหม่ที่ยังไม่เคยออกอากาศมาก่อน กรุณากดไปที่ VDO ด้านล่างนี้เพื่อให้แสดงโฆษณาใหม่ให้คุณดู​ และหลังจากที่คุณได้ดูแล้วคุณจะต้องตอบคำถามในส่วนนี้เพื่อแสดงถึงความคิดเห็นที่คุณมีต่อโฆษณาชิ้นนี้\r\n\r\n<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K2cYWfq--Nw" frameborder="0" allowfullscreen></iframe></div>\r\n\r\nกรุณาตรวจสอบให้แน่ใจว่าระบบเสียงทำงานในขณะที่คุณดูโฆษณานี้', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(142, 1, 'EDUCATION', 1, NULL, 0, 10, 9, 'What is your highest level of education?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(141, 1, 'ATTRIBUTE_RATING', 6, NULL, 5, 0, 7, 'How do you rate each of these product aspects based on 5-pt scale?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(140, 1, 'PI', 1, NULL, 0, 10, 6, 'How likely would you be to buy this product in this concept?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(139, 1, 'OVERALL_LIKE', 1, NULL, 5, 10, 5, 'How do you describe your overall liking to this concept?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(138, 1, 'INCOME', 1, NULL, 0, 10, 2, 'Which of these range best fits with your monthly household income?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(137, 1, 'GENDER', 1, NULL, 0, 10, 0, 'Please record your gender', 'บันทึกเพศ', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(136, 1, 'EDUCATION', 4, NULL, 60, 5, 8, 'What is your highest level of education?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(134, 1, 'break', 99, NULL, 0, 0, 8, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(135, 1, 'EDUCATION', 2, NULL, 0, 0, 9, 'What is your highest level of education?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(133, 1, 'break', 99, NULL, 0, 0, 3, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(132, 1, 'ATTRIBUTES', 8, NULL, 0, 0, 6, 'How do you rate each of these product aspects based on 5-pt scale?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(131, 1, 'PURCHASE_INTENTION', 4, NULL, 60, 5, 5, 'How likely would you be to buy this product in this concept?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(130, 1, 'OVERALL_LIKING', 4, NULL, 60, 5, 4, 'How do you describe your overall liking to this concept?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(129, 1, 'CONCEPT_A', 100, NULL, 0, 0, 4, 'Show the new product concept\r\n\r\nBelow is a picture of the brand new product which has never been introduced to Thai market before. Please take a carefully look to this below picture, and you will asked to answer some questions regarding to your opinions to this commercial.\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'แสดงแนวความคิดผลิตภัณฑ์ใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นแนวความคิดผลิตภัณฑ์ใหม่ที่ยังไม่เคยมีวางจำหน่ายในประเทศไทยมาก่อน กรุณาอ่านแนวความคิดนี้อย่างละเอียด เพื่อใช้สำหรับตอบคำถามในส่วนนี้ โดยแสดงความคิดเห็นที่คุณมีต่อผลิตภัณฑ์ใหม่ในแนวความคิดนี้\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(128, 1, 'HHINCOME', 4, NULL, 60, 5, 2, 'Which of these range best fits with your monthly household income?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(127, 1, 'GENDER', 4, NULL, 60, 5, 0, 'Please record your gender.', 'บันทึกเพศ', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(125, 5, 'KIDS', 1, NULL, 0, 10, 11, 'Do you have kids?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(126, 5, 'NO_KIDS', 10, NULL, 0, 0, 12, 'How many kids do you have?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(123, 5, 'break', 99, NULL, 0, 0, 9, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(124, 5, 'MARITAL_STATUS', 4, NULL, 60, 5, 10, 'What is your current marital status?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(121, 5, 'OVERALL_LIKING', 4, NULL, 60, 5, 7, 'What is your overall liking to this concept?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(122, 5, 'ATTRIBUTES', 8, NULL, 0, 0, 8, 'How do you like this concept on each of these attributes?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(118, 5, 'MOBILE_BRAND', 4, NULL, 60, 5, 4, 'What is the brand of mobile phone do you currently use?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(119, 5, 'break', 99, NULL, 0, 0, 5, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(120, 5, 'CONCEPT_1', 100, NULL, 0, 0, 6, 'Show the new product concept\r\n\r\nBelow is a picture of the brand new product which has never been introduced to Thai market before. Please take a carefully look to this below picture, and you will asked to answer some questions regarding to your opinions to this commercial.\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'แสดงแนวความคิดผลิตภัณฑ์ใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นแนวความคิดผลิตภัณฑ์ใหม่ที่ยังไม่เคยมีวางจำหน่ายในประเทศไทยมาก่อน กรุณาอ่านแนวความคิดนี้อย่างละเอียด เพื่อใช้สำหรับตอบคำถามในส่วนนี้ โดยแสดงความคิดเห็นที่คุณมีต่อผลิตภัณฑ์ใหม่ในแนวความคิดนี้\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(116, 5, 'break', 99, NULL, 0, 0, 2, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(117, 5, 'DEVICES_OWNED', 2, NULL, 0, 0, 3, 'Which of these devices do you personally own?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(115, 5, 'AGE', 9, NULL, 10, 0, 1, 'How old are you?', 'คุณอายุเท่าไร', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(114, 5, 'GENDER', 1, NULL, 0, 10, 0, 'Record your gender', 'บันทึกเพศ', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(113, 14, 'NO_KIDS', 9, NULL, 10, 0, 12, 'How many kids do you have?', '', 'Y', 'N', 0, 0, 'Y', 'N', 'Kids', 'คน'),
(112, 14, 'KIDS', 1, NULL, 0, 10, 11, 'Do you have kids?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(87, 3, 'KIDS', 1, NULL, 0, 10, 11, 'Do you have kids?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(88, 3, 'NO_KIDS', 9, NULL, 2, 0, 12, 'How many kids do you have?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(110, 14, 'break', 99, NULL, 0, 0, 9, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(111, 14, 'MARITAL_STATUS', 4, NULL, 60, 5, 9, 'What is your current marital status?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(109, 14, 'ATTRIBUTES', 8, NULL, 0, 0, 8, 'How do you like this concept on each of these attributes?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(108, 14, 'OVERALL_LIKING', 4, NULL, 60, 5, 7, 'What is your overall liking to this concept?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(107, 14, 'CONCEPT_1', 100, NULL, 0, 0, 6, 'Show the new product concept\r\n\r\nBelow is a picture of the brand new product which has never been introduced to Thai market before. Please take a carefully look to this below picture, and you will asked to answer some questions regarding to your opinions to this commercial.\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'แสดงแนวความคิดผลิตภัณฑ์ใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นแนวความคิดผลิตภัณฑ์ใหม่ที่ยังไม่เคยมีวางจำหน่ายในประเทศไทยมาก่อน กรุณาอ่านแนวความคิดนี้อย่างละเอียด เพื่อใช้สำหรับตอบคำถามในส่วนนี้ โดยแสดงความคิดเห็นที่คุณมีต่อผลิตภัณฑ์ใหม่ในแนวความคิดนี้\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(106, 14, 'break', 99, NULL, 0, 0, 5, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(105, 14, 'MOBILE_BRAND', 4, NULL, 60, 5, 4, 'What is the brand of mobile phone do you currently use?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(104, 14, 'DEVICES_OWNED', 2, NULL, 5, 0, 3, 'Which of these devices do you personally own?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(103, 14, 'break', 99, NULL, 0, 0, 2, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(102, 14, 'AGE', 9, NULL, 10, 0, 1, 'How old are you?', 'คุณอายุเท่าไร', 'Y', 'N', 0, 0, 'Y', 'N', 'Years', 'ปี'),
(101, 14, 'GENDER', 4, NULL, 60, 5, 0, 'Record your gender.', 'บันทึกเพศ', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(158, 5, 'CURRENT_MARITAL_STATUS', 1, NULL, 0, 10, 10, 'What is your current marital status?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(159, 5, 'KIDS', 9, NULL, 10, 0, 11, 'How many kids do you have?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(160, 5, 'EMAIL', 3, NULL, 20, 0, 12, 'Please record your email address.', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(161, 5, 'KIDS', 7, NULL, 0, 0, 11, 'How many kids do you have?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(162, 6, 'LENGTH', 9, NULL, 10, 0, 0, 'How long have you had your driving license? Record no. of years.', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(163, 6, 'break', 99, NULL, 0, 0, 1, 'break', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(164, 6, 'TVC', 100, NULL, 0, 0, 3, 'Show the new TVC\r\n\r\nBelow is the new commercial which has never been on-aired before. Please click the VDO itself in order to view its content. After you have viewed it, you will asked to answer some questions regarding to your opinions to this commercial.\r\n\r\n<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K2cYWfq--Nw" frameborder="0" allowfullscreen></iframe></div>\r\n\r\nPlease make sure your audio is enable.', 'แสดงโฆษณาชิ้นใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นโฆษณาชิ้นใหม่ที่ยังไม่เคยออกอากาศมาก่อน กรุณากดไปที่ VDO ด้านล่างนี้เพื่อให้แสดงโฆษณาใหม่ให้คุณดู​ และหลังจากที่คุณได้ดูแล้วคุณจะต้องตอบคำถามในส่วนนี้เพื่อแสดงถึงความคิดเห็นที่คุณมีต่อโฆษณาชิ้นนี้\r\n\r\n<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K2cYWfq--Nw" frameborder="0" allowfullscreen></iframe></div>\r\n\r\nกรุณาตรวจสอบให้แน่ใจว่าระบบเสียงทำงานในขณะที่คุณดูโฆษณานี้', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(165, 6, 'SEEN', 1, NULL, 0, 10, 4, 'Have you seen this commercial?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(166, 6, 'SOURCE_SEEN', 2, NULL, 0, 0, 5, 'Which media have you seen this commercial being advertised?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(167, 6, 'OVERALL_INTEREST', 1, NULL, 5, 10, 6, 'How would you rate your overall level of interest to this commercial?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(168, 6, 'ATTRIBUTES', 6, NULL, 5, 0, 7, 'How much do you agree this commercial can communicate to you in terms of ...?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(169, 6, 'break', 99, NULL, 0, 0, 8, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(170, 6, 'INTERNET', 1, NULL, 0, 10, 9, 'How often do you access internet?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(171, 6, 'DEVICES', 2, NULL, 0, 0, 10, 'Do you have any of these devices?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(172, 6, 'break', 99, NULL, 0, 0, 11, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(173, 6, 'MARITAL_STATUS', 1, NULL, 0, 10, 12, 'Which of these statements best describes your current marital status?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(174, 6, 'MBK_VISITED', 1, NULL, 0, 10, 0, 'Have you visited MBK in the past 3 months?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(175, 6, 'FREQUENCY', 1, NULL, 0, 10, 1, 'How often do you normally visit MBK?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(176, 6, 'break', 99, NULL, 0, 0, 2, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(177, 3, 'RECORD_GENDER', 1, NULL, 0, 10, 0, 'Record your gender', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(178, 3, 'BRAND_MOBILE_PHONE_CURRENTLY_U', 1, NULL, 0, 10, 4, 'What is the brand of mobile phone do you currently use?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(179, 3, 'OVERALL_LIKING_TO_THIS_CONCEPT', 1, NULL, 5, 10, 7, 'What is your overall liking to this concept?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(180, 3, 'LIKE_THIS_CONCEPT_ON_EACH_THES', 6, NULL, 5, 0, 8, 'How do you like this concept on each of these attributes?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(181, 3, 'CURRENT_MARITAL_STATUS', 1, NULL, 0, 10, 10, 'What is your current marital status?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(182, 3, 'HAVE_KIDS', 1, NULL, 0, 10, 11, 'Do you have kids?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(183, 7, 'AGE', 9, NULL, 10, 0, 0, 'How old are you? Please record number in the box.', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(184, 7, 'DESCRIBE_IN_3_SENTENCES', 4, NULL, 5, 5, 2, 'Please describe who you are in 3 sentences.', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(185, 7, 'break', 99, NULL, 0, 0, 1, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(186, 7, 'ACTIVITY', 9, NULL, 10, 0, 3, 'Which of these activities do you do the most often?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(187, 7, 'THESE_ACTIVITIES_MOST_OFTEN', 1, NULL, 0, 10, 3, 'Which of these activities do you do the most often?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(188, 8, 'GENDER', 1, NULL, 0, 10, 0, 'Please record your gender', 'บันทึกเพศ', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(189, 8, 'BIRTHDAY', 8, NULL, 0, 0, 1, 'Please enter your date of birth. ', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(190, 8, 'INCOME', 1, NULL, 0, 10, 2, 'Which of these range best fits with your monthly household income?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(191, 8, 'break', 99, NULL, 0, 0, 3, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(192, 8, 'CONCEPT_A', 100, NULL, 0, 0, 4, 'Show the new product concept\r\n\r\nBelow is a picture of the brand new product which has never been introduced to Thai market before. Please take a carefully look to this below picture, and you will asked to answer some questions regarding to your opinions to this commercial.\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'แสดงแนวความคิดผลิตภัณฑ์ใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นแนวความคิดผลิตภัณฑ์ใหม่ที่ยังไม่เคยมีวางจำหน่ายในประเทศไทยมาก่อน กรุณาอ่านแนวความคิดนี้อย่างละเอียด เพื่อใช้สำหรับตอบคำถามในส่วนนี้ โดยแสดงความคิดเห็นที่คุณมีต่อผลิตภัณฑ์ใหม่ในแนวความคิดนี้\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(193, 8, 'OVERALL_LIKE', 1, NULL, 5, 10, 5, 'How do you describe your overall liking to this concept?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(194, 8, 'PI', 1, NULL, 0, 10, 6, 'How likely would you be to buy this product in this concept?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(195, 8, 'ATTRIBUTE_RATING', 6, NULL, 5, 0, 7, 'How do you rate each of these product aspects based on 5-pt scale?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(196, 8, 'break', 99, NULL, 0, 0, 8, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(197, 8, 'EDUCATION', 1, NULL, 0, 10, 9, 'What is your highest level of education?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(198, 9, 'GENDER', 1, NULL, 0, 10, 0, 'Please record your gender', 'บันทึกเพศ', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(199, 9, 'BIRTHDAY', 8, NULL, 0, 0, 1, 'Please enter your date of birth. ', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(200, 9, 'INCOME', 1, NULL, 0, 10, 2, 'Which of these range best fits with your monthly household income?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(201, 9, 'break', 99, NULL, 0, 0, 3, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(202, 9, 'CONCEPT_A', 100, NULL, 0, 0, 4, 'Show the new product concept\r\n\r\nBelow is a picture of the brand new product which has never been introduced to Thai market before. Please take a carefully look to this below picture, and you will asked to answer some questions regarding to your opinions to this commercial.\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'แสดงแนวความคิดผลิตภัณฑ์ใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นแนวความคิดผลิตภัณฑ์ใหม่ที่ยังไม่เคยมีวางจำหน่ายในประเทศไทยมาก่อน กรุณาอ่านแนวความคิดนี้อย่างละเอียด เพื่อใช้สำหรับตอบคำถามในส่วนนี้ โดยแสดงความคิดเห็นที่คุณมีต่อผลิตภัณฑ์ใหม่ในแนวความคิดนี้\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(203, 9, 'OVERALL_LIKE', 1, NULL, 5, 10, 5, 'How do you describe your overall liking to this concept?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(204, 9, 'PI', 1, NULL, 0, 10, 6, 'How likely would you be to buy this product in this concept?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(205, 9, 'ATTRIBUTE_RATING', 6, NULL, 5, 0, 7, 'How do you rate each of these product aspects based on 5-pt scale?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(206, 9, 'break', 99, NULL, 0, 0, 8, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(207, 9, 'EDUCATION', 1, NULL, 0, 10, 9, 'What is your highest level of education?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(208, 10, 'MBK_VISITED', 1, NULL, 0, 10, 0, 'Have you visited MBK in the past 3 months?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(209, 10, 'FREQUENCY', 1, NULL, 0, 10, 1, 'How often do you normally visit MBK?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(210, 10, 'break', 99, NULL, 0, 0, 2, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(211, 10, 'TVC', 100, NULL, 0, 0, 3, 'Show the new TVC\r\n\r\nBelow is the new commercial which has never been on-aired before. Please click the VDO itself in order to view its content. After you have viewed it, you will asked to answer some questions regarding to your opinions to this commercial.\r\n\r\n<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K2cYWfq--Nw" frameborder="0" allowfullscreen></iframe></div>\r\n\r\nPlease make sure your audio is enable.', 'แสดงโฆษณาชิ้นใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นโฆษณาชิ้นใหม่ที่ยังไม่เคยออกอากาศมาก่อน กรุณากดไปที่ VDO ด้านล่างนี้เพื่อให้แสดงโฆษณาใหม่ให้คุณดู​ และหลังจากที่คุณได้ดูแล้วคุณจะต้องตอบคำถามในส่วนนี้เพื่อแสดงถึงความคิดเห็นที่คุณมีต่อโฆษณาชิ้นนี้\r\n\r\n<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K2cYWfq--Nw" frameborder="0" allowfullscreen></iframe></div>\r\n\r\nกรุณาตรวจสอบให้แน่ใจว่าระบบเสียงทำงานในขณะที่คุณดูโฆษณานี้', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(212, 10, 'SEEN', 1, NULL, 0, 10, 4, 'Have you seen this commercial?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(213, 10, 'SOURCE_SEEN', 2, NULL, 0, 0, 5, 'Which media have you seen this commercial being advertised?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(214, 10, 'OVERALL_INTEREST', 1, NULL, 5, 10, 6, 'How would you rate your overall level of interest to this commercial?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(215, 10, 'ATTRIBUTES', 6, NULL, 5, 0, 7, 'How much do you agree this commercial can communicate to you in terms of ...?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(216, 10, 'break', 99, NULL, 0, 0, 8, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(217, 10, 'INTERNET', 1, NULL, 0, 10, 9, 'How often do you access internet?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(218, 10, 'DEVICES', 2, NULL, 0, 0, 10, 'Do you have any of these devices?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(219, 10, 'break', 99, NULL, 0, 0, 11, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(220, 10, 'MARITAL_STATUS', 1, NULL, 0, 10, 12, 'Which of these statements best describes your current marital status?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(221, 11, 'MBK_VISITED', 1, NULL, 0, 10, 0, 'Have you visited MBK in the past 3 months?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(222, 11, 'FREQUENCY', 1, NULL, 0, 10, 1, 'How often do you normally visit MBK?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(223, 11, 'break', 99, NULL, 0, 0, 2, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(224, 11, 'TVC', 100, NULL, 0, 0, 3, 'Show the new TVC\r\n\r\nBelow is the new commercial which has never been on-aired before. Please click the VDO itself in order to view its content. After you have viewed it, you will asked to answer some questions regarding to your opinions to this commercial.\r\n\r\n<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K2cYWfq--Nw" frameborder="0" allowfullscreen></iframe></div>\r\n\r\nPlease make sure your audio is enable.', 'แสดงโฆษณาชิ้นใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นโฆษณาชิ้นใหม่ที่ยังไม่เคยออกอากาศมาก่อน กรุณากดไปที่ VDO ด้านล่างนี้เพื่อให้แสดงโฆษณาใหม่ให้คุณดู​ และหลังจากที่คุณได้ดูแล้วคุณจะต้องตอบคำถามในส่วนนี้เพื่อแสดงถึงความคิดเห็นที่คุณมีต่อโฆษณาชิ้นนี้\r\n\r\n<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K2cYWfq--Nw" frameborder="0" allowfullscreen></iframe></div>\r\n\r\nกรุณาตรวจสอบให้แน่ใจว่าระบบเสียงทำงานในขณะที่คุณดูโฆษณานี้', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(225, 11, 'SEEN', 1, NULL, 0, 10, 4, 'Have you seen this commercial?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(226, 11, 'SOURCE_SEEN', 2, NULL, 0, 0, 5, 'Which media have you seen this commercial being advertised?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(227, 11, 'OVERALL_INTEREST', 1, NULL, 5, 10, 6, 'How would you rate your overall level of interest to this commercial?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(228, 11, 'ATTRIBUTES', 6, NULL, 5, 0, 7, 'How much do you agree this commercial can communicate to you in terms of ...?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(229, 11, 'break', 99, NULL, 0, 0, 8, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(230, 11, 'INTERNET', 1, NULL, 0, 10, 9, 'How often do you access internet?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(231, 11, 'DEVICES', 2, NULL, 0, 0, 10, 'Do you have any of these devices?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(232, 11, 'break', 99, NULL, 0, 0, 11, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(233, 11, 'MARITAL_STATUS', 1, NULL, 0, 10, 12, 'Which of these statements best describes your current marital status?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(234, 12, 'MBK_VISITED', 1, NULL, 0, 10, 2, 'Have you visited MBK in the past 3 months?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(235, 12, 'FREQUENCY', 1, NULL, 0, 10, 3, 'How often do you normally visit MBK?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(236, 12, 'break', 99, NULL, 0, 0, 4, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(237, 12, 'TVC', 100, NULL, 0, 0, 5, 'Show the new TVC\r\n\r\nBelow is the new commercial which has never been on-aired before. Please click the VDO itself in order to view its content. After you have viewed it, you will asked to answer some questions regarding to your opinions to this commercial.\r\n\r\n<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K2cYWfq--Nw" frameborder="0" allowfullscreen></iframe></div>\r\n\r\nPlease make sure your audio is enable.', 'แสดงโฆษณาชิ้นใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นโฆษณาชิ้นใหม่ที่ยังไม่เคยออกอากาศมาก่อน กรุณากดไปที่ VDO ด้านล่างนี้เพื่อให้แสดงโฆษณาใหม่ให้คุณดู​ และหลังจากที่คุณได้ดูแล้วคุณจะต้องตอบคำถามในส่วนนี้เพื่อแสดงถึงความคิดเห็นที่คุณมีต่อโฆษณาชิ้นนี้\r\n\r\n<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K2cYWfq--Nw" frameborder="0" allowfullscreen></iframe></div>\r\n\r\nกรุณาตรวจสอบให้แน่ใจว่าระบบเสียงทำงานในขณะที่คุณดูโฆษณานี้', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(238, 12, 'SEEN', 1, NULL, 0, 10, 6, 'Have you seen this commercial?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(239, 12, 'SOURCE_SEEN', 2, NULL, 0, 0, 7, 'Which media have you seen this commercial being advertised?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(240, 12, 'OVERALL_INTEREST', 1, NULL, 5, 10, 9, 'How would you rate your overall level of interest to this commercial?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(241, 12, 'ATTRIBUTES', 6, NULL, 5, 0, 8, 'How much do you agree this commercial can communicate to you in terms of ...?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(242, 12, 'break', 99, NULL, 0, 0, 10, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(243, 12, 'INTERNET', 1, NULL, 0, 10, 11, 'How often do you access internet?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(244, 12, 'DEVICES', 2, NULL, 0, 0, 12, 'Do you have any of these devices?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(245, 12, 'break', 99, NULL, 0, 0, 13, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(246, 12, 'MARITAL_STATUS', 1, NULL, 0, 10, 14, 'Which of these statements best describes your current marital status?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(247, 13, 'RECORD_GENDER', 1, NULL, 0, 10, 0, 'Record your gender', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(248, 13, 'AGE', 9, NULL, 10, 0, 1, 'How old are you?', 'คุณอายุเท่าไร', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(249, 13, 'break', 99, NULL, 0, 0, 2, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(250, 13, 'DEVICES_OWNED', 2, NULL, 5, 0, 3, 'Which of these devices do you personally own?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(251, 13, 'BRAND_MOBILE_PHONE_CURRENTLY_U', 1, NULL, 0, 10, 4, 'What is the brand of mobile phone do you currently use?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(252, 13, 'break', 99, NULL, 0, 0, 5, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(253, 13, 'CONCEPT_1', 100, NULL, 0, 0, 6, 'Show the new product concept\r\n\r\nBelow is a picture of the brand new product which has never been introduced to Thai market before. Please take a carefully look to this below picture, and you will asked to answer some questions regarding to your opinions to this commercial.\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'แสดงแนวความคิดผลิตภัณฑ์ใหม่ให้ผู้ให้สัมภาษณ์ดู\r\n\r\nต่อไปนี้เป็นแนวความคิดผลิตภัณฑ์ใหม่ที่ยังไม่เคยมีวางจำหน่ายในประเทศไทยมาก่อน กรุณาอ่านแนวความคิดนี้อย่างละเอียด เพื่อใช้สำหรับตอบคำถามในส่วนนี้ โดยแสดงความคิดเห็นที่คุณมีต่อผลิตภัณฑ์ใหม่ในแนวความคิดนี้\r\n\r\n<img src="http://www.caranddriver.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-429x262.jpg" class="img-responsive">', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(254, 13, 'OVERALL_LIKING_TO_THIS_CONCEPT', 1, NULL, 5, 10, 7, 'What is your overall liking to this concept?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(255, 13, 'LIKE_THIS_CONCEPT_ON_EACH_THES', 6, NULL, 5, 0, 8, 'How do you like this concept on each of these attributes?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(256, 13, 'break', 99, NULL, 0, 0, 9, 'break', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(257, 13, 'CURRENT_MARITAL_STATUS', 1, NULL, 0, 10, 10, 'What is your current marital status?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(258, 13, 'HAVE_KIDS', 1, NULL, 0, 10, 11, 'Do you have kids?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(259, 13, 'NO_KIDS', 9, NULL, 2, 0, 12, 'How many kids do you have?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(260, 12, 'SPENDING', 1, NULL, 0, 10, 1, 'How much do you spend on shopping each month by average?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(261, 12, 'MOBILE', 2, NULL, 0, 0, 0, 'Which mobile operators do you currently use?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(262, 13, 'LIKE_SOAP', 2, NULL, 0, 0, 13, 'How do you like your soap?', '', 'Y', 'Y', 0, 0, 'Y', 'N', NULL, NULL),
(263, 13, 'LIKE_STEAK', 2, NULL, 0, 0, 13, 'How do you like your steak?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(264, 13, 'MANY_KIDS_HAVE', 7, NULL, 0, 0, 12, 'How many kids do you have?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(265, 14, 'RECORD_GENDER', 1, NULL, 0, 10, 0, 'Record your gender', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(266, 14, 'OVERALL_LIKING_TO_THIS_CONCEPT', 1, NULL, 0, 10, 7, 'What is your overall liking to this concept?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(267, 14, 'ATTRIBUTES', 6, NULL, 5, 0, 8, 'How do you like this concept on each of these attributes?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(268, 14, 'CURRENT_MARITAL_STATUS', 1, NULL, 0, 10, 10, 'What is your current marital status?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(269, 14, 'BRAND_MOBILE_PHONE_CURRENTLY_U', 1, NULL, 0, 10, 4, 'What is the brand of mobile phone do you currently use?', '', 'Y', 'N', 0, 0, 'Y', 'N', NULL, NULL),
(270, 14, 'CARS', 7, NULL, 0, 0, 13, 'How many cars do you have?', '', 'Y', 'N', 0, 0, 'Y', 'N', 'Cars', 'คัน');

-- --------------------------------------------------------

--
-- Table structure for table `x_question_choice`
--

CREATE TABLE `x_question_choice` (
  `id` bigint(10) NOT NULL,
  `question_id` bigint(10) NOT NULL DEFAULT '0',
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `content_th` longtext COLLATE utf8_unicode_ci,
  `value` longtext COLLATE utf8_unicode_ci,
  `feedback` longtext COLLATE utf8_unicode_ci,
  `credit` longtext COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_question_choice`
--

INSERT INTO `x_question_choice` (`id`, `question_id`, `content`, `content_th`, `value`, `feedback`, `credit`) VALUES
(7, 4, 'Male', 'ชาย', NULL, NULL, NULL),
(8, 3, 'Below 20,000 Baht', '', NULL, NULL, NULL),
(9, 3, '20,000-50,000 Baht', '', NULL, NULL, NULL),
(10, 4, 'Female', 'หญิง', NULL, NULL, NULL),
(11, 3, '50,000-80,000 Baht', '', NULL, NULL, NULL),
(12, 3, '80,000-100,000 Baht', '', NULL, NULL, NULL),
(13, 3, 'More than 100,000 Baht', '', NULL, NULL, NULL),
(14, 9, 'One', '', NULL, NULL, NULL),
(15, 9, 'Two', '', NULL, NULL, NULL),
(16, 9, 'Three', '', NULL, NULL, NULL),
(17, 9, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(18, 12, 'Male', 'ชาย', NULL, NULL, NULL),
(19, 12, 'Female', 'หญิง', NULL, NULL, NULL),
(20, 14, 'Laptop computer', '', NULL, NULL, NULL),
(21, 14, 'Desktop computer', '', NULL, NULL, NULL),
(22, 14, 'Tablet', '', NULL, NULL, NULL),
(23, 14, 'Mobile phone', '', NULL, NULL, NULL),
(24, 14, '!others Other (please specify):', '', NULL, NULL, NULL),
(295, 141, 'Colour', '', NULL, NULL, NULL),
(294, 141, 'Functionality', '', NULL, NULL, NULL),
(293, 141, 'Aroma', '', NULL, NULL, NULL),
(292, 141, 'Size', '', NULL, NULL, NULL),
(291, 140, 'Definitely would not buy', '', NULL, NULL, NULL),
(290, 140, 'Probably would not buy', '', NULL, NULL, NULL),
(289, 140, 'Not sure', '', NULL, NULL, NULL),
(288, 140, 'Probably would buy', '', NULL, NULL, NULL),
(287, 140, 'Definitely would buy', '', NULL, NULL, NULL),
(286, 139, '1', '', NULL, NULL, NULL),
(285, 139, '2', '', NULL, NULL, NULL),
(284, 139, '3', '', NULL, NULL, NULL),
(38, 19, 'Mobile phone', '', NULL, NULL, NULL),
(39, 19, 'Tablet', '', NULL, NULL, NULL),
(40, 19, 'Laptop computer', '', NULL, NULL, NULL),
(41, 19, 'Desktop computer', '', NULL, NULL, NULL),
(676, 19, 'None of the above', 'ไม่มีที่กล่าวข้างต้น', NULL, NULL, NULL),
(44, 20, 'Apple', '', NULL, NULL, NULL),
(45, 20, 'Samsung', '', NULL, NULL, NULL),
(46, 20, 'LG', '', NULL, NULL, NULL),
(47, 20, '!others Other (please specify):', '', NULL, NULL, NULL),
(49, 20, 'Nokia', '', NULL, NULL, NULL),
(50, 20, '!others Other (please specify):', '', NULL, NULL, NULL),
(51, 23, 'Single', '', NULL, NULL, NULL),
(52, 23, 'Married without kids', '', NULL, NULL, NULL),
(53, 23, 'Married with kids', '', NULL, NULL, NULL),
(54, 23, 'Divorced/ widow', '', NULL, NULL, NULL),
(282, 139, '5', '', NULL, NULL, NULL),
(283, 139, '4', '', NULL, NULL, NULL),
(281, 139, '6', '', NULL, NULL, NULL),
(280, 139, '7', '', NULL, NULL, NULL),
(278, 138, 'SES-D', 'สถานะภาพทางสังคม D', NULL, NULL, NULL),
(279, 138, 'SES-E', 'สถานะภาพทางสังคม E', NULL, NULL, NULL),
(277, 138, 'SES-C', 'สถานะภาพทางสังคม C', NULL, NULL, NULL),
(276, 138, 'SES-B', 'สถานะภาพทางสังคม B', NULL, NULL, NULL),
(275, 138, 'SES-A', 'สถานะภาพทางสังคม A', NULL, NULL, NULL),
(62, 34, 'Extremely like it', '', NULL, NULL, NULL),
(63, 34, 'Like it a lot', '', NULL, NULL, NULL),
(64, 34, 'Like it somewhat', '', NULL, NULL, NULL),
(65, 34, 'Dislike it somewhat', '', NULL, NULL, NULL),
(66, 34, 'Dislikes it a lot', '', NULL, NULL, NULL),
(67, 34, 'Extremely dislike it', '', NULL, NULL, NULL),
(68, 35, 'Size', '', NULL, NULL, NULL),
(69, 35, 'Colour', '', NULL, NULL, NULL),
(70, 35, 'Name', '', NULL, NULL, NULL),
(71, 35, 'Benefit A', '', NULL, NULL, NULL),
(72, 35, 'Benefit B', '', NULL, NULL, NULL),
(73, 35, 'Benefit C', '', NULL, NULL, NULL),
(74, 35, 'Benefit D', '', NULL, NULL, NULL),
(274, 137, 'Female', 'หญิง', NULL, NULL, NULL),
(273, 137, 'Male', 'ชาย', NULL, NULL, NULL),
(272, 136, 'Master\'s degree or higher', '', NULL, NULL, NULL),
(271, 136, 'Bachelor\'s degree', '', NULL, NULL, NULL),
(270, 136, 'Poly-tech or collage', '', NULL, NULL, NULL),
(269, 136, 'High school or less', '', NULL, NULL, NULL),
(268, 132, 'Functionality', '', NULL, NULL, NULL),
(267, 132, 'Width', '', NULL, NULL, NULL),
(265, 132, 'Size', '', NULL, NULL, NULL),
(266, 132, 'Durability', '', NULL, NULL, NULL),
(264, 132, 'Colour', '', NULL, NULL, NULL),
(263, 131, 'Definitely would not buy', '', NULL, NULL, NULL),
(262, 131, 'Probably would not buy', '', NULL, NULL, NULL),
(261, 131, 'Not sure', '', NULL, NULL, NULL),
(260, 131, 'Probably would buy', '', NULL, NULL, NULL),
(259, 131, 'Definitely would buy', '', NULL, NULL, NULL),
(258, 130, 'Dislike a lot', '', NULL, NULL, NULL),
(257, 130, 'Dislike it', '', NULL, NULL, NULL),
(256, 130, 'Dislike it somewhat', '', NULL, NULL, NULL),
(254, 130, 'Like it', '', NULL, NULL, NULL),
(255, 130, 'Like it somewhat', '', NULL, NULL, NULL),
(253, 130, 'Like it a lot', '', NULL, NULL, NULL),
(252, 128, 'SES-E', '', NULL, NULL, NULL),
(250, 128, 'SES-C', '', NULL, NULL, NULL),
(251, 128, 'SES-D', '', NULL, NULL, NULL),
(249, 128, 'SES-B', '', NULL, NULL, NULL),
(248, 128, 'SES-A', '', NULL, NULL, NULL),
(247, 127, 'Female', '', NULL, NULL, NULL),
(246, 127, 'Male', '', NULL, NULL, NULL),
(245, 124, 'Divorced/ widow', '', NULL, NULL, NULL),
(244, 124, 'Married with kids', '', NULL, NULL, NULL),
(243, 124, 'Married without kids', '', NULL, NULL, NULL),
(242, 124, 'Single', '', NULL, NULL, NULL),
(241, 122, 'Benefit D', '', NULL, NULL, NULL),
(240, 122, 'Benefit C', '', NULL, NULL, NULL),
(239, 122, 'Benefit B', '', NULL, NULL, NULL),
(238, 122, 'Benefit A', '', NULL, NULL, NULL),
(237, 122, 'Name', '', NULL, NULL, NULL),
(236, 122, 'Colour', '', NULL, NULL, NULL),
(235, 122, 'Size', '', NULL, NULL, NULL),
(234, 121, 'Extremely dislike it', '', NULL, NULL, NULL),
(233, 121, 'Dislikes it a lot', '', NULL, NULL, NULL),
(232, 121, 'Dislike it somewhat', '', NULL, NULL, NULL),
(231, 121, 'Like it somewhat', '', NULL, NULL, NULL),
(229, 121, 'Extremely like it', '', NULL, NULL, NULL),
(230, 121, 'Like it a lot', '', NULL, NULL, NULL),
(228, 118, '!others Other (please specify):', '', NULL, NULL, NULL),
(227, 118, 'Nokia', '', NULL, NULL, NULL),
(226, 118, '!others Other (please specify):', '', NULL, NULL, NULL),
(225, 118, 'LG', '', NULL, NULL, NULL),
(224, 118, 'Samsung', '', NULL, NULL, NULL),
(223, 118, 'Apple', '', NULL, NULL, NULL),
(222, 117, 'None of the above', '', NULL, NULL, NULL),
(221, 117, '!others Other (please specify):', '', NULL, NULL, NULL),
(220, 117, 'Desktop computer', '', NULL, NULL, NULL),
(219, 117, 'Laptop computer', '', NULL, NULL, NULL),
(218, 117, 'Tablet', '', NULL, NULL, NULL),
(216, 114, 'Female', '', NULL, NULL, NULL),
(217, 117, 'Mobile phone', '', NULL, NULL, NULL),
(215, 114, 'Male', '', NULL, NULL, NULL),
(214, 111, 'Divorced/ widow', '', NULL, NULL, NULL),
(213, 111, 'Married with kids', '', NULL, NULL, NULL),
(212, 111, 'Married without kids', '', NULL, NULL, NULL),
(211, 111, 'Single', '', NULL, NULL, NULL),
(210, 109, 'Benefit D', '', NULL, NULL, NULL),
(209, 109, 'Benefit C', '', NULL, NULL, NULL),
(208, 109, 'Benefit B', '', NULL, NULL, NULL),
(207, 109, 'Benefit A', '', NULL, NULL, NULL),
(206, 109, 'Name', '', NULL, NULL, NULL),
(205, 109, 'Colour', '', NULL, NULL, NULL),
(204, 109, 'Size', '', NULL, NULL, NULL),
(202, 108, 'Dislikes it a lot', '', NULL, NULL, NULL),
(203, 108, 'Extremely dislike it', '', NULL, NULL, NULL),
(201, 108, 'Dislike it somewhat', '', NULL, NULL, NULL),
(200, 108, 'Like it somewhat', '', NULL, NULL, NULL),
(199, 108, 'Like it a lot', '', NULL, NULL, NULL),
(197, 105, '!others Other (please specify):', '', NULL, NULL, NULL),
(198, 108, 'Extremely like it', '', NULL, NULL, NULL),
(196, 105, 'Nokia', '', NULL, NULL, NULL),
(195, 105, '!others Other (please specify):', '', NULL, NULL, NULL),
(194, 105, 'LG', '', NULL, NULL, NULL),
(193, 105, 'Samsung', '', NULL, NULL, NULL),
(192, 105, 'Apple', '', NULL, NULL, NULL),
(191, 104, 'None of the above', 'ไม่มีที่กล่าวข้างต้น', NULL, NULL, NULL),
(190, 104, '!others Other (please specify):', '', NULL, NULL, NULL),
(189, 104, 'Desktop computer', '', NULL, NULL, NULL),
(188, 104, 'Laptop computer', '', NULL, NULL, NULL),
(187, 104, 'Tablet', '', NULL, NULL, NULL),
(186, 104, 'Mobile phone', '', NULL, NULL, NULL),
(185, 101, 'Female', '', NULL, NULL, NULL),
(184, 101, 'Male', '', NULL, NULL, NULL),
(296, 141, 'Price', '', NULL, NULL, NULL),
(297, 142, 'High school or less', '', NULL, NULL, NULL),
(298, 142, 'Poly-tech or collage', '', NULL, NULL, NULL),
(299, 142, 'Bachelor\'s degree', '', NULL, NULL, NULL),
(300, 142, 'Master\'s degree or higher', '', NULL, NULL, NULL),
(301, 10, 'Yes', '', NULL, NULL, NULL),
(302, 10, 'No', '', NULL, NULL, NULL),
(303, 144, 'Yes', '', NULL, NULL, NULL),
(304, 144, 'No', '', NULL, NULL, NULL),
(305, 145, 'Free TV', '', NULL, NULL, NULL),
(306, 145, 'Cable TV', '', NULL, NULL, NULL),
(307, 145, 'On-demand TV', '', NULL, NULL, NULL),
(308, 145, 'Internet e.g. YouTube', '', NULL, NULL, NULL),
(309, 145, '!others Other (please specify):', '', NULL, NULL, NULL),
(310, 146, '7=Very interested', '', NULL, NULL, NULL),
(311, 146, '6', '', NULL, NULL, NULL),
(312, 146, '5', '', NULL, NULL, NULL),
(313, 146, '4', '', NULL, NULL, NULL),
(314, 146, '3', '', NULL, NULL, NULL),
(315, 146, '2', '', NULL, NULL, NULL),
(316, 146, '1=Not at all interested', '', NULL, NULL, NULL),
(317, 149, 'Clear message', '', NULL, NULL, NULL),
(318, 149, 'Informative', '', NULL, NULL, NULL),
(319, 149, 'Memorable', '', NULL, NULL, NULL),
(320, 149, 'Fun', '', NULL, NULL, NULL),
(321, 149, 'Boring', '', NULL, NULL, NULL),
(322, 150, 'Single', '', NULL, NULL, NULL),
(323, 150, 'Married with kids', '', NULL, NULL, NULL),
(324, 150, 'Married without kids', '', NULL, NULL, NULL),
(325, 150, 'Divorced/ widow', '', NULL, NULL, NULL),
(326, 151, 'All the time', '', NULL, NULL, NULL),
(327, 151, 'Most of the time', '', NULL, NULL, NULL),
(328, 151, 'Occasionally', '', NULL, NULL, NULL),
(329, 151, 'Rarely', '', NULL, NULL, NULL),
(330, 152, 'Smart phone', '', NULL, NULL, NULL),
(331, 152, 'Tablets', '', NULL, NULL, NULL),
(332, 152, 'Laptop computer', '', NULL, NULL, NULL),
(333, 152, 'Desktop computer', '', NULL, NULL, NULL),
(334, 154, 'Apple', '', NULL, NULL, NULL),
(335, 154, 'Samsung', '', NULL, NULL, NULL),
(336, 154, 'LG', '', NULL, NULL, NULL),
(337, 154, '!others Other (please specify):', '', NULL, NULL, NULL),
(338, 156, '5', '', NULL, NULL, NULL),
(339, 156, '4', '', NULL, NULL, NULL),
(340, 156, '3', '', NULL, NULL, NULL),
(341, 157, 'Size', '', NULL, NULL, NULL),
(342, 157, 'Function', '', NULL, NULL, NULL),
(343, 157, 'Speed', '', NULL, NULL, NULL),
(344, 157, 'Colour', '', NULL, NULL, NULL),
(345, 157, 'After-sales service', '', NULL, NULL, NULL),
(346, 158, 'Single', '', NULL, NULL, NULL),
(347, 158, 'Married with kids', '', NULL, NULL, NULL),
(348, 158, 'Married without kids', '', NULL, NULL, NULL),
(349, 158, 'Divorced/ widow', '', NULL, NULL, NULL),
(350, 161, 'One', '', NULL, NULL, NULL),
(351, 161, 'Two', '', NULL, NULL, NULL),
(352, 161, 'Three', '', NULL, NULL, NULL),
(353, 161, 'More than three', '', NULL, NULL, NULL),
(354, 165, 'Yes', '', NULL, NULL, NULL),
(355, 165, 'No', '', NULL, NULL, NULL),
(356, 166, 'Free TV', '', NULL, NULL, NULL),
(357, 166, 'Cable TV', '', NULL, NULL, NULL),
(358, 166, 'On-demand TV', '', NULL, NULL, NULL),
(359, 166, 'Internet e.g. YouTube', '', NULL, NULL, NULL),
(360, 166, '!others Other (please specify):', '', NULL, NULL, NULL),
(361, 167, '7=Very interested', '', NULL, NULL, NULL),
(362, 167, '6', '', NULL, NULL, NULL),
(363, 167, '5', '', NULL, NULL, NULL),
(364, 167, '4', '', NULL, NULL, NULL),
(365, 167, '3', '', NULL, NULL, NULL),
(366, 167, '2', '', NULL, NULL, NULL),
(367, 167, '1=Not at all interested', '', NULL, NULL, NULL),
(368, 168, 'Clear message', '', NULL, NULL, NULL),
(369, 168, 'Informative', '', NULL, NULL, NULL),
(370, 168, 'Memorable', '', NULL, NULL, NULL),
(371, 168, 'Fun', '', NULL, NULL, NULL),
(372, 168, 'Boring', '', NULL, NULL, NULL),
(373, 170, 'All the time', '', NULL, NULL, NULL),
(374, 170, 'Most of the time', '', NULL, NULL, NULL),
(375, 170, 'Occasionally', '', NULL, NULL, NULL),
(376, 170, 'Rarely', '', NULL, NULL, NULL),
(377, 171, 'Smart phone', '', NULL, NULL, NULL),
(378, 171, 'Tablets', '', NULL, NULL, NULL),
(379, 171, 'Laptop computer', '', NULL, NULL, NULL),
(380, 171, 'Desktop computer', '', NULL, NULL, NULL),
(381, 173, 'Single', '', NULL, NULL, NULL),
(382, 173, 'Married with kids', '', NULL, NULL, NULL),
(383, 173, 'Married without kids', '', NULL, NULL, NULL),
(384, 173, 'Divorced/ widow', '', NULL, NULL, NULL),
(385, 171, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(386, 174, 'Yes', '', NULL, NULL, NULL),
(387, 174, 'No', '', NULL, NULL, NULL),
(388, 174, 'Cannot remember', '', NULL, NULL, NULL),
(389, 175, 'Daily', '', NULL, NULL, NULL),
(390, 175, 'Weekly', '', NULL, NULL, NULL),
(391, 175, 'Monthly', '', NULL, NULL, NULL),
(392, 175, 'Less often', '', NULL, NULL, NULL),
(393, 152, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(394, 177, 'Male', 'ผู้ชาย', NULL, NULL, NULL),
(395, 177, 'Female', 'ผู้หญิง', NULL, NULL, NULL),
(396, 178, 'Apple iPhone', '', NULL, NULL, NULL),
(397, 178, 'Samsung', '', NULL, NULL, NULL),
(398, 178, 'LG', '', NULL, NULL, NULL),
(399, 178, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(400, 179, '5', '', NULL, NULL, NULL),
(401, 179, '4', '', NULL, NULL, NULL),
(402, 179, '3', '', NULL, NULL, NULL),
(403, 179, '2', '', NULL, NULL, NULL),
(404, 179, '1', '', NULL, NULL, NULL),
(405, 180, 'Colour', '', NULL, NULL, NULL),
(406, 180, 'Size', '', NULL, NULL, NULL),
(407, 180, 'Flavour', '', NULL, NULL, NULL),
(408, 180, 'Price', '', NULL, NULL, NULL),
(409, 181, 'Single', '', NULL, NULL, NULL),
(410, 181, 'Married with kids', '', NULL, NULL, NULL),
(411, 181, 'Married without kids', '', NULL, NULL, NULL),
(412, 181, 'Divorced/ widow', '', NULL, NULL, NULL),
(413, 182, 'Yes', '', NULL, NULL, NULL),
(414, 182, 'No', '', NULL, NULL, NULL),
(415, 156, '2', '', NULL, NULL, NULL),
(416, 156, '1', '', NULL, NULL, NULL),
(417, 187, 'Social networking', '', NULL, NULL, NULL),
(418, 187, 'Listening to music', '', NULL, NULL, NULL),
(419, 187, 'Browsing internet', '', NULL, NULL, NULL),
(420, 187, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(421, 188, 'Male', 'ชาย', NULL, NULL, NULL),
(422, 188, 'Female', 'หญิง', NULL, NULL, NULL),
(423, 190, 'SES-A', '', NULL, NULL, NULL),
(424, 190, 'SES-B', '', NULL, NULL, NULL),
(425, 190, 'SES-C', '', NULL, NULL, NULL),
(426, 190, 'SES-D', '', NULL, NULL, NULL),
(427, 190, 'SES-E', '', NULL, NULL, NULL),
(428, 193, '7', '', NULL, NULL, NULL),
(429, 193, '6', '', NULL, NULL, NULL),
(430, 193, '5', '', NULL, NULL, NULL),
(431, 193, '4', '', NULL, NULL, NULL),
(432, 193, '3', '', NULL, NULL, NULL),
(433, 193, '2', '', NULL, NULL, NULL),
(434, 193, '1', '', NULL, NULL, NULL),
(435, 194, 'Definitely would buy', '', NULL, NULL, NULL),
(436, 194, 'Probably would buy', '', NULL, NULL, NULL),
(437, 194, 'Not sure', '', NULL, NULL, NULL),
(438, 194, 'Probably would not buy', '', NULL, NULL, NULL),
(439, 194, 'Definitely would not buy', '', NULL, NULL, NULL),
(440, 195, 'Size', '', NULL, NULL, NULL),
(441, 195, 'Aroma', '', NULL, NULL, NULL),
(442, 195, 'Functionality', '', NULL, NULL, NULL),
(443, 195, 'Colour', '', NULL, NULL, NULL),
(444, 195, 'Price', '', NULL, NULL, NULL),
(445, 197, 'High school or less', '', NULL, NULL, NULL),
(446, 197, 'Poly-tech or collage', '', NULL, NULL, NULL),
(447, 197, 'Bachelor\'s degree', '', NULL, NULL, NULL),
(448, 197, 'Master\'s degree or higher', '', NULL, NULL, NULL),
(449, 198, 'Male', 'ชาย', NULL, NULL, NULL),
(450, 198, 'Female', 'หญิง', NULL, NULL, NULL),
(451, 200, 'SES-A', '', NULL, NULL, NULL),
(452, 200, 'SES-B', '', NULL, NULL, NULL),
(453, 200, 'SES-C', '', NULL, NULL, NULL),
(454, 200, 'SES-D', '', NULL, NULL, NULL),
(455, 200, 'SES-E', '', NULL, NULL, NULL),
(456, 203, '7', '', NULL, NULL, NULL),
(457, 203, '6', '', NULL, NULL, NULL),
(458, 203, '5', '', NULL, NULL, NULL),
(459, 203, '4', '', NULL, NULL, NULL),
(460, 203, '3', '', NULL, NULL, NULL),
(461, 203, '2', '', NULL, NULL, NULL),
(462, 203, '1', '', NULL, NULL, NULL),
(463, 204, 'Definitely would buy', '', NULL, NULL, NULL),
(464, 204, 'Probably would buy', '', NULL, NULL, NULL),
(465, 204, 'Not sure', '', NULL, NULL, NULL),
(466, 204, 'Probably would not buy', '', NULL, NULL, NULL),
(467, 204, 'Definitely would not buy', '', NULL, NULL, NULL),
(468, 205, 'Size', '', NULL, NULL, NULL),
(469, 205, 'Aroma', '', NULL, NULL, NULL),
(470, 205, 'Functionality', '', NULL, NULL, NULL),
(471, 205, 'Colour', '', NULL, NULL, NULL),
(472, 205, 'Price', '', NULL, NULL, NULL),
(473, 207, 'High school or less', '', NULL, NULL, NULL),
(474, 207, 'Poly-tech or collage', '', NULL, NULL, NULL),
(475, 207, 'Bachelor\'s degree', '', NULL, NULL, NULL),
(476, 207, 'Master\'s degree or higher', '', NULL, NULL, NULL),
(477, 208, 'Yes', '', NULL, NULL, NULL),
(478, 208, 'No', '', NULL, NULL, NULL),
(479, 208, 'Cannot remember', '', NULL, NULL, NULL),
(480, 209, 'Daily', '', NULL, NULL, NULL),
(481, 209, 'Weekly', '', NULL, NULL, NULL),
(482, 209, 'Monthly', '', NULL, NULL, NULL),
(483, 209, 'Less often', '', NULL, NULL, NULL),
(484, 212, 'Yes', '', NULL, NULL, NULL),
(485, 212, 'No', '', NULL, NULL, NULL),
(486, 213, 'Free TV', '', NULL, NULL, NULL),
(487, 213, 'Cable TV', '', NULL, NULL, NULL),
(488, 213, 'On-demand TV', '', NULL, NULL, NULL),
(489, 213, 'Internet e.g. YouTube', '', NULL, NULL, NULL),
(490, 213, '!others Other (please specify):', '', NULL, NULL, NULL),
(491, 214, '7=Very interested', '', NULL, NULL, NULL),
(492, 214, '6', '', NULL, NULL, NULL),
(493, 214, '5', '', NULL, NULL, NULL),
(494, 214, '4', '', NULL, NULL, NULL),
(495, 214, '3', '', NULL, NULL, NULL),
(496, 214, '2', '', NULL, NULL, NULL),
(497, 214, '1=Not at all interested', '', NULL, NULL, NULL),
(498, 215, 'Clear message', '', NULL, NULL, NULL),
(499, 215, 'Informative', '', NULL, NULL, NULL),
(500, 215, 'Memorable', '', NULL, NULL, NULL),
(501, 215, 'Fun', '', NULL, NULL, NULL),
(502, 215, 'Boring', '', NULL, NULL, NULL),
(503, 217, 'All the time', '', NULL, NULL, NULL),
(504, 217, 'Most of the time', '', NULL, NULL, NULL),
(505, 217, 'Occasionally', '', NULL, NULL, NULL),
(506, 217, 'Rarely', '', NULL, NULL, NULL),
(507, 218, 'Smart phone', '', NULL, NULL, NULL),
(508, 218, 'Tablets', '', NULL, NULL, NULL),
(509, 218, 'Laptop computer', '', NULL, NULL, NULL),
(510, 218, 'Desktop computer', '', NULL, NULL, NULL),
(511, 218, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(512, 220, 'Single', '', NULL, NULL, NULL),
(513, 220, 'Married with kids', '', NULL, NULL, NULL),
(514, 220, 'Married without kids', '', NULL, NULL, NULL),
(515, 220, 'Divorced/ widow', '', NULL, NULL, NULL),
(516, 221, 'Yes', '', NULL, NULL, NULL),
(517, 221, 'No', '', NULL, NULL, NULL),
(518, 221, 'Cannot remember', '', NULL, NULL, NULL),
(519, 222, 'Daily', '', NULL, NULL, NULL),
(520, 222, 'Weekly', '', NULL, NULL, NULL),
(521, 222, 'Monthly', '', NULL, NULL, NULL),
(522, 222, 'Less often', '', NULL, NULL, NULL),
(523, 225, 'Yes', '', NULL, NULL, NULL),
(524, 225, 'No', '', NULL, NULL, NULL),
(525, 226, 'Free TV', '', NULL, NULL, NULL),
(526, 226, 'Cable TV', '', NULL, NULL, NULL),
(527, 226, 'On-demand TV', '', NULL, NULL, NULL),
(528, 226, 'Internet e.g. YouTube', '', NULL, NULL, NULL),
(529, 226, '!others Other (please specify):', '', NULL, NULL, NULL),
(530, 227, '7=Very interested', '', NULL, NULL, NULL),
(531, 227, '6', '', NULL, NULL, NULL),
(532, 227, '5', '', NULL, NULL, NULL),
(533, 227, '4', '', NULL, NULL, NULL),
(534, 227, '3', '', NULL, NULL, NULL),
(535, 227, '2', '', NULL, NULL, NULL),
(536, 227, '1=Not at all interested', '', NULL, NULL, NULL),
(537, 228, 'Clear message', '', NULL, NULL, NULL),
(538, 228, 'Informative', '', NULL, NULL, NULL),
(539, 228, 'Memorable', '', NULL, NULL, NULL),
(540, 228, 'Fun', '', NULL, NULL, NULL),
(541, 228, 'Boring', '', NULL, NULL, NULL),
(542, 230, 'All the time', '', NULL, NULL, NULL),
(543, 230, 'Most of the time', '', NULL, NULL, NULL),
(544, 230, 'Occasionally', '', NULL, NULL, NULL),
(545, 230, 'Rarely', '', NULL, NULL, NULL),
(546, 231, 'Smart phone', '', NULL, NULL, NULL),
(547, 231, 'Tablets', '', NULL, NULL, NULL),
(548, 231, 'Laptop computer', '', NULL, NULL, NULL),
(549, 231, 'Desktop computer', '', NULL, NULL, NULL),
(550, 231, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(551, 233, 'Single', '', NULL, NULL, NULL),
(552, 233, 'Married with kids', '', NULL, NULL, NULL),
(553, 233, 'Married without kids', '', NULL, NULL, NULL),
(554, 233, 'Divorced/ widow', '', NULL, NULL, NULL),
(555, 234, 'Yes', '', NULL, NULL, NULL),
(556, 234, 'No', '', NULL, NULL, NULL),
(557, 234, 'Cannot remember', '', NULL, NULL, NULL),
(558, 235, 'Daily', '', NULL, NULL, NULL),
(559, 235, 'Weekly', '', NULL, NULL, NULL),
(560, 235, 'Monthly', '', NULL, NULL, NULL),
(561, 235, 'Less often', '', NULL, NULL, NULL),
(562, 238, 'Yes', '', NULL, NULL, NULL),
(563, 238, 'No', '', NULL, NULL, NULL),
(564, 239, 'Free TV', '', NULL, NULL, NULL),
(565, 239, 'Cable TV', '', NULL, NULL, NULL),
(566, 239, 'On-demand TV', '', NULL, NULL, NULL),
(567, 239, 'Internet e.g. YouTube', '', NULL, NULL, NULL),
(568, 239, '!others Other (please specify):', '', NULL, NULL, NULL),
(569, 240, '7=Very interested', '', NULL, NULL, NULL),
(570, 240, '6', '', NULL, NULL, NULL),
(571, 240, '5', '', NULL, NULL, NULL),
(572, 240, '4', '', NULL, NULL, NULL),
(573, 240, '3', '', NULL, NULL, NULL),
(574, 240, '2', '', NULL, NULL, NULL),
(575, 240, '1=Not at all interested', '', NULL, NULL, NULL),
(576, 241, 'Clear message', '', NULL, NULL, NULL),
(577, 241, 'Informative', '', NULL, NULL, NULL),
(578, 241, 'Memorable', '', NULL, NULL, NULL),
(579, 241, 'Fun', '', NULL, NULL, NULL),
(580, 241, 'Boring', '', NULL, NULL, NULL),
(581, 243, 'All the time', '', NULL, NULL, NULL),
(582, 243, 'Most of the time', '', NULL, NULL, NULL),
(583, 243, 'Occasionally', '', NULL, NULL, NULL),
(584, 243, 'Rarely', '', NULL, NULL, NULL),
(585, 244, 'Smart phone', '', NULL, NULL, NULL),
(586, 244, 'Tablets', '', NULL, NULL, NULL),
(587, 244, 'Laptop computer', '', NULL, NULL, NULL),
(588, 244, 'Desktop computer', '', NULL, NULL, NULL),
(589, 244, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(590, 246, 'Single', '', NULL, NULL, NULL),
(591, 246, 'Married with kids', '', NULL, NULL, NULL),
(592, 246, 'Married without kids', '', NULL, NULL, NULL),
(593, 246, 'Divorced/ widow', '', NULL, NULL, NULL),
(594, 247, 'Male', 'ผู้ชาย', NULL, NULL, NULL),
(595, 247, 'Female', 'ผู้หญิง', NULL, NULL, NULL),
(596, 250, 'Mobile phone', '', NULL, NULL, NULL),
(597, 250, 'Tablet', '', NULL, NULL, NULL),
(598, 250, 'Laptop computer', '', NULL, NULL, NULL),
(599, 250, 'Desktop computer', '', NULL, NULL, NULL),
(600, 250, '!others Other (please specify):', '', NULL, NULL, NULL),
(601, 250, 'None of the above', '', NULL, NULL, NULL),
(602, 251, 'Apple iPhone', '', NULL, NULL, NULL),
(603, 251, 'Samsung', '', NULL, NULL, NULL),
(604, 251, 'LG', '', NULL, NULL, NULL),
(605, 251, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(606, 254, '5', '', NULL, NULL, NULL),
(607, 254, '4', '', NULL, NULL, NULL),
(608, 254, '3', '', NULL, NULL, NULL),
(609, 254, '2', '', NULL, NULL, NULL),
(610, 254, '1', '', NULL, NULL, NULL),
(611, 255, 'Colour', '', NULL, NULL, NULL),
(612, 255, 'Size', '', NULL, NULL, NULL),
(613, 255, 'Flavour', '', NULL, NULL, NULL),
(614, 255, 'Price', '', NULL, NULL, NULL),
(615, 257, 'Single', '', NULL, NULL, NULL),
(616, 257, 'Married with kids', '', NULL, NULL, NULL),
(617, 257, 'Married without kids', '', NULL, NULL, NULL),
(618, 257, 'Divorced/ widow', '', NULL, NULL, NULL),
(619, 258, 'Yes', '', NULL, NULL, NULL),
(620, 258, 'No', '', NULL, NULL, NULL),
(621, 260, 'Less than 2,000 Baht', '', NULL, NULL, NULL),
(622, 260, '2,000-5,000 Baht', '', NULL, NULL, NULL),
(623, 260, '5,001-10,000 Baht', '', NULL, NULL, NULL),
(624, 260, 'More than 10,000 Baht', '', NULL, NULL, NULL),
(625, 261, 'AIS', '', NULL, NULL, NULL),
(626, 261, 'dtac', '', NULL, NULL, NULL),
(627, 261, 'True', '', NULL, NULL, NULL),
(628, 261, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(629, 260, 'Refused to answer', 'ปฏิเสธ', NULL, NULL, NULL),
(639, 263, 'Green', 'เขียว', NULL, NULL, NULL),
(636, 263, 'Blue', 'น้ำเงิน', NULL, NULL, NULL),
(641, 263, 'Mall', '', NULL, NULL, NULL),
(642, 263, 'SES-A', 'สถานะภาพทางสังคม A', NULL, NULL, NULL),
(643, 264, '1', '', NULL, NULL, NULL),
(644, 264, '2', '', NULL, NULL, NULL),
(645, 264, '3', '', NULL, NULL, NULL),
(646, 264, '4 or more', '', NULL, NULL, NULL),
(675, 19, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(649, 265, 'Male', 'ผู้ชาย', NULL, NULL, NULL),
(650, 265, 'Female', 'ผู้หญิง', NULL, NULL, NULL),
(651, 266, '5', '', NULL, NULL, NULL),
(652, 266, '4', '', NULL, NULL, NULL),
(653, 266, '3', '', NULL, NULL, NULL),
(654, 266, '2', '', NULL, NULL, NULL),
(655, 266, '1', '', NULL, NULL, NULL),
(656, 267, 'Trance', '', NULL, NULL, NULL),
(657, 267, 'House', '', NULL, NULL, NULL),
(658, 267, 'Jazz', '', NULL, NULL, NULL),
(659, 267, 'Rock', '', NULL, NULL, NULL),
(660, 268, 'Single', '', NULL, NULL, NULL),
(661, 268, 'Married with kids', '', NULL, NULL, NULL),
(662, 268, 'Married without kids', '', NULL, NULL, NULL),
(663, 268, 'Divorced/ widow', '', NULL, NULL, NULL),
(664, 112, 'Yes', '', NULL, NULL, NULL),
(665, 112, 'No', '', NULL, NULL, NULL),
(666, 269, 'Apple iPhone', '', NULL, NULL, NULL),
(667, 269, 'Samsung', '', NULL, NULL, NULL),
(668, 269, 'LG', '', NULL, NULL, NULL),
(669, 269, '!others', 'อื่นๆ (ระบุ)', NULL, NULL, NULL),
(670, 270, '1', '', NULL, NULL, NULL),
(671, 270, '2', '', NULL, NULL, NULL),
(672, 270, '3', '', NULL, NULL, NULL),
(673, 270, '4', '', NULL, NULL, NULL),
(674, 270, '5 or more', '', NULL, NULL, NULL),
(677, 243, '!other Other (please specify):', '', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `x_question_type`
--

CREATE TABLE `x_question_type` (
  `id` bigint(10) NOT NULL,
  `typeid` bigint(10) NOT NULL DEFAULT '0',
  `type` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `has_choices` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `response_table` varchar(32) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_question_type`
--

INSERT INTO `x_question_type` (`id`, `typeid`, `type`, `has_choices`, `response_table`) VALUES
(1, 1, 'Single answer (SA)', 'Y', 'response_single'),
(2, 2, 'Multiple answer (MA)', 'Y', 'response_multiple'),
(3, 3, 'Open-end (short)', 'N', 'response_text'),
(4, 4, 'Open-end (long)', 'N', 'response_text'),
(5, 5, 'Attribute association (NOT USE)', 'Y', 'response_rank'),
(6, 6, 'Attribute rating', 'Y', 'response_rank'),
(7, 7, 'Drop down', 'Y', 'response_single'),
(8, 8, 'Date', 'N', 'response_date'),
(9, 9, 'Numeric', 'N', 'response_text'),
(10, 10, 'Others', 'N', 'response_text'),
(99, 99, 'Page break', 'N', ''),
(100, 100, 'Section text', 'N', '');

-- --------------------------------------------------------

--
-- Table structure for table `x_question_type_more`
--

CREATE TABLE `x_question_type_more` (
  `id` bigint(10) NOT NULL,
  `typeid` bigint(10) NOT NULL DEFAULT '0',
  `type` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `has_choices` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `response_table` varchar(32) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_question_type_more`
--

INSERT INTO `x_question_type_more` (`id`, `typeid`, `type`, `has_choices`, `response_table`) VALUES
(1, 1, 'Single answer (SA)', 'Y', 'response_single'),
(2, 2, 'Multiple answer (MA)', 'Y', 'response_multiple'),
(3, 3, 'Single-line open-end', 'N', 'response_text'),
(4, 4, 'Multi-line open-end', 'N', 'response_text'),
(5, 5, 'Rating scale', 'Y', 'response_rank'),
(6, 6, 'Attribute rating', 'Y', 'response_rank'),
(7, 7, 'Drop down', 'Y', 'response_single'),
(8, 8, 'Date', 'N', 'response_date'),
(9, 9, 'Numeric', 'N', 'response_text'),
(10, 10, 'Others', 'N', 'response_text'),
(11, 11, 'Rating scale (1-3)', 'Y', 'response_rank'),
(12, 12, 'Rating scale (1-4)', 'Y', 'response_rank'),
(13, 13, 'Rating scale (1-5)', 'Y', 'response_rank'),
(14, 14, 'Rating scale (1-6)', 'Y', 'response_rank'),
(15, 15, 'Rating scale (1-7)', 'Y', 'response_rank'),
(16, 16, 'Rating scale (1-8)', 'Y', 'response_rank'),
(17, 17, 'Rating scale (1-9)', 'Y', 'response_rank'),
(18, 18, 'Rating scale (1-10)', 'Y', 'response_rank'),
(19, 19, '----------', 'Y', 'response_rank'),
(20, 20, '----------', 'Y', 'response_rank'),
(21, 21, 'Attribute rating (1-3)', 'Y', 'response_rank'),
(22, 22, 'Attribute rating (1-4)', 'Y', 'response_rank'),
(23, 23, 'Attribute rating (1-5)', 'Y', 'response_rank'),
(24, 24, 'Attribute rating (1-6)', 'Y', 'response_rank'),
(25, 25, 'Attribute rating (1-7)', 'Y', 'response_rank'),
(26, 26, 'Attribute rating (1-8)', 'Y', 'response_rank'),
(27, 27, 'Attribute rating (1-9)', 'Y', 'response_rank'),
(28, 28, 'Attribute rating (1-10)', 'Y', 'response_rank'),
(29, 29, '----------', 'Y', 'response_rank'),
(30, 30, '----------', 'Y', 'response_rank'),
(99, 99, 'Page break', 'N', ''),
(100, 100, 'Section text', 'N', '');

-- --------------------------------------------------------

--
-- Table structure for table `x_realm`
--

CREATE TABLE `x_realm` (
  `id` bigint(10) NOT NULL,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `changed` datetime NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_realm`
--

INSERT INTO `x_realm` (`id`, `name`, `title`, `changed`) VALUES
(1, 'superuser', 'System Administrators', '0000-00-00 00:00:00'),
(2, 'auto', 'Self added users', '0000-00-00 00:00:00'),
(3, 'Lily', 'Company 1', '2016-02-27 15:41:36'),
(4, 'Tulip', 'Company 2', '2016-02-27 15:42:42'),
(5, 'Carnation', 'Company 3', '2016-02-27 15:42:59'),
(10, 'Rose', 'Company 4', '2016-03-01 14:39:46');

-- --------------------------------------------------------

--
-- Table structure for table `x_respondent`
--

CREATE TABLE `x_respondent` (
  `id` bigint(10) NOT NULL,
  `username` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `auth` varchar(16) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'BASIC',
  `realm` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `fname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `disabled` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `changed` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `expiration` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `oauth_provider` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `oauth_uid` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_respondent`
--

INSERT INTO `x_respondent` (`id`, `username`, `password`, `auth`, `realm`, `fname`, `lname`, `email`, `disabled`, `changed`, `expiration`, `oauth_provider`, `oauth_uid`) VALUES
(2, 'phumin@sawasdee.org', '*89C6B530AA78695E257E55D63C00A6EC9AD3E977', 'BASIC', 'auto', 'Phumin', 'Chesdmethee', 'phumin@sawasdee.org', 'N', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(6, 'pe@siamspeed.com', '*89C6B530AA78695E257E55D63C00A6EC9AD3E977', 'BASIC', 'auto', 'Pe', 'SiamSpeed', 'pe@siamspeed.com', 'N', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `x_response`
--

CREATE TABLE `x_response` (
  `id` bigint(10) NOT NULL,
  `survey_id` bigint(10) NOT NULL DEFAULT '0',
  `submitted` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `complete` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `username` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ip` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_response`
--

INSERT INTO `x_response` (`id`, `survey_id`, `submitted`, `complete`, `username`, `ip`) VALUES
(102, 12, '2016-05-15 13:23:18', 'N', 'anonymous', '119.42.115.38'),
(117, 12, '2016-05-15 16:55:13', 'N', 'anonymous', '119.42.115.38'),
(120, 12, '2016-05-19 13:45:57', 'N', 'anonymous', '61.90.16.2'),
(121, 12, '2016-05-19 13:50:24', 'N', 'anonymous', '61.90.16.2'),
(122, 12, '2016-05-19 13:54:14', 'N', 'anonymous', '61.90.16.2'),
(124, 11, '2016-05-28 10:46:00', 'Y', 'anonymous', '58.8.222.137'),
(125, 13, '2016-05-29 12:23:40', 'N', 'anonymous', '159.192.253.251'),
(126, 11, '2016-08-30 06:26:33', 'N', 'anonymous', '115.87.233.61');

-- --------------------------------------------------------

--
-- Table structure for table `x_response_bool`
--

CREATE TABLE `x_response_bool` (
  `id` bigint(10) NOT NULL,
  `response_id` bigint(10) NOT NULL DEFAULT '0',
  `question_id` bigint(10) NOT NULL DEFAULT '0',
  `choice_id` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `x_response_date`
--

CREATE TABLE `x_response_date` (
  `id` bigint(10) NOT NULL,
  `response_id` bigint(10) NOT NULL DEFAULT '0',
  `question_id` bigint(10) NOT NULL DEFAULT '0',
  `response` longtext COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `x_response_multiple`
--

CREATE TABLE `x_response_multiple` (
  `id` bigint(10) NOT NULL,
  `response_id` bigint(10) NOT NULL DEFAULT '0',
  `question_id` bigint(10) NOT NULL DEFAULT '0',
  `choice_id` bigint(10) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_response_multiple`
--

INSERT INTO `x_response_multiple` (`id`, `response_id`, `question_id`, `choice_id`) VALUES
(9, 102, 261, 625),
(10, 102, 261, 626),
(11, 102, 261, 628),
(12, 102, 239, 564),
(13, 102, 239, 566),
(14, 102, 239, 568),
(22, 116, 239, 564),
(23, 116, 239, 565),
(24, 116, 239, 568),
(25, 117, 261, 625),
(26, 117, 261, 626),
(27, 117, 239, 564),
(28, 117, 239, 566),
(29, 120, 261, 625),
(30, 120, 261, 626),
(31, 120, 261, 627),
(32, 122, 261, 625),
(33, 122, 261, 626),
(34, 122, 261, 627),
(38, 124, 226, 525),
(39, 124, 226, 526),
(40, 124, 226, 527),
(41, 124, 231, 546),
(42, 124, 231, 547),
(43, 124, 231, 548);

-- --------------------------------------------------------

--
-- Table structure for table `x_response_other`
--

CREATE TABLE `x_response_other` (
  `id` bigint(10) NOT NULL,
  `response_id` bigint(10) NOT NULL DEFAULT '0',
  `question_id` bigint(10) NOT NULL DEFAULT '0',
  `choice_id` bigint(10) NOT NULL DEFAULT '0',
  `response` longtext COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_response_other`
--

INSERT INTO `x_response_other` (`id`, `response_id`, `question_id`, `choice_id`, `response`) VALUES
(12, 116, 239, 568, 'Red');

-- --------------------------------------------------------

--
-- Table structure for table `x_response_rank`
--

CREATE TABLE `x_response_rank` (
  `id` bigint(10) NOT NULL,
  `response_id` bigint(10) NOT NULL DEFAULT '0',
  `question_id` bigint(10) NOT NULL DEFAULT '0',
  `choice_id` bigint(10) NOT NULL DEFAULT '0',
  `rank` bigint(10) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_response_rank`
--

INSERT INTO `x_response_rank` (`id`, `response_id`, `question_id`, `choice_id`, `rank`) VALUES
(26, 102, 240, 0, 3),
(27, 102, 241, 576, 1),
(28, 102, 241, 577, 0),
(29, 102, 241, 578, 2),
(30, 102, 241, 579, 3),
(31, 102, 241, 580, 3),
(43, 116, 240, 0, 572),
(44, 116, 241, 576, 4),
(45, 116, 241, 577, 4),
(46, 116, 241, 578, 1),
(47, 116, 241, 579, 2),
(48, 116, 241, 580, 4),
(49, 117, 240, 0, 572),
(50, 117, 241, 576, 5),
(51, 117, 241, 577, 4),
(52, 117, 241, 578, 3),
(53, 117, 241, 579, 3),
(54, 117, 241, 580, 2),
(59, 124, 228, 537, 4),
(60, 124, 228, 538, 3),
(61, 124, 228, 539, 5),
(62, 124, 228, 540, 5),
(63, 124, 228, 541, 4);

-- --------------------------------------------------------

--
-- Table structure for table `x_response_rating`
--

CREATE TABLE `x_response_rating` (
  `id` bigint(10) NOT NULL,
  `response_id` bigint(10) NOT NULL DEFAULT '0',
  `question_id` bigint(10) NOT NULL DEFAULT '0',
  `choice_id` bigint(10) NOT NULL DEFAULT '0',
  `rank` bigint(10) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `x_response_single`
--

CREATE TABLE `x_response_single` (
  `id` bigint(10) NOT NULL,
  `response_id` bigint(10) NOT NULL DEFAULT '0',
  `question_id` bigint(10) NOT NULL DEFAULT '0',
  `choice_id` bigint(10) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_response_single`
--

INSERT INTO `x_response_single` (`id`, `response_id`, `question_id`, `choice_id`) VALUES
(178, 102, 234, 556),
(179, 102, 235, 559),
(180, 102, 260, 622),
(181, 102, 238, 563),
(202, 116, 238, 562),
(203, 116, 243, 0),
(204, 116, 246, 0),
(205, 116, 234, 0),
(206, 116, 235, 0),
(207, 116, 260, 0),
(208, 117, 234, 555),
(209, 117, 235, 559),
(210, 117, 260, 629),
(211, 117, 238, 562),
(217, 120, 234, 555),
(218, 120, 235, 0),
(219, 120, 260, 622),
(220, 121, 234, 555),
(221, 121, 235, 0),
(222, 121, 260, 623),
(223, 122, 234, 556),
(224, 122, 235, 0),
(225, 122, 260, 623),
(231, 124, 221, 516),
(232, 124, 222, 520),
(233, 124, 225, 523),
(234, 124, 227, 530),
(235, 124, 230, 542),
(236, 124, 233, 553),
(237, 125, 247, 594),
(238, 126, 221, 516),
(239, 126, 222, 520);

-- --------------------------------------------------------

--
-- Table structure for table `x_response_text`
--

CREATE TABLE `x_response_text` (
  `id` bigint(10) NOT NULL,
  `response_id` bigint(10) NOT NULL DEFAULT '0',
  `question_id` bigint(10) NOT NULL DEFAULT '0',
  `response` longtext COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_response_text`
--

INSERT INTO `x_response_text` (`id`, `response_id`, `question_id`, `response`) VALUES
(25, 125, 248, '15');

-- --------------------------------------------------------

--
-- Table structure for table `x_survey`
--

CREATE TABLE `x_survey` (
  `id` bigint(10) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `owner` varchar(16) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `realm` varchar(64) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `public` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `status` bigint(10) NOT NULL DEFAULT '0',
  `open_date` datetime DEFAULT NULL,
  `close_date` datetime DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subtitle` longtext COLLATE utf8_unicode_ci,
  `subtitle_th` longtext COLLATE utf8_unicode_ci NOT NULL,
  `info` longtext COLLATE utf8_unicode_ci,
  `info_th` longtext COLLATE utf8_unicode_ci NOT NULL,
  `theme` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thanks_page` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thank_head` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thank_head_th` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `thank_body` longtext COLLATE utf8_unicode_ci,
  `thank_body_th` longtext COLLATE utf8_unicode_ci NOT NULL,
  `changed` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `auto_num` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_survey`
--

INSERT INTO `x_survey` (`id`, `name`, `owner`, `realm`, `public`, `status`, `open_date`, `close_date`, `title`, `email`, `subtitle`, `subtitle_th`, `info`, `info_th`, `theme`, `thanks_page`, `thank_head`, `thank_head_th`, `thank_body`, `thank_body_th`, `changed`, `auto_num`) VALUES
(1, 'PEB0001', 'phumin', 'Tulip', 'Y', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Apollo', 'webmaster@siamsquare.org', 'Customer satisfaction survey', '', 'A customer satisfaction survey for laptop in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', 'Thank you for participating in this survey', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '', '2016-05-19 14:51:55', 'Y'),
(2, 'PEB0002', 'phumin', 'Tulip', 'Y', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Neptune', 'webmaster@siamsquare.org', 'Event evaluation', '', 'An event evaluation in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', 'Thank you for participating in this survey', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '', '2016-05-19 14:50:15', 'Y'),
(3, 'PEB0003', 'siamsquare', 'Tulip', 'Y', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fade', 'webmaster@siamsquare.org', 'Demographic survey', '', 'A demographic survey for Thai population in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected to be as many as possible. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', NULL, '', 'Your participation is what we valued.\r\n\r\nThanks a lot.', '', '2016-05-20 07:34:31', 'Y'),
(5, 'PEB0005', 'phumin', 'Tulip', 'Y', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pluto', 'webmaster@siamsquare.org', 'Demographic survey', '', 'A demographic survey for Thai population in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected to be as many as possible. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', 'Thank you for participating in this survey', '', 'Your participation is what we valued.\n\nThanks a lot.', '', '2016-05-19 14:51:21', 'Y'),
(6, 'PEB0006', 'phumin', 'Tulip', 'Y', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Higher', 'webmaster@siamsquare.org', 'Concept testing', '', 'An event evaluation in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', 'Thank you for participating in this survey', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '', '2016-05-19 14:46:51', 'Y'),
(7, 'PEB0007', 'phumin', 'Tulip', 'Y', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Winter', 'webmaster@siamsquare.org', 'Brand health check', '', 'Brand health check for key beverage brands which will be checked by dividing into different sub-category for a comprehensive leaning.', 'ตรวจสุขภาพยี่ห้อประจำปี สำหรับยี่ห้อน้ำดื่มประเภทต่างๆ', 'ssq.css', '', '', '', '', '', '2016-05-19 10:01:51', 'Y'),
(8, 'PEB0008', 'phumin', 'Tulip', 'Y', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Horizon', 'webmaster@siamsquare.org', 'Customer satisfaction survey', '', 'A customer satisfaction survey for laptop in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', 'Thank you for participating in this survey', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '', '2016-05-19 14:48:50', 'Y'),
(9, 'PEB0009', 'phumin', 'Tulip', 'Y', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Warsaw', 'webmaster@siamsquare.org', 'Customer satisfaction survey', '', 'A customer satisfaction survey for laptop in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', 'Thank you for participating in this survey', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '', '2016-05-19 10:37:26', 'Y'),
(10, 'PEB0010', 'phumin', 'Tulip', 'Y', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hourglass', 'webmaster@siamsquare.org', 'Event evaluation', '', 'An event evaluation in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', 'Thank you for participating in this survey', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '', '2016-05-19 10:36:33', 'Y'),
(11, 'PEB0011', 'phumin', 'Tulip', 'Y', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mercury', 'webmaster@siamsquare.org', 'Event evaluation', '', 'An event evaluation in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', 'Thank you for participating in this survey', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '', '2016-05-19 14:49:26', 'Y'),
(12, 'PEB0012', 'phumin', 'Tulip', 'Y', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pandora', 'webmaster@siamsquare.org', 'Event evaluation', '', 'An event evaluation targeting Thailand census. Sample size is expected at n=2,000 or more. And this survey will be available from May 2016 until November 2016.', 'งานวิจัยสำหรับประเมินการจัดงานอีเว้นท์​ คลอบคลุมกลุ่มเป้าหมายรวมทั้งหมด กลุ่มตัวอย่างที่คาดหวังคือ n=2,000 หรือมากกว่า งานวิจัยชิ้นนี้อยู่ในช่วงพฤษภาคมถึงพฤศจิกายน 2559', 'ssq.css', NULL, 'Thank you for taking part of this survey', 'ขอบพระคุณที่สละเวลาร่วมแสดงความคิดเห็น', 'Your opinions are value to us. We make sure your opinons will be analysed at an aggregated level. And your opinions will be kept at the highest level of confidentiality.', 'ความคิดเห็นของคุณมีค่าอย่างยิ่งสำหรับเรา ผลวิจัยจะถูกประมวลผลจากกลุ่มตัวอย่างทั้งหมดเท่านั้น และเราจะปกปิดข้อมูลทุกอย่างของคุณไว้เป็นความลับอย่างสูงสุด', '2016-08-30 06:30:57', 'Y'),
(13, 'PEB0013', 'phumin', 'Tulip', 'Y', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Magenta', 'webmaster@siamsquare.org', 'Demographic survey', '', 'A demographic survey for Thai population in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected to be as many as possible. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', 'Thank you for participating in this survey', '', 'Your participation is what we valued.\r\n\r\nThanks a lot.', '', '2016-05-19 11:33:30', 'Y'),
(14, 'PEB0014', 'phumin', 'Tulip', 'Y', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Blue', '', 'Name test', '', '', '', 'ssq.css', '', NULL, '', '', '', '2016-05-20 08:15:36', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `x_survey_back`
--

CREATE TABLE `x_survey_back` (
  `id` bigint(10) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `owner` varchar(16) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `realm` varchar(64) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `public` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `status` bigint(10) NOT NULL DEFAULT '0',
  `open_date` datetime DEFAULT NULL,
  `close_date` datetime DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subtitle` longtext COLLATE utf8_unicode_ci,
  `subtitle_th` longtext COLLATE utf8_unicode_ci NOT NULL,
  `info` longtext COLLATE utf8_unicode_ci,
  `info_th` longtext COLLATE utf8_unicode_ci NOT NULL,
  `theme` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thanks_page` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thanks_head_th` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `thank_body` longtext COLLATE utf8_unicode_ci,
  `changed` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `auto_num` varchar(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_survey_back`
--

INSERT INTO `x_survey_back` (`id`, `name`, `owner`, `realm`, `public`, `status`, `open_date`, `close_date`, `title`, `email`, `subtitle`, `subtitle_th`, `info`, `info_th`, `theme`, `thanks_page`, `thanks_head_th`, `thank_body`, `changed`, `auto_num`) VALUES
(1, 'PEB0001', 'phumin', 'Tulip', 'Y', 1, '2017-02-26 00:00:00', '2017-05-29 00:00:00', 'Apollo', 'webmaster@siamsquare.org', 'Customer satisfaction survey', '', 'A customer satisfaction survey for laptop in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '2016-03-27 10:08:11', 'Y'),
(2, 'PEB0002', 'phumin', 'Tulip', 'Y', 0, '2017-02-26 00:00:00', '2017-05-29 00:00:00', 'Neptune', 'webmaster@siamsquare.org', 'Event evaluation', '', 'An event evaluation in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '2016-03-27 14:02:19', 'Y'),
(3, 'PEB0003', 'siamsquare', 'Tulip', 'Y', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fade', '', 'Demographic survey', '', 'A demographic survey for Thai population in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected to be as many as possible. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', '', 'Your participation is what we valued.\r\n\r\nThanks a lot.', '2016-03-27 14:01:44', 'Y'),
(5, 'PEB0005', 'phumin', 'Tulip', 'Y', 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pluto', '', 'Demographic survey', '', 'A demographic survey for Thai population in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected to be as many as possible. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', '', 'Your participation is what we valued.\r\n\r\nThanks a lot.', '2016-03-28 08:41:34', 'Y'),
(6, 'PEB0006', 'phumin', 'Tulip', '', 0, '2017-02-26 00:00:00', '2017-05-29 00:00:00', 'Higher', 'webmaster@siamsquare.org', 'Concept testing', '', 'An event evaluation in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '2016-04-15 02:11:24', 'Y'),
(7, 'PEB0007', 'phumin', 'Tulip', 'Y', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Winter', '', 'Brand health check', 'ตรวจสุขภาพยี่ห้อ', 'Brand health check for key beverage brands which will be checked by dividing into different sub-category for a comprehensive leaning.', 'ตรวจสุขภาพยี่ห้อประจำปี สำหรับยี่ห้อน้ำดื่มประเภทต่างๆ', 'ssq.css', '', '', '', '2016-03-28 11:07:46', 'Y'),
(8, 'PEB0008', 'phumin', 'Tulip', 'Y', 8, '2017-02-26 00:00:00', '2017-05-29 00:00:00', 'Horizon', 'webmaster@siamsquare.org', 'Customer satisfaction survey', '', 'A customer satisfaction survey for laptop in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '2016-03-28 12:32:14', 'Y'),
(9, 'PEB0009', 'phumin', 'Tulip', 'Y', 1, '2017-02-26 00:00:00', '2017-05-29 00:00:00', 'Warsaw', 'webmaster@siamsquare.org', 'Customer satisfaction survey', '', 'A customer satisfaction survey for laptop in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '2016-03-28 12:31:53', 'Y'),
(10, 'PEB0010', 'phumin', 'Tulip', 'Y', 1, '2017-02-26 00:00:00', '2017-05-29 00:00:00', 'Hourglass', 'webmaster@siamsquare.org', 'Event evaluation', '', 'An event evaluation in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '2016-03-28 12:30:57', 'Y'),
(11, 'PEB0011', 'phumin', 'Tulip', '', 0, '2017-02-26 00:00:00', '2017-05-29 00:00:00', 'Mercury', 'webmaster@siamsquare.org', 'Event evaluation', '', 'An event evaluation in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '2016-04-14 18:26:27', 'Y'),
(12, 'PEB0012', 'phumin', 'Tulip', 'Y', 0, '2017-02-26 00:00:00', '2017-05-29 00:00:00', 'Pandora', 'webmaster@siamsquare.org', 'Event evaluation', '', 'An event evaluation in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected at around n=200. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', '', 'Your opinions are value to us.\r\n\r\nWe make sure your opinons will be analysed at an aggregated level.\r\n\r\nAnd your opinions will be kept at the highest level of confidentiality.', '2016-04-06 05:53:49', 'Y'),
(13, 'PEB0013', 'phumin', 'Tulip', '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Magenta', '', 'Demographic survey', '', 'A demographic survey for Thai population in general. \r\n\r\nTarget audiences can be anyone and there will be no need for invitation for this survey (it is available to the public). \r\n\r\nSample size is expected to be as many as possible. \r\n\r\nThis survey will be available from March 2016 until June 2016.', '', 'ssq.css', '', '', 'Your participation is what we valued.\r\n\r\nThanks a lot.', '2016-04-14 17:37:09', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `x_survey_statistics`
--

CREATE TABLE `x_survey_statistics` (
  `id` bigint(10) NOT NULL,
  `survey_id` bigint(10) NOT NULL DEFAULT '0',
  `loginfail` bigint(10) NOT NULL DEFAULT '0',
  `attempted` bigint(10) NOT NULL DEFAULT '0',
  `abandoned` bigint(10) NOT NULL DEFAULT '0',
  `suspended` bigint(10) NOT NULL DEFAULT '0',
  `completed` bigint(10) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_survey_statistics`
--

INSERT INTO `x_survey_statistics` (`id`, `survey_id`, `loginfail`, `attempted`, `abandoned`, `suspended`, `completed`) VALUES
(1, 1, 0, 327, 313, 12, 0),
(2, 1, 0, 327, 313, 12, 0),
(3, 1, 0, 327, 313, 12, 0),
(4, 1, 0, 327, 313, 12, 0),
(5, 1, 0, 327, 313, 12, 0),
(6, 1, 0, 327, 313, 12, 0),
(7, 1, 0, 327, 313, 12, 0),
(8, 1, 0, 327, 313, 12, 0),
(9, 1, 0, 327, 313, 12, 0),
(10, 1, 0, 327, 313, 12, 0),
(11, 1, 0, 327, 313, 12, 0),
(12, 1, 0, 327, 313, 12, 0),
(13, 1, 0, 327, 313, 12, 0),
(14, 1, 0, 327, 313, 12, 0),
(15, 1, 0, 327, 313, 12, 0),
(16, 1, 0, 327, 313, 12, 0),
(17, 1, 0, 327, 313, 12, 0),
(18, 1, 0, 327, 313, 12, 0),
(19, 1, 0, 327, 313, 12, 0),
(20, 1, 0, 327, 313, 12, 0),
(21, 1, 0, 327, 313, 12, 0),
(22, 1, 0, 327, 313, 12, 0),
(23, 1, 0, 327, 313, 12, 0),
(24, 1, 0, 327, 313, 12, 0),
(25, 2, 0, 91, 88, 0, 0),
(26, 2, 0, 91, 88, 0, 0),
(27, 2, 0, 91, 88, 0, 0),
(28, 2, 0, 91, 88, 0, 0),
(29, 2, 0, 91, 88, 0, 0),
(30, 2, 0, 91, 88, 0, 0),
(31, 2, 0, 91, 88, 0, 0),
(32, 2, 0, 91, 88, 0, 0),
(33, 2, 0, 91, 88, 0, 0),
(34, 2, 0, 91, 88, 0, 0),
(35, 2, 0, 91, 88, 0, 0),
(36, 2, 0, 91, 88, 0, 0),
(37, 1, 0, 327, 313, 12, 0),
(38, 2, 0, 91, 88, 0, 0),
(94, 6, 0, 48, 48, 0, 0),
(93, 7, 0, 1, 1, 0, 0),
(92, 7, 0, 3, 3, 0, 0),
(82, 1, 0, 327, 313, 12, 0),
(81, 5, 0, 28, 26, 1, 0),
(80, 2, 0, 91, 88, 0, 0),
(45, 1, 0, 327, 313, 12, 0),
(79, 2, 0, 91, 88, 0, 0),
(78, 2, 0, 91, 88, 0, 0),
(77, 2, 0, 91, 88, 0, 0),
(91, 6, 0, 48, 48, 0, 0),
(76, 2, 0, 91, 88, 0, 0),
(75, 2, 0, 91, 88, 0, 0),
(74, 2, 0, 91, 88, 0, 0),
(84, 2, 0, 90, 87, 0, 0),
(83, 1, 0, 327, 313, 12, 0),
(102, 7, 0, 0, 0, 0, 0),
(101, 7, 0, 0, 0, 0, 0),
(105, 8, 0, 63, 63, 0, 0),
(100, 7, 0, 1, 1, 0, 0),
(99, 7, 0, 1, 1, 0, 0),
(90, 3, 0, 242, 241, 0, 1),
(87, 5, 0, 2, 2, 0, 0),
(86, 5, 0, 2, 2, 0, 0),
(103, 7, 0, 0, 0, 0, 0),
(85, 1, 0, 219, 219, 0, 0),
(98, 7, 0, 1, 1, 0, 0),
(97, 5, 0, 2, 2, 0, 0),
(96, 2, 0, 77, 76, 0, 0),
(68, 1, 0, 327, 313, 12, 0),
(69, 1, 0, 327, 313, 12, 0),
(104, 12, 0, 362, 361, 0, 1),
(95, 3, 0, 235, 234, 0, 1),
(89, 2, 0, 86, 83, 0, 0),
(88, 5, 0, 2, 2, 0, 0),
(106, 9, 0, 173, 172, 0, 0),
(107, 11, 0, 89, 88, 0, 1),
(108, 13, 0, 91, 91, 0, 0),
(109, 10, 0, 101, 101, 0, 0),
(110, 13, 0, 70, 70, 0, 0),
(111, 2, 0, 42, 41, 0, 0),
(112, 12, 0, 36, 36, 0, 0),
(113, 10, 0, 21, 21, 0, 0),
(114, 14, 0, 61, 61, 0, 0),
(115, 3, 0, 144, 143, 0, 1),
(116, 3, 0, 126, 126, 0, 0),
(117, 14, 0, 57, 57, 0, 0),
(118, 14, 0, 57, 57, 0, 0),
(119, 14, 0, 57, 57, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `x_version`
--

CREATE TABLE `x_version` (
  `versionid` varchar(16) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `x_version`
--

INSERT INTO `x_version` (`versionid`) VALUES
('2.2.0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `x_access`
--
ALTER TABLE `x_access`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_conditions`
--
ALTER TABLE `x_conditions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_designer`
--
ALTER TABLE `x_designer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_question`
--
ALTER TABLE `x_question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_question_choice`
--
ALTER TABLE `x_question_choice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_question_type`
--
ALTER TABLE `x_question_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_question_type_more`
--
ALTER TABLE `x_question_type_more`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_realm`
--
ALTER TABLE `x_realm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_respondent`
--
ALTER TABLE `x_respondent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_response`
--
ALTER TABLE `x_response`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_response_bool`
--
ALTER TABLE `x_response_bool`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_response_date`
--
ALTER TABLE `x_response_date`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_response_multiple`
--
ALTER TABLE `x_response_multiple`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_response_other`
--
ALTER TABLE `x_response_other`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_response_rank`
--
ALTER TABLE `x_response_rank`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_response_rating`
--
ALTER TABLE `x_response_rating`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_response_single`
--
ALTER TABLE `x_response_single`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_response_text`
--
ALTER TABLE `x_response_text`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_survey`
--
ALTER TABLE `x_survey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_survey_back`
--
ALTER TABLE `x_survey_back`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `x_survey_statistics`
--
ALTER TABLE `x_survey_statistics`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `x_access`
--
ALTER TABLE `x_access`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `x_conditions`
--
ALTER TABLE `x_conditions`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `x_designer`
--
ALTER TABLE `x_designer`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `x_question`
--
ALTER TABLE `x_question`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=271;
--
-- AUTO_INCREMENT for table `x_question_choice`
--
ALTER TABLE `x_question_choice`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=678;
--
-- AUTO_INCREMENT for table `x_question_type`
--
ALTER TABLE `x_question_type`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1001;
--
-- AUTO_INCREMENT for table `x_question_type_more`
--
ALTER TABLE `x_question_type_more`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
--
-- AUTO_INCREMENT for table `x_realm`
--
ALTER TABLE `x_realm`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `x_respondent`
--
ALTER TABLE `x_respondent`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `x_response`
--
ALTER TABLE `x_response`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
--
-- AUTO_INCREMENT for table `x_response_bool`
--
ALTER TABLE `x_response_bool`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `x_response_date`
--
ALTER TABLE `x_response_date`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `x_response_multiple`
--
ALTER TABLE `x_response_multiple`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT for table `x_response_other`
--
ALTER TABLE `x_response_other`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `x_response_rank`
--
ALTER TABLE `x_response_rank`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
--
-- AUTO_INCREMENT for table `x_response_rating`
--
ALTER TABLE `x_response_rating`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `x_response_single`
--
ALTER TABLE `x_response_single`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=240;
--
-- AUTO_INCREMENT for table `x_response_text`
--
ALTER TABLE `x_response_text`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `x_survey`
--
ALTER TABLE `x_survey`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `x_survey_back`
--
ALTER TABLE `x_survey_back`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `x_survey_statistics`
--
ALTER TABLE `x_survey_statistics`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
