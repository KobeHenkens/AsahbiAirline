
CREATE TABLE `messages` (
  `id` int(11) NOT NULL auto_increment,
  `type_reis` varchar(255) NOT NULL,
  `bestemming` varchar(255) NOT NULL,
  `budget` varchar(255) NOT NULL,
  `volwassenen` varchar(255) NOT NULL,
  `kinderen` varchar(255) NOT NULL,
  `vertrekdatum` varchar(255) NOT NULL,
  `retourdatum` varchar(255) NOT NULL,
  `voornaam` varchar(255) NOT NULL,
  `familienaam` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefoonnummer` varchar(255) NOT NULL,
  `added_on` datetime NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci AUTO_INCREMENT = 1;
