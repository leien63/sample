-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-30 15:12:54
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- 表的结构 `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `bookname` char(200) NOT NULL,
  `booktype` varchar(200) NOT NULL,
  `name` char(200) NOT NULL,
  `number` int(200) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `book`
--

INSERT INTO `book` (`id`, `bookname`, `booktype`, `name`, `number`, `time`) VALUES
(1, '《政治与经济》', '社会', '张小虎', 9907001, '2017-03-01 00:00:00'),
(4, '《股市大师》', '医学', '郁发财', 9907002, '2017-03-02 00:00:00'),
(5, '《疯狂Dston》', '医学', '李享', 9907003, '2017-03-01 00:00:00'),
(7, '本草纲目2', '娱乐', '嬴荡', 9907004, '2017-03-04 00:00:00'),
(11, '喜羊羊大灰狼', '社会', '祁小明', 9907007, '2017-03-04 00:00:00'),
(12, '天龙八部', '百家杂谈', '付总', 9907008, '2017-03-05 00:00:00'),
(15, '当代艺术', '其他', '吴晓妹', 9907010, '2017-03-08 00:00:00'),
(18, '老人与海', '百家', '胡志明', 123, '2017-03-12 00:00:00'),
(21, '&lt;script&gt;alert(&quot;混蛋&quot;);&lt;/script&gt;', '娱乐', '34', 232423, '2017-03-04 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(200) NOT NULL,
  `usename` char(200) NOT NULL,
  `password` char(200) NOT NULL,
  `lastime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `usename`, `password`, `lastime`) VALUES
(0, 'admin', 'admin', '2017-03-26 14:42:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
